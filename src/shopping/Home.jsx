import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./Home.css"

export default function Home({ shopItems, getNewQuantities }) {
  // Tạo một state để lưu các thay đổi từ phía người dùng
  const [userSelect, setUserSelect] = useState(shopItems);

  // Tạo hàm cập nhật các thay đổi về số lượng vào userSelect
  const handleQuantityChange = (event) => {
    // Lấy giá trị ra
    const newQuantity = event.target.value;
    // Sửa đổi vào userSelect
  };
  // Gửi dữ liệu lên Shop để cập nhật vào dữ liệu tổng
  const handleAddToCart = (key) => {
    // Lưu giá trị input này vào để sau đó cộng vào cơ sở dữ liệu tổng
    getNewQuantities(userSelect, key);
    // console.log(userSelect);
  };
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>List products</h2>
      <ul className="list" style={{listStyleType: "none"}}>
        {/* Tìm card phù hợp để hiển thị sản phẩm */}
        {/* Render tất cả các sản phẩm từ cơ sở dữ liệu */}
        {/* TODO: Giá trị mặc định của trường Input là 1 */}

        {shopItems.map((shopItem, index) => (
          <li className="list-item" key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={shopItem.image_url} />
              <Card.Body>
                <Card.Title>{shopItem.name}</Card.Title>
                <Card.Text>{shopItem.description}</Card.Text>
                <h3>{shopItem.price} $</h3>
              </Card.Body>
              <div>
                <input
                  name="quantity"
                  onChange={handleQuantityChange}
                  value={shopItem.quantity}
                  type="number"
                />
                {/* isSelected sẽ thay đổi giá trị từ false sang true nếu nút Add to cart được nhấn */}
                <Button variant="danger" onClick={() => handleAddToCart(index)}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
