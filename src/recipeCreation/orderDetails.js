// OrderDetails.js
import { useOrder } from '../context/orderContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import handleOrderStatus from '../fetchData/fetchdata';
import "./orderDetails.css";

const OrderDetails = () => {
  const { id } = useParams();
  const { orderData, loading } = useOrder();
  const navigate = useNavigate()

  if (loading) return <p>Loading...</p>;

  const order = orderData.find((order) => order.id === Number(id));

  if (!order) return <p>Order not found</p>;

  const handleOrderComplete = (id) => {
    handleOrderStatus(id)
    navigate('/order')
  }

  return (
    <div className="order-container">
      <h1>Order #{order.id}</h1>
      <p>{dayjs(order.createdAt).format('HH:mm:ss')}</p>
      <h4>Ingredients:</h4>
      <div className='ingredient'>
        {order.ingredients.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
      </div>
      <h4>Instructions:</h4>
      <div className='instruction'>
        {order.instructions.map((instruction, index) => {
          const formattedInstruction = instruction.split(/(\*\*[^*]+\*\*)/).map((part, idx) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={idx}>{part.slice(2, -2)}</strong>
            ) : (
              part
            )
          );

          return (
            <p key={index}>{formattedInstruction}</p>
          );
        })}
      </div>
      <div className="bottom-container">

        <button onClick={() => { handleOrderComplete(order.id) }}>Complete Order</button>

      </div>
    </div>
  );
};

export default OrderDetails;
