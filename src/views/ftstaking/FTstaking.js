import React, { useEffect, useState } from 'react'
import { providers } from 'ethers'
import { CRow, CCol } from '@coreui/react'
import { notification } from 'antd'
import 'antd/dist/antd.min.css'
import { Modal } from 'antd'
import '../../scss/custom.scss'

import config from '../../config/config'
import ftStakingABI from '../../assets/abi/ftStakingABI.json'
import sDooDABI from '../../assets/abi/sdood.json'

const ethers = require('ethers')

const FTstaking = () => {
  let c_stakeDay = 0
  let c_stakeAmount = 0
  let c_deadLine = 0
  const [ftStakingContract, setftStakingContract] = useState(null)
  const [stakeState, setStakeState] = useState(false)
  const [sdoodContract, setSDOODContract] = useState(null)
  // usestate isConnected false
  const [isConnected, setIsConnected] = useState(false)
  // usestate defaultAccount null
  const [defaultAccount, setDefaultAccount] = useState(null)
  // const [nftContract, setNftContract] = useState(null)
  const [stakeDay, setStakeDay] = useState(0)
  const [stakeAmount, setStakeAmount] = useState(0)
  const [earnPercent, setEarnPercent] = useState(0)
  useEffect(() => {
    const callStaking = async () => {
      await updateEthers()
      claimState()
    }
    callStaking()
    console.log('Hit Corunus')
  }, [defaultAccount])
  const connect = async () => {
    if (window.ethereum !== undefined) {
      let chain = config.chainId.toString()
      if (window.ethereum.networkVersion === chain) {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then(async (account) => {
          setIsConnected(true)
          localStorage.setItem('defaultaccount', account)
          setDefaultAccount(account[0])
          Modal.success({
            content: 'Connected Wallet Successful',
          })
        })
      }
    } else {
      setIsConnected(false)
    }
  }
  const unconnected = () => {
    setIsConnected(false)
    window.location.reload()
    localStorage.clear()
  }
  const updateEthers = async () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum)
    let tempSigner = tempProvider.getSigner()

    let tempProvider2 = new ethers.providers.Web3Provider(window.ethereum)
    let tempSigner2 = tempProvider2.getSigner()

    let ftStakingContract = new ethers.Contract(config.FTStakingAddress, ftStakingABI, tempSigner)
    setftStakingContract(ftStakingContract)

    let sDOODContract = new ethers.Contract(config.sDoodAddress, sDooDABI, tempSigner2)
    setSDOODContract(sDOODContract)
  }

  //useState the amount of SDooD Staking
  const [Amount_30, setAmount_30] = useState(0)
  const [Amount_60, setAmount_60] = useState(0)
  const [Amount_90, setAmount_90] = useState(0)
  const [Amount_120, setAmount_120] = useState(0)

  const InputValue_30 = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setAmount_30(value)
  }

  const InputValue_60 = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setAmount_60(value)
  }

  const InputValue_90 = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setAmount_90(value)
  }

  const InputValue_120 = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setAmount_120(value)
  }
  const claimState = async () => {
    console.log(ftStakingContract)
    let defaultAccount = localStorage.getItem('defaultaccount')
    await ftStakingContract.stakingInfos(defaultAccount.toString()).then((stakeInfo) => {
      localStorage.setItem('totalStakedAmount', stakeInfo.amount / 10 ** 18)
      c_stakeDay = Number(stakeInfo.stakingtype.toString()) / 3600 / 24
      c_deadLine = Number(stakeInfo.lockdeadline.toString())
      setStakeDay(c_stakeDay)
      c_stakeAmount = Number(stakeInfo.amount.toString()) / 10 ** 18
      setStakeAmount(c_stakeAmount)
      setStakeState(stakeInfo.isStaked)
      if (c_stakeDay === 30) {
        setEarnPercent(5)
      } else if (c_stakeDay === 60) {
        setEarnPercent(10)
      } else if (c_stakeDay === 90) {
        setEarnPercent(15)
      } else if (c_stakeDay === 120) {
        setEarnPercent(25)
      }
    })
    var currentTimeInSeconds = Math.floor(Date.now() / 1000)
    setStakeDay(Math.floor((c_deadLine - currentTimeInSeconds) / 3600 / 24))
  }
  const staking = async (amount, day) => {
    if (defaultAccount == null) {
      notification['error']({
        message: 'ERROR',
        description: 'Please Connect Wallet',
      })
    }
    await ftStakingContract.stakingInfos(defaultAccount.toString()).then((stakeInfo) => {
      setStakeState(stakeInfo.isStaked)
    })
    if (stakeState) {
      notification['error']({
        message: 'ERROR',
        description: 'Cannot Staking. You have already staked!',
      })
    } else {
      const amountValue = ethers.BigNumber.from(amount).mul(ethers.BigNumber.from(10).pow(18))
      if (amountValue <= 0) {
        notification['error']({
          message: 'ERROR',
          description: 'Please enter at least 1 SDOOD',
        })
      } else {
        await sdoodContract.approve(config.FTStakingAddress, amountValue)
        await ftStakingContract.staking(
          amountValue,
          ethers.BigNumber.from((day * 24 * 3600).toString()),
          {
            gasLimit: 3000000,
          },
        )
        Modal.success({
          content: 'Staked Successful',
          onOk() {
            window.location.reload()
          },
        })
      }
    }
  }

  const claim = async () => {
    await ftStakingContract.claimStaking({ gasLimit: 3000000 })
    Modal.success({
      content: 'Claim Successful',
      onOk() {
        window.location.reload()
      },
    })
  }

  return (
    <div className="ftStakingContainer">
      <CRow className="p-1 btnConnectConbtainer">
        <CCol lg={10} className="btnConnectConbtain" />
        <CCol lg={1} className="btnConnectConbtain">
          {!isConnected ? (
            <>
              <button className="btn-connect" onClick={connect}>
                Connect
              </button>
            </>
          ) : (
            <>
              <button className="btn-connect">
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '800',
                    color: 'white',
                  }}
                  onClick={unconnected}
                >
                  Disconnect
                </span>
              </button>
            </>
          )}
        </CCol>
        <CCol lg={1} className="btnConnectConbtain" />
      </CRow>
      <CRow className="align-items-start">
        <CCol className="infoContain-topbar">sDOOD STAKING</CCol>
      </CRow>
      {!stakeState ? (
        <>
          <CRow className="justify-content-around">
            <CCol lg={4} xs={23} sm={12} md={12} className="ftinfoContain">
              {' '}
              <h1>STAKING OPTION - A</h1>
              <p> 30 Days Lock period</p>
              <p> 0% Fees apply</p>
              <p> 5% Coin on release</p>
              <p> Early release fee 3.5%</p>
              <input type="number" className="ftstakingInput" onChange={InputValue_30}></input>
              <button className="ftstakeBtn" onClick={() => staking(Amount_30, 30)}>
                STAKING
              </button>
            </CCol>

            <CCol lg={4} xs={23} sm={12} md={12} className="ftinfoContain">
              {' '}
              <h1>STAKING OPTION - B</h1>
              <p> 60 Days Lock period</p>
              <p> 0% Fees apply</p>
              <p> 10% Coin on release</p>
              <p> Early release fee 3.5%</p>
              <input type="number" className="ftstakingInput" onChange={InputValue_60}></input>
              <button className="ftstakeBtn" onClick={() => staking(Amount_60, 60)}>
                STAKING
              </button>
            </CCol>
          </CRow>
          <CRow className="justify-content-around">
            <CCol lg={4} xs={12} sm={12} md={12} className="ftinfoContain">
              <h1>STAKING OPTION - C</h1>
              <p> 90 Days Lock period</p>
              <p> 0% Fees apply</p>
              <p> 15% Coin on release</p>
              <p> Early release fee 5.5%</p>
              <input type="number" className="ftstakingInput" onChange={InputValue_90}></input>
              <button className="ftstakeBtn" onClick={() => staking(Amount_90, 90)}>
                STAKING
              </button>
            </CCol>
            <CCol lg={4} xs={23} sm={12} md={12} className="ftinfoContain">
              <h1>STAKING OPTION - D</h1>
              <p> 120 Days Lock period</p>
              <p> 0% Fees apply</p>
              <p> 25% Coin on release</p>
              <p> Early release fee 5.5%</p>
              <input type="number" className="ftstakingInput" onChange={InputValue_120}></input>
              <button className="ftstakeBtn" onClick={() => staking(Amount_120, 120)}>
                STAKING
              </button>
            </CCol>
          </CRow>
        </>
      ) : (
        <>
          {' '}
          <CRow className="justify-content-around">
            <CCol lg={4} xs={23} sm={12} md={12} className="ftinfoContain">
              {' '}
              <h1>STAKE INFO</h1>
              <p> Total sDOOD Staked: {stakeAmount} sDOOD</p>
              <p> Day Left to Mature: {stakeDay} days</p>
              <p> Earning: {earnPercent}% </p>
              <button className="ftstakeBtn" onClick={() => claim()}>
                CLAIM
              </button>
            </CCol>
          </CRow>
        </>
      )}
    </div>
  )
}

export default FTstaking
