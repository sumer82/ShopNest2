import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [firstname, setFirstname] = useState(shippingAddress.firstname);
  const [lastname, setLastname] = useState(shippingAddress.lastname);
  const [landmark, setLandmark] = useState(shippingAddress.lastname);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        firstname,
        lastname,
        landmark,
        address,
        city,
        postalCode,
        country,
      })
    );
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form className="address" onSubmit={submitHandler}>
          <div className="addHeader">
            <h4>SHIPPING ADDRESS</h4>
          </div>

          <div className="address_form">
            <div className="name">
              <div className="firstName">
                <h4>first Name </h4>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  value={firstname}
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="firstName">
                <h4>last Name </h4>
                <input
                  type="text"
                  placeholder="enter your last name"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div className="name">
              <div className="address1">
                <h4>address*</h4>
                <input
                  type="text"
                  placeholder="enter your address"
                  name="addressdata"
                  id="addressdata"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="address2">
                <h4>Landmark*</h4>
                <input
                  type="text"
                  placeholder="enter Landmark"
                  name="landmark"
                  id="landmark"
                  value={landmark}
                  required
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="firstName">
                <h4>city*</h4>
                <input
                  type="text"
                  placeholder="city .."
                  name="city"
                  id="city"
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="firstName">
                <h4>country*</h4>
                <input
                  type="text"
                  placeholder="country"
                  name="country"
                  id="country"
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="firstName">
                <h4>Postal Code*</h4>
                <input
                  type="text"
                  placeholder="Zip Code"
                  name="zipcode"
                  id="zipcode"
                  value={postalCode}
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
            <div className="save_cancel">
              <button type="submit" className="button_save">
                Save And Deliver Here
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
