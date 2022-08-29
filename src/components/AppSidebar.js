import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";
import { cilEthernet } from "@coreui/icons";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "../scss/style.scss";
import "../scss/custom.scss";
// sidebar nav config
import navigation from "../_nav";
import Logo from "../assets/images/newlogo.png";
import CloseLogo from "../assets/images/closelogo.png";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="d-md-flex bg-white text-body"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex bg-white logoBar" to="/">
        <img
          className="sidebar-brand-full text-body"
          src={Logo}
          alt="logo"
          style={{ width: "80%", height: "50px" }}
        />
        <img
          className="sidebar-brand-narrow"
          src={CloseLogo}
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <div className="linkContainer">
        <a
          href="https://twitter.com/SpaceCatsSGB"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://discord.com/invite/4XCPKcmM"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-discord" />
        </a>
      </div>
      <button
        className="d-none d-lg-flex sidebarBottom"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      >
        {" "}
        <CIcon icon={cilEthernet} size="lg" />
      </button>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
