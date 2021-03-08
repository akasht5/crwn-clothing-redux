import React,{ Component } from 'react'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends Component{
    constructor(){
        super();

        this.state = {
            collections : SHOP_DATA
        }
    }

    render(){
        return (
            <div className="shop">
                {
                    this.state.collections.map(({ id,...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
    
}

export default Shop
