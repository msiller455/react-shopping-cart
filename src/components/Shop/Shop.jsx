// src/components/Shop/Shop.jsx
import { useState } from "react";
import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList";
import "./Shop.css";

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item]);
    setShopInventory(shopInventory.filter((el) => el._id !== item._id));
  };

  const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item]);
    setUserInventory(userInventory.filter((el) => el._id !== item._id));
  };

  // const inventoryListData = inventoryData.map((item) => (
  //   <li key={item._id}>
  //     <p>{item.name}</p>
  //     <p>Price: {item.price}</p>
  //   </li>
  // ));

  return (
    <main>
      <h1>{name}</h1>
      <section className="shop-section">
        <InventoryList title={"Shop Inventory"} inventory={shopInventory} handleAddItem={handleAddItem} />
        <InventoryList title={"User Inventory"} inventory={userInventory} handleRemoveItem={handleRemoveItem} />
      </section>
    </main>
  );
};

export default Shop;
