import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import './Cart.css'

import Table from 'react-bootstrap/Table';

export default function Cart({shopItems, updateDbAfterDelete}) {
    const [cartItems, setCartItems] = useState(shopItems);
    console.log(cartItems)
    const handleCalTotalAmount = (index) => {
        const updatedPriceItem = {...cartItems[index], price: cartItems[index].price * cartItems[index].quantity}
        setCartItems(cartItems, index, updatedPriceItem)
        console.log(cartItems);
    }
const handleDeleteFromCart = (index) => {
    updateDbAfterDelete(index)
}
  return (
    <div>
      <hr />
      <h2 style={{textAlign: "center"}}>Cart</h2>
      {/* Đổ dữ liệu ra kiểu bảng - Table */}
      {/* Tạo bảng */}
      <Table className="table-cart" responsive="sm" bordered>
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>IMAGE</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>TotalAmount</th>
          <th colSpan={2}>Action</th>
        </tr>
        {/* Đổ tạm dữ liệu từ shopItems ra bàng trước khi để sang biến trung gian */}
        {/* Xác định cơ chế sử dụng biến trung gian để không state được cập nhật đúng */}
        {shopItems.map((shopItem, index) => (
          shopItem.isSelected === true && (<tr key={index}>
            <td>{index + 1}</td>
            <td>{shopItem.name}</td>
            <td>
              <img src={shopItem.image_url} alt={shopItem.description} width={100} height={100}/>
            </td>
            <td>
              <input value={shopItem.quantity} type="number" />
            </td>
            <td>{shopItem.price}</td>
            <td>{shopItem.total}</td>
            <td>
              <Button variant="warning" onClick={() => handleCalTotalAmount(index)}>Update</Button>
            </td>
            <td>
              <Button variant="danger" onClick={() => handleDeleteFromCart(index)}>Delete</Button>
            </td>
          </tr>)
        ))}
      </Table>
    </div>
  );
}
