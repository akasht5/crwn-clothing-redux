import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubTitleContainer } from './menu-item.styles'

const MenuItem = ({ title,imageUrl,linkUrl,size,history }) => {
    return (
        <MenuItemContainer className={size ? size : ''} onClick={() => history.push(`/shop/${linkUrl}`)}>
            <BackgroundImageContainer imageUrl={imageUrl} />
            <ContentContainer>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubTitleContainer>SHOP NOW</SubTitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)
