import React,{ Component } from 'react'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { updateCollections } from './../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import withSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class Shop extends Component {
    state = {
        loading : true
    }

    componentDidMount(){
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection("collections");

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({ loading:false });
            }
        );
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop">
                <Route exact path={`${match.path}`} render={props => ( <CollectionsOverviewWithSpinner isLoading={loading} {...props} />) } />
                <Route path={`${match.path}/:collectionId`} render={props => ( <CollectionPageWithSpinner isLoading={loading} {...props} /> )} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collections => dispatch(updateCollections(collections))
})

export default connect(null,mapDispatchToProps)(Shop)
