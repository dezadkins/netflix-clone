import React, { useState, useEffect } from "react";
import db from "../firebase";
import "./PlansScreen.css";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
        });
      });
  }, []);

  return (
    <div className="plansScreen">
      <h2>PlansScreen</h2>
    </div>
  );
};

export default PlansScreen;
