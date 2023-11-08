import React, { useState } from "react";
import EditAccount from "./EditAccount";
import ListAccount from "./ListAccount";
function Account() {
  return (
    <React.Fragment>
      <EditAccount />
      <ListAccount/>
    </React.Fragment>
  );
}

export default Account;
