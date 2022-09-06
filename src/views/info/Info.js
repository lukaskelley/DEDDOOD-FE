import React, { useState, useEffect } from 'react'
import { CCard, CCol, CRow } from '@coreui/react'

const Info = () => {
  useEffect(() => {
    getInfo()
  }, [])
  // usestate currentMyStakedCount 0
  const [currentMyStakedCount, setCurrentMyStakedCount] = useState(0)
  // usestate currentTotalStakedCount 0
  const [currentTotalStakedCount, setCurrentTotalStakedCount] = useState(0)
  // usestate currentTotalBurn 0
  // const [currentTotalBurn, setCurrentTotalBurn] = useState(0)
  // usestate currentSDOOD 0
  const [currentSDOOD, setCurrentSDOOD] = useState(0)
  const [currentDEDSDOOD, setCurrentDEDSDOOD] = useState(0)
  // usestate currentSdoodBalance 0
  const [currentSDoodBalance, setCurrentSDoodBalance] = useState(0)
  // usestate currentBurn 0
  const [currentBurn, setCurrentBurn] = useState(0)

  const getInfo = () => {
    let TotalstakedNFT = localStorage.getItem('TotalstakedNFT')
    let TotalstakedDEDNFT = localStorage.getItem('TotalstakedDEDNFT')
    let mystakedNFT = localStorage.getItem('MystakedNFT')
    let mystakedDEDNFT = localStorage.getItem('MystakedDEDNFT')
    let sdoodBalance = localStorage.getItem('sdoodBalance')
    let sdoodBurn = localStorage.getItem('sdoodBurn')
    let sdoodDEDBurn = localStorage.getItem('sdoodDEDBurn')
    let totalStakedAmount = localStorage.getItem('totalStakedAmount')
    let stakedNFT = Number(mystakedNFT) + Number(mystakedDEDNFT)
    let sdoodburnAll = Number(sdoodBurn) + Number(sdoodDEDBurn)
    setCurrentMyStakedCount(stakedNFT)
    setCurrentSDOOD(TotalstakedNFT)
    setCurrentDEDSDOOD(TotalstakedDEDNFT)
    setCurrentSDoodBalance(sdoodBalance)
    setCurrentBurn(sdoodburnAll)
    setCurrentTotalStakedCount(totalStakedAmount)
    console.log(sdoodBurn)
  }

  return (
    <div className="infoPage">
      <CCard className="infoContainer p-5">
        <CRow className="align-items-start">
          <CCol className="infoContain-topbar">Staking Pool</CCol>
        </CRow>
        <CRow className="align-items-start">
          <CCol lg={4} xs={23} sm={12} md={12} className="infoContain">
            {' '}
            <h1>My sDOOD Supply</h1>
            {currentSDoodBalance == null ? <p>0</p> : <p>{currentSDoodBalance}</p>}
          </CCol>
          <CCol lg={4} xs={23} sm={12} md={12} className="infoContain">
            {' '}
            <h1>My sDOOD Staked</h1>
            {currentTotalStakedCount == null ? <p>0</p> : <p>{currentTotalStakedCount}</p>}
          </CCol>
          <CCol lg={4} xs={23} sm={12} md={12} className="infoContain">
            {' '}
            <h1>My NFTs Staked</h1>
            {currentMyStakedCount == null ? <p>0</p> : <p>{currentMyStakedCount}</p>}
          </CCol>
        </CRow>
        <CRow className="align-items-start">
          <CCol lg={4} xs={12} sm={12} md={12} className="infoContain">
            <h1>Total sDOOD Burn</h1>
            {currentBurn == null ? <p>0</p> : <p>{currentBurn}</p>}
          </CCol>
          <CCol lg={4} xs={23} sm={12} md={12} className="infoContain">
            <h1>Total DoodCats Staked</h1>
            {currentSDOOD == null ? <p>0</p> : <p>{currentSDOOD}</p>}
          </CCol>
          <CCol lg={4} xs={23} sm={12} md={12} className="infoContain">
            <h1>Total DedCats Staked</h1>
            {currentSDOOD == null ? <p>0</p> : <p>{currentDEDSDOOD}</p>}
          </CCol>
        </CRow>
      </CCard>
    </div>
  )
}

export default Info
