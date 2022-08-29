import React from 'react'
import { CCard, CCol, CRow } from '@coreui/react'
import { Spin } from 'antd'
import '../../scss/custom.scss'

const Info = () => {
  return (
    <CCard>
      <CRow className="align-items-start">
        <CCol className="infoContain-topbar">
          Coming Soon... <Spin className="" />
        </CCol>
      </CRow>
    </CCard>
  )
}

export default Info
