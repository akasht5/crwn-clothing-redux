import React from 'react'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

import { CollectionContainer,TitleContainer,ItemsContainer } from './collection.styles'

const CollectionPage = ({collection}) => {
    const { title,items } = collection;
    return (
        <CollectionContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {
                    items.map(
                        (item) => <CollectionItem key={item.id} item={item} />
                    )
                }
            </ItemsContainer>
        </CollectionContainer>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
