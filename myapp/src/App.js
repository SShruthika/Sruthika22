// import './App.css';
// import Signup from './Component/signup/Signup';
// // import Reg from './Component/Reg.js';


// function App() {
//   return (
//    <div>
//     {/* <Reg/> */}
//     <Signup/>
//    </div>
//   );
// }

// export default App;




import React from 'react'
//  import ReactDOM from "react-dom/client";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Atslogin from './Component/Atslogin.js';
import Atsregister from './Component/Atsregister.js';

// import Crud from './component/Crud.js'
const App = () => {
  return (
    <div>
      {/* <Atsregister/> */}
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Atsregister/>}></Route>
         <Route path="/Atslogin" element={<Atslogin/>}/>
         {/* <Route path="/Welcome/:nameS" element={<Welcome/>}/> */}
       </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App


