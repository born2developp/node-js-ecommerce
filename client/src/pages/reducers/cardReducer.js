const cardReducer = (state , action) => {
    const {type , payload} = action;

    switch (type) {
        case 'ADD_PRODUCT_TO_BAG' :
            return {...state , cards : [payload , ...state.cards] };
    }
    
}

export default cardReducer;