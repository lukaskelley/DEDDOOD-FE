import React from 'react'

const Nftstaking = React.lazy(() => import('./views/nftstaking/Nftstaking'))
const FTstaking = React.lazy(() => import('./views/ftstaking/FTstaking'))
const NftMint = React.lazy(() => import('./views/nftmint/NftMint'))
const Info = React.lazy(() => import('./views/info/Info'))
const NftMarketPlace = React.lazy(() => import('./views/nftmarketplace/NftMarketPlace'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/nftstaking', name: 'Nftstaking', element: Nftstaking },
  { path: '/ftstaking', name: 'FTstaking', element: FTstaking },
  { path: '/nftmint', name: 'NftMint', element: NftMint },
  { path: '/info', name: 'Info', element: Info },
  { path: '/nftmarket', name: 'NftMarketPlace', element: NftMarketPlace },
]

export default routes
