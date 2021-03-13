import React from "react";

import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName"
import Adress from "./Component/Profile/Address"
import "./App.css";
const App = () => (
  <div className="Centerious">
 <div >
   <ProfilPhoto/>
   <FullName/>
   <Adress/>
 </div>
 </div>
);
export default App;