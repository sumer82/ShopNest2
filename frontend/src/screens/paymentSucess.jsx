import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { URL, URL2 } from "../Redux/Url";

function PaymentSucess({ match }) {
  const orderId = match.params.id;
  const user = useSelector((state) => state.userLogin);
  const [pay, setPay] = useState(false);
  let history = useHistory();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.userInfo.token}`,
    },
  };
  const handlePay = async () => {
    console.log("btton clicked");
    axios
      .put(`${URL}/api/orders/${orderId}/pay`, config)
      .then((response) => {
        console.log(response);
        setPay(true);
        history.push(`/order/${orderId}`);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Header />
      <div className="pay_container">
        paymentSucess
        <button onClick={handlePay}> see order</button>
        <h2>Checkout Successful</h2>
        <p>Your order might take some time to process.</p>
        <p>Check your order status at your profile after about 10mins.</p>
        <p>
          Incase of any inqueries contact the support at{" "}
          <strong>support@onlineshop.com</strong>
        </p>
        {/* {pay && (
          <Link className="order_link" to={`/order/${orderId}`}>
            view order
          </Link>
        )} */}
      </div>
    </div>
  );
}

export default PaymentSucess;
