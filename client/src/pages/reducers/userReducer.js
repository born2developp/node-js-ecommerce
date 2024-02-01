const userReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'LOGIN' : {
            return { ...state, user: payload };
        }

        case 'LOGOUT' : {
            return { ...state, user: [] };
        }
    }
}

export default userReducer