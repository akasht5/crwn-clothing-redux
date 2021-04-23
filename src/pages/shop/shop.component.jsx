import React,{ Component } from 'react'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.actions'

import CollectionPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'

class Shop extends Component {
    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const { match } = this.props;

        return (
            <div className="shop">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null,mapDispatchToProps)(Shop)