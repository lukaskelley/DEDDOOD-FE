import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilPuzzle } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import n from './assets/images/n.png'
import doodcatIcon from './assets/images/doodcatIcon.png'
import dedcatIcon from './assets/images/dedcatIcon.png'
import s from './assets/images/s.png'
const _nav = [
  {
    component: CNavTitle,
    name: 'STAKING',
  },
  {
    component: CNavGroup,
    name: 'NFT Staking',
    to: '/nftstaking',
    icon: <img src={n} className="sideItem" alt="sideItem" />,
    items: [
      {
        component: CNavItem,
        name: 'DoodCats Staking',
        icon: <img src={doodcatIcon} className="sideItem" alt="sideItem" />,
        to: '/doodnftstaking',
      },
      {
        component: CNavItem,
        name: 'DedDoods Staking',
        to: '/dednftstaking',
        icon: <img src={dedcatIcon} className="sideItem" alt="sideItem" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'sDood Staking',
    to: '/ftstaking',
    icon: <img src={s} className="sideItem" alt="sideItem" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'NFT MINT',
  // },
  // {
  //   component: CNavItem,
  //   name: 'NFT Mint',
  //   to: '/nftmint',
  //   icon: <img src={m} className="sideItem" alt="sideItem" />,
  // },
  {
    component: CNavTitle,
    name: 'INFO',
  },
  {
    component: CNavItem,
    name: 'Information',
    to: '/info',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'MARKETPLACE',
  },
  {
    component: CNavItem,
    name: 'NFT MarketPlace',
    to: '/nftmarket',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" disabled />,
  },
]

export default _nav
