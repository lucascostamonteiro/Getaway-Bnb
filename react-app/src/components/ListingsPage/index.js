import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getListings } from "../../store/listing"
import './ListingsPage.css'


function Listings() {
  const dispatch = useDispatch();
  const allListingsObj = useSelector(state => state.listings)
  const allListings = Object.values(allListingsObj)

  console.log('ALL', allListings)

  // TODO BROKEN IMAGE
  // const handleImgError = (e) => {
  //   e.target.src
  // }

  useEffect(() => {
    dispatch(getListings())
  }, [])

  return (
    <>
      {allListings?.map(listing => (
        <div className="main-listings-div">
          {/* <div className="main-listings-image-div"> */}
          <Link className="link-image" key={listing?.id} to={`/listings/${listing?.id}`}>
            <img className="image-listings" crossOrigin="anonymous" key={listing?.id} src={listing?.url} />
          </Link>
          {/* </div> */}
          <div className="main-listings-info">
            <Link className="links-info" key={listing?.id} to={`/listings/${listing?.id}`}>
              <div className="main-listings-title">{listing?.title}</div>
              <div className="main-listings-location">{listing?.city}, {listing?.state}</div>
              <div className="listing-details">
                <div className="main-listings-guest"> {listing?.guest === 1 ? `${listing?.guest} Guest` : `${listing?.guest} Guests`}</div>
                <div className="main-listings-bedroom">{listing?.bedroom === 1 ? `${listing?.bedroom} Bedroom` : `${listing?.bedroom} Bedrooms`}</div>
                <div className="main-listings-bathroom">{listing?.bathroom === 1 ? `${listing?.bathroom} Bathroom` : `${listing?.bathroom} Bathrooms`}</div>
              </div>
              <div className="listing-price">${listing?.price} / night</div>
            </Link>
          </div>
        </div>
      ))
      }
    </>
  )
}


export default Listings;
