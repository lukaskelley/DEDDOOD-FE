import React from "react";
import CIcon from "@coreui/icons-react";
import { cilInfo, cilPuzzle } from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";
import m from "./assets/images/m.png";
import n from "./assets/images/n.png";
import s from "./assets/images/s.png";
const _nav = [
  {
    component: CNavTitle,
    name: "STAKING",
  },
  {
    component: CNavItem,
    name: "NFT Staking",
    to: "/nftstaking",
    icon: <img src={n} className="sideItem" alt="sideItem" />,
  },
  {
    component: CNavItem,
    name: "sDed Staking",
    to: "/ftstaking",
    icon: <img src={s} className="sideItem" alt="sideItem" />,
  },
  {
    component: CNavTitle,
    name: "NFT MINT",
  },
  {
    component: CNavItem,
    name: "NFT Mint",
    to: "/nftmint",
    icon: <img src={m} className="sideItem" alt="sideItem" />,
  },
  {
    component: CNavTitle,
    name: "INFO",
  },
  {
    component: CNavItem,
    name: "Information",
    to: "/info",
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "MARKETPLACE",
  },
  {
    component: CNavItem,
    name: "NFT MarketPlace",
    to: "/nftmarket",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" disabled />,
  },
];

export default _nav;
