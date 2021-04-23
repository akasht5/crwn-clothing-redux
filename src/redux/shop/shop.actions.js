import { ShopActionTypes } from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collections => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collections
})

export const fetchCollectionsFailure = errMsg => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload : errMsg
})

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        dispatch(fetchCollectionsStart());
        const collectionRef = firestore.collection("collections");

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap));

            }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)));

    }
}