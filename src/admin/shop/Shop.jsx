import React, { useState } from "react";
import EditShop from "./EditShop";
import ListShop from "./ListShop";
function Shop() {
  return (
    <React.Fragment>
      <EditShop />
      <ListShop />
    </React.Fragment>
  );
}

export default Shop;
