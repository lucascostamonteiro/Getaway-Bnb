import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { editListing } from '../../store/listing';


const EditListing = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const listing = useSelector(state => state.listings[id]);

  const [title, setTitle] = useState(listing.title);
  const [description, setDescription] = useState(listing.description);
  const [price, setPrice] = useState(listing.price);
  const [guest, setGuest] = useState(listing.guest);
  const [bedroom, setBedroom] = useState(listing.bedroom);
  const [bathroom, setBathroom] = useState(listing.bathroom);
  const [address, setAddress] = useState(listing.address);
  const [city, setCity] = useState(listing.city);
  const [state, setState] = useState(listing.state);
  const [url, setUrl] = useState(listing.url);
  const [errors, setErrors] = useState([]);



  if (!sessionUser) return <Redirect to="/" />;


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userId = sessionUser.id;
    // console.log('USER', userId)
    const editedListing = {
      id,
      user_id: sessionUser.id,
      title,
      description,
      price,
      guest,
      bedroom,
      bathroom,
      address,
      city,
      state,
      url
    };

    // console.log('DATA', editedListing)

    const data = await dispatch(editListing(editedListing))
    if (data.errors) {
      setErrors(data.errors)
    } else if (data) {
      history.push(`/listings/${data.id}`)
      setShowModal(false)
    }
  }


  return (
    <form className='main-create-listing'>
      <div className="errors-list">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <label htmlFor="title">Title</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder='Title'
        name='title'
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder='Provide a description'
        name='description'
        required
      />
      <label htmlFor="price">Price</label>
      <input
        type='number'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder='Price'
        name='price'
        required
      />
      <label htmlFor="guest">Guest(s)</label>
      <input
        type='number'
        onChange={(e) => setGuest(e.target.value)}
        value={guest}
        placeholder='Guest'
        name='guest'
        required
      />
      <label htmlFor="bedroom">Bedroom(s)</label>
      <input
        type='number'
        onChange={(e) => setBedroom(e.target.value)}
        value={bedroom}
        placeholder='Bedroom'
        name='bedroom'
        required
      />
      <label htmlFor="bathroom">Bathroom(s)</label>
      <input
        type='number'
        onChange={(e) => setBathroom(e.target.value)}
        value={bathroom}
        placeholder='Bathroom'
        name='bathroom'
        required
      />
      <label htmlFor="address">Address</label>
      <input
        type='text'
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        placeholder='Address'
        name='address'
        required
      />
      <label htmlFor="city">City</label>
      <input
        type='text'
        onChange={(e) => setCity(e.target.value)}
        value={city}
        placeholder='City'
        name='city'
        required
      />
      <label htmlFor="State">State</label>
      <input
        type='text'
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder='State'
        name='state'
        required
      />
      <label htmlFor="url">URL</label>
      <input
        type="url"
        name="url"
        onChange={(e) => setUrl(e.target.value)}
        placeholder='URL'
        value={url}
        required
      />
      <button onClick={handleSubmit}>
        Edit Listing
      </button>
    </form>
  )
};


export default EditListing;