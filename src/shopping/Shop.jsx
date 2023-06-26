import React from "react";
import Cart from "./Cart";
import Home from "./Home";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";

export default function Shop() {
  // Quản lý hết tất cả state ở đây - Control Panel
  // Lưu dữ liệu từ JSON
  // Thêm key: quantity và value bằng 1 vào db
  // TODO: Xử lý vấn đề khi set value={shopItem.quantity} thì không thay đổi được giá trị trong ô input
  // Thêm key isSelected để quản lý các đối tượng người dùng lựa chọn, bên cart chỉ hiện các đối tượng có isSelected = true
  const db = [
    {
      name: "BST 50 - Áo thun nam nữ form rộng vải dày mịn logo cá tính cách điệu",
      price: 100,
      quantity: 1,
      total: 100,
      description:
        "BST 50 - Áo thun nam nữ form rộng vải dày mịn logo cá tính cách điệu",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp1.jfif5c29ba45-be68-4381-8ae9-42ddfc1b4135?alt=media&token=fc203279-226a-4b55-aee9-d42ccaba382a",
      id: 1,
    },
    {
      name: "Áo thun tay lỡ SADBOI SADTAGRAM unisex nam nữ form rộng vải dày mịn",
      price: 150,
      quantity: 1,
      total: 150,
      description:
        "Áo thun tay lỡ SADBOI  SADTAGRAM unisex nam nữ form rộng vải dày mịn",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp5.jfif72209208-1024-41fd-a631-4d2e3a161d13?alt=media&token=0ec0e2e1-7b72-405e-96ef-ff3e2da0fa0f",
      id: 2,
    },
    {
      name: "Áo thun phông nam nâu xám local brand BEEYANBUY T-shirt chất form rộng unisex 100% cotton",
      price: 200,
      quantity: 1,
      total: 200,
      description:
        "Áo thun phông nam nâu xám local brand BEEYANBUY T-shirt chất form rộng unisex 100% cotton\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp2.jfife8a16bc6-4b7b-4274-a8ba-a436602c8f4c?alt=media&token=170c1a60-d08e-4a90-918c-ca8ffda155d5",
      id: 3,
    },
    {
      name: "Đồ bộ quần áo thun chất liệu tổ ong cao cấp form rộng thoáng mát, thấm hút mồ hôi tốt EDT10",
      price: 400,
      quantity: 1,
      total: 400,
      description:
        "Đồ bộ quần áo thun chất liệu tổ ong cao cấp form rộng thoáng mát, thấm hút mồ hôi tốt EDT10\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp3.jfifa57042ca-f8fa-4beb-8d4d-35680bd06356?alt=media&token=6d375504-e950-4f73-aa50-7fabbeb7b098",
      id: 4,
    },
    {
      name: "Áo ba lỗ nam Guzado tanktop thể thao khỏe khắn,rộng rãi thoáng mát,vận động thoải mái GTT01",
      price: 125,
      quantity: 1,
      total: 125,
      description:
        "Áo ba lỗ nam Guzado tanktop thể thao khỏe khắn,rộng rãi thoáng mát,vận động thoải mái GTT01\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp4.jfifd9a07b88-12c8-4b63-ab27-c42630049259?alt=media&token=ec24c6c2-e1bb-4eeb-ba63-031d1c20fa22",
      id: 5,
    },
    {
      name: "Quần đùi nam Guzado GMSR05 vải thun lạnh cao cấp,phong cách trẻ trung khỏe khoắn,co giãn thể thao hay mặc nhà",
      price: 250,
      quantity: 1,
      total: 250,
      description:
        "Quần đùi nam Guzado GMSR05 vải thun lạnh cao cấp,phong cách trẻ trung khỏe khoắn,co giãn thể thao hay mặc nhà\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp6.jfifa45d18ae-0a2c-4cac-85d2-2cd5e058ccd5?alt=media&token=6ae7efbc-5134-4336-9a78-4b884966fdca",
      id: 6,
    },
    {
      name: "Bộ quần áo thể thao nam đẹp cao cấp LADOS - 7001, vải thun lạnh, mặc nhà, chạy bộ, tập gym",
      price: 500,
      quantity: 1,
      total: 500,
      description:
        "Bộ quần áo thể thao nam đẹp cao cấp LADOS - 7001, vải thun lạnh, mặc nhà, chạy bộ, tập gym\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp7.jfifaa927bcb-fa59-4533-8d83-1adce771c77d?alt=media&token=a7a58d52-d3c3-44e4-83f8-920baaa1ef14",
      id: 7,
    },
    {
      name: "Bộ quần áo thể thao nam ROUGH kẻ sọc viền vai chất thun CVC thoáng khí",
      price: 450,
      quantity: 1,
      total: 450,
      description:
        "Bộ quần áo thể thao nam ROUGH kẻ sọc viền vai chất thun CVC thoáng khí\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp8.jfif22d4493f-459d-46b3-8345-e0c95eadcd59?alt=media&token=2b30583e-eeaf-45c2-85ee-71890a9b1d39",
      id: 8,
    },
    {
      name: "Áo sơ mi nam nữ dài tay Unisex Basic màu trắng và đen sơ mi lụa mịn mát form rộng suông ELNIDO-ED03",
      price: 290,
      quantity: 1,
      total: 290,
      description:
        "Áo sơ mi nam nữ dài tay Unisex Basic màu trắng và đen sơ mi lụa mịn mát form rộng suông ELNIDO-ED03\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp9.png7d52c352-b08f-44c0-81bb-272052c47633?alt=media&token=4bff2837-34b6-491e-8e70-e5395848a0fd",
      id: 9,
    },
    {
      name: "Áo sơ mi trắng trơn unisex dài tay chất lụa mềm nhẹ form rộng phong cách Hàn Quốc SM06 M.RO đi học đi làm",
      price: 350,
      quantity: 1,
      total: 350,
      description:
        "Áo sơ mi trắng trơn unisex dài tay chất lụa mềm nhẹ form rộng phong cách Hàn Quốc SM06 M.RO đi học đi làm\n",
      status: true,
      isSelected: false,
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp10.jfif84d71d7a-d55f-43a7-af0c-24b321e85c63?alt=media&token=238f7824-ab0f-409b-ba18-252ce3495331",
      id: 10,
    },
  ];
  const [shopItems, setShopItems] = useState(db);

  // TODO: Xử lý dữ liệu nhận được từ tab Home (khách hàng lựa chọn sản phẩm)
  // Tạo hàm xử lý dữ liệu nhận từ Component Home
  const getNewQuantities = (userSelect, key) => {
    // console.log(userSelect, key);
    const newDB = shopItems.map((shopItem, index) =>
      index === key
        ? {
            ...userSelect[key],
            quantity: shopItem.quantity + userSelect[key].quantity, total: (shopItem.quantity + userSelect[key].quantity) * shopItem.price , isSelected: true
          }
        : shopItem
      // Trả về từng đối tượng trong userSelect, tuy nhiên nếu
    );
setShopItems(newDB)
  
  };
  // TODO: Xử lý dữ liệu nhận được từ tab Cart (khách hàng chỉnh sửa đơn hàng)
  // TODO: Làm CRUD cho Cart
  // TODO: Xử lý vấn đề đồng bộ dữ liệu (nếu có) giữa tab Home và tab Cart, trong trường hợp này (có vẻ) chỉ là nếu tăng số lượng ở Home thì sẽ được cộng dồn ở Cart

  // TODO: Xóa sản phẩm ra khỏi giỏ hàng và cập nhật lại db
  const updateDbAfterDelete = (index) => {
    const deletedItem = {...shopItems[index], quantity: 1, isSelected: false}
    const newDB = [...shopItems]
    newDB[index] = deletedItem
    setShopItems(newDB)

  }
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Home shopItems={shopItems} getNewQuantities={getNewQuantities} />
        </Tab>
        <Tab eventKey="cart" title="Cart">
          <Cart shopItems={shopItems} updateDbAfterDelete={updateDbAfterDelete}/>
        </Tab>
      </Tabs>
    </div>
  );
}
