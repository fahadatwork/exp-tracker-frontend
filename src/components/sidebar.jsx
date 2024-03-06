import React from 'react'
import logo from "../assets/growth.png";
import { RiDashboard3Fill } from "react-icons/ri";
import { BiSolidCog } from "react-icons/bi";
import { BiSupport } from "react-icons/bi"
import { useLocation } from 'react-router-dom';
import MenuItem from "./menu-item";

const SideBar = () => {
    const location = useLocation();
  return (
    <>

<div className=" h-screen w-[400px] bg-white shadow-xs flex flex-col">
        <img
          className="mt-[50px] ml-[15px]"
          src={logo}
          alt="logo"
          width={200}
          height={200}
        />

        <div className="flex flex-col justify-between">
          <div className="mt-[50px] ml-[10px]">
            
         
            <MenuItem
              icon={<RiDashboard3Fill className="w-[25px] h-[25px]" />}
              title={"Dashboard"}
              active={location.pathname === "/" ? true : false}
              link={'/'}
            />
            <MenuItem
              icon={<BiSolidCog className="w-[25px] h-[25px]" />}
              title={"Settings"}
              active={location.pathname === "/settings" ? true : false}
              link={'/settings'}
            />
             <MenuItem
              icon={<BiSupport className="w-[25px] h-[25px]" />}
              title={"Help Center"}
              active={location.pathname === "/support" ? true : false}
              link={'/support'}
            />
           
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default SideBar