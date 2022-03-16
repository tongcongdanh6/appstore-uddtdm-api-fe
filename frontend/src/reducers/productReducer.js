const initialState = {
    productList: [],
    lastestProducts: [],
    bestSellerProducts: [],
    selectedProduct: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, productList: action.payload}
        case 'SET_LASTEST_PRODUCTS':
            return {...state, lastestProducts: action.payload}        
        case 'SET_BEST_SELLER_PRODUCTS':
            return {...state, bestSellerProducts: action.payload}
        default:
            return state;
    }
}

export default productReducer;