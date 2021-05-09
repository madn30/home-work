const UserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, user: action.payload };

        default:
            return state;
    }

}

export default UserReducer;