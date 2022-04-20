import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import * as moment from 'moment';
import { editBooking } from "../../store/booking";

import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import './EditBookingForm.css';

const EditBookingForm = ({ setShowModal, booking }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  // TODO can't use useParams() here
  const { id } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  // TODO this is the problem listing_id is always 4
  const listing = useSelector(state => state.listings[id]);
  console.log('LSTING', listing);

  const [startDate, setStartDate] = useState(moment(booking?.start_date));
  const [endDate, setEndDate] = useState(moment(booking?.end_date));
  const [guest, setGuest] = useState(booking?.guest);
  const [errors, setErrors] = useState([]);
  const [focusedInput, setFocusedInput] = useState(null);

  const dateRange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const datesOnFocusHandler = focusedInput => {
    setFocusedInput(focusedInput)
  }

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedBooking = {
      id: booking.id,
      user_id: sessionUser.id,
      listing_id: listing.id,
      start_date: startDate.format('YYYY-MM-DD'),
      end_date: endDate.format('YYYY-MM-DD'),
      guest: parseInt(guest)
    }
    // console.log('EDITED', editedBooking)
    const data = await dispatch(editBooking(editedBooking))
    if (data.errors) {
      setErrors(data.errors)
    } else if (data) {
      history.push(`/mybookings/${sessionUser?.id}`)
      setShowModal(false)
    }
  }


  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="errors-list">
        <ul className='single-error'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <h3>Booking Details</h3>
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="startDate" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="endDate" // PropTypes.string.isRequired,
        onDatesChange={dateRange} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={datesOnFocusHandler} // PropTypes.func.isRequired,
      />
      <label className='guest-form'>
        Guests
        <select className="guest-input" defaultValue={guest} onChange={(e) => setGuest(e.target.value)}>
          {[...Array(listing.guest).keys()].map((num, i) => (
            <option className="guest-option" key={i}>{num + 1}</option>
          ))}
        </select>
      </label>
      <div className="booking-button-div">
        <button className='booking-button' type='submit'>
          Submit Booking
        </button>
      </div>
    </form>
  );
}

export default EditBookingForm;