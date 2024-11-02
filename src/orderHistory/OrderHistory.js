import { Link } from "react-router-dom"
import dayjs from "dayjs"

import "./history.css"
import { useOrder } from "../context/orderContext"

const OrderHistory = () => {


  const { orderData, loading } = useOrder()

  if (loading) {
    return <p>Loading....</p>
  }

  return (
    <div className="main-container">
      {
        orderData.map((order) => {
          if (order.status === true) {
            return (
              <div className="fake-container">
                <div id={order.id} className="recipe-container">
                  <p>Order #{order.id}</p>
                  <h4>{order.request}</h4>
                  <p>{dayjs(order.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
                </div>
              </div>

            )


          }

        })
      }
    </div>
  )
}


export default OrderHistory