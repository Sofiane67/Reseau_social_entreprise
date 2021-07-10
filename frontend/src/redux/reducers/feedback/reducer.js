const initialState = {};
export const feedBack = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case "ERROR":
            newState = {
                message: action.message,
                status: action.status
            }
            break;
        case "SUCCESS":
        newState = {
            message: action.message,
            status: action.status
        }
        console.log(newState)
        break;
        case "INIT_FEEDBACK":
            newState = {}
            break;
        default:
            return state;
    }
    return newState;
};