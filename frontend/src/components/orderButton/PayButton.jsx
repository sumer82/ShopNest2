import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../../Redux/Actions/OrderActions";
import { ORDER_PAY_RESET } from "../../Redux/Constants/OrderConstants";
import { URL } from "../../Redux/Url";
// import { url } from "../../features/shop/api";

const PayButton = ({ cartItems, orderId }) => {
  const user = useSelector((state) => state.userLogin);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const dispatch = useDispatch();
  const paymentResult = "true";

  const payStatus = async (getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${URL}/api/orders/${orderId}/pay`,
      config
    );
  };

  const handleCheckout = async () => {
    axios
      .post(`${URL}/api/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
        orderId,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
