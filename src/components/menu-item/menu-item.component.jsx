import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({ title,imageUrl,linkUrl,size,history }) => {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`/shop/${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="content">
                <span className="title">{title.toUpperCase()}</span>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
