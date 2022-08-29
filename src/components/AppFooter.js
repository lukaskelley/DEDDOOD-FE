import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="appfooter">
      <div>
        <a href="https://doodcats.net" target="_blank" rel="noopener noreferrer">
          DoodCats
        </a>
        <span className="ms-1">&copy; 2022 SpaceCats.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
