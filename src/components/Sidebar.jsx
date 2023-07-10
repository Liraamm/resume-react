import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <SideNav style={{ backgroundColor: "#DE5B68" }}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem
          eventKey="home"
          onClick={() => {
            navigate("/");
          }}
        >
          <NavIcon>
            <img
              src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg"
              style={{ width: "20px" }}
              alt=""
            />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem
          eventKey="about"
          onClick={() => {
            navigate("/about");
          }}
        >
          <NavIcon>
            <img
              src="https://prodivetravel.co.za/wp-content/uploads/2020/08/about-us-icon-png-white-1.png"
              style={{ width: "20px" }}
              alt=""
            />
          </NavIcon>
          <NavText>About me</NavText>
        </NavItem>

        <NavItem
          eventKey="contact"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <NavIcon>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3616/3616230.png"
              style={{ width: "20px" }}
              alt=""
            />
          </NavIcon>
          <NavText>Contact me</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Sidebar;
