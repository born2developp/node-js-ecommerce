const productsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_ALL_PRODUCTS' :
            return {...state , products : payload };
    }
};

export default productsReducer;
