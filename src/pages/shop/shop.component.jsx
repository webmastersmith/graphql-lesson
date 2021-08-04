import React from 'react'
import { Route } from 'react-router-dom'

import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container'
// import CollectionPage from '../collection/collection.component'

import { default as CollectionPage } from '../../pages/collection/collection.container'

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage
