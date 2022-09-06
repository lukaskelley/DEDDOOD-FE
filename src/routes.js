import React from 'react'

const DOODNftstaking = React.lazy(() => import('./views/doodnftstaking/Nftstaking'))
const DEDNftstaking = React.lazy(() => import('./views/dednftstaking/Nftstaking'))
const FTstaking = React.lazy(() => import('./views/ftstaking/FTstaking'))
const NftMint = React.lazy(() => import('./views/nftmint/NftMint'))
const Info = React.lazy(() => import('./views/info/Info'))
const NftMarketPlace = React.lazy(() => import('./views/nftmarketplace/NftMarketPlace'))

const routes = [
  { path: '/', name: 'NftDOODstaking', element: DOODNftstaking },
  { path: '/doodnftstaking', name: 'NftDOODstaking', element: DOODNftstaking },
  { path: '/dednftstaking', name: 'NftDEDstaking', element: DEDNftstaking },
  { path: '/ftstaking', name: 'FTstaking', element: FTstaking },
  { path: '/nftmint', name: 'NftMint', element: NftMint },
  { path: '/info', name: 'Info', element: Info },
  { path: '/nftmarket', name: 'NftMarketPlace', element: NftMarketPlace },
]

export default routes
