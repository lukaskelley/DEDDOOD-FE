import React, { useEffect, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const App = () => {
  useEffect(() => {
    var hours = 1000 // to clear the localStorage after 1 hour
    // (if someone want to clear after 8hrs simply change hours=8)
    var now = new Date().getTime()
    var setupTime = localStorage.getItem('setupTime')
    if (setupTime == null) {
      localStorage.setItem('setupTime', now.toString())
    } else {
      if (now - Number(setupTime) > hours * 60 * 60) {
        localStorage.clear()
        window.location.reload()
      }
    }
    // Move the top of scroll
    window.scroll(0, 0)
  })

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
