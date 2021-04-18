import React from 'react'

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title,routeName,items }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer to={`/shop/${routeName}`} >{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items
                    .filter((item,index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview
