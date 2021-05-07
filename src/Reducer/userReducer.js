/*
action - json with :
    - type (Mandatory) - The type of the action
    - payload (Optional) - The data send with the action

*/

const UserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, user: action.payload };

        default:
            return state;
    }

}

export default UserReducer;