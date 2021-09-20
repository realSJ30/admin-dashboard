import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";



function App() {


  const [isOpen, setIsOpen] = useState(true);

  //functions and methods
  function openMenu() {
    setIsOpen(!isOpen);
  }


  // return (
  //   <>
  //     {/* <Navbar /> */}

  //     <div className="flex flex-row">
  //       <Sidebar open={isOpen} />
  //       <div className="flex flex-col flex-1">
  //         <Navbar openMenu={openMenu} open={isOpen}/>
  //         {/* contents */}
  //         {/* <Dashboard/> */}
  //       </div>
  //     </div>

  //   </>
  // );
  return (
    <>
    <Login/>
    </>
  )
}

export default App;
