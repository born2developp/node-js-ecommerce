const wishListReducer = (state , action) => {
    const {type , payload} = action;

    switch (type) {
        case 'ADD_PRODUCT_TO_WISHLIST' :
            return {...state , wishlist : [payload , ...state.wishlist] };
    }

}

export default wishListReducer;