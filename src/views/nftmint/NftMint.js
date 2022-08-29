import React, { useState } from 'react'
import { CCard, CRow, CCol } from '@coreui/react'
import { Upload } from 'antd'
import 'antd/dist/antd.min.css'
import { Spin } from 'antd'
import banner from '../../assets/images/welcome.png'

import '../../scss/custom.scss'
const NftMint = () => {
  const [file, setFile] = useState(null)
  const [fileUploadRefresher, setFileUploadRefresher] = useState(1)
  const onFileChange = ({ file: newFile }) => {
    setFile(newFile)
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  const clearUpload = () => {
    setFile(null)
    setFileUploadRefresher(0)
    setFileUploadRefresher(1)
    window.location.reload()
  }

  return (
    <CCard>
      <CRow className="align-items-start">
        <CCol className="infoContain-topbar">
          Coming Soon... <Spin className="" />
        </CCol>
      </CRow>
    </CCard>
    // <div className="ftStakingContainer m-2">
    //   <CRow className="align-items-start">
    //     <CCol className="infoContain-topbar">NFT MINT</CCol>
    //   </CRow>
    //   <CRow className="justify-content-around">
    //     <CCol lg={3} xs={23} sm={12} md={12}>
    //       <div
    //         className="nftmint-top-img"
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'column',
    //           width: '400px',
    //           height: '100%',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //         }}
    //       >
    //         <img
    //           src={banner}
    //           alt="banner"
    //           style={{
    //             width: '100%',
    //             borderRadius: '20px',
    //           }}
    //         />
    //       </div>
    //     </CCol>

    //     <CCol lg={4} xs={23} sm={12} md={12} className="ftinfoContain">
    //       {' '}
    //       <h1>UPLOAD IMG</h1>
    //       <div>
    //         {fileUploadRefresher && (
    //           <Upload
    //             accept="image/*"
    //             file={file}
    //             listType="picture-card"
    //             onChange={onFileChange}
    //             onPreview={onPreview}
    //             onRemove={() => {
    //               clearUpload()
    //               return true
    //             }}
    //             beforeUpload={() => {
    //               return false
    //             }}
    //           >
    //             {!file && '+ Upload'}
    //           </Upload>
    //         )}
    //       </div>
    //       <button className="btn-mint">+</button>
    //     </CCol>
    //   </CRow>
    // </div>
  )
}

export default NftMint
