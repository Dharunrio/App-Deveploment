import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";
import Dialpad from "../Components/Dialpad";
import LogoutModal from "../Components/LogoutModal";

function HomeLayout() {

  return (
    <>
      <div className="container-fluid bg-dark bg-gradient">
        <div className="row flex-nowrap" style={{height : "100vh"}}>
          <div className="col-auto col-md-2 col-xl-2 col-sm-1 px-sm-2 px-0  bg-black bg-gradient  ">
          {/* <div className="bg-black" style={{ height : "8%", position : "absolute", top : "0", backgroundColor : "white", right : "0", width : "85%" }}>
              Hello
          </div> */}
          <SideBar />
          
          </div>
          <div className="col col-md-6 col-sm-11 col-xl-7 py-3 px-4 pt-4 bg-dark bg-gradient overflow-y-auto" style={{height : "100%"}}>
            {/* <div className="container position-relative bg-dark" style={{ height:"100%"}}> */}
          <Outlet />
            {/* </div> */}
          </div>
          <div className="col-auto col-md-4 col-xl-3 bg-dark bg-gradient d-table">
            {/* <div className=" bg-dark" style={{}}> */}
          <Dialpad />
            {/* </div> */}
          </div>
          </div>
        </div>
        <LogoutModal/>
    </>
  );
}

export default HomeLayout;
