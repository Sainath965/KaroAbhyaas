// Write your JS code here
import React from 'react';

const Orders = ({ orders }) => {
  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders.map(order => (
        <div key={order.id} className="order">
          <h3>ORDER #{order.orderNumber}</h3>
          <p>PRODUCT: {order.product}</p>
          <p>DATE: {order.date}</p>
          <address>{order.address}</address>
          <div className="actions">
            <button>VIEW DETAILS</button>
            <button>TRACK ORDER</button>
            <button>DOWNLOAD INVOICE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
