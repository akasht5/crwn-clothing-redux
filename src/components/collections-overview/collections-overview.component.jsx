import React from 'react'

import { connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id,...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
