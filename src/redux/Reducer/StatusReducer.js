import { USER_DELETE_SUCCESS, USER_FETCH_ROLE_FAIL, USER_FETCH_ROLE_REQUEST, USER_FETCH_ROLE_SUCCESS, USER_REGISTER_SUCCESS, USER_STATUS_CREATE_SUCCESS, USER_STATUS_SUCCESS } from '../Constants/Constants';

let initState = {
    status: {}
}

const statusReducer = (state = initState, action) => {
    switch (action.type) {
        case USER_STATUS_CREATE_SUCCESS:
            return ({
                ...state,
                status: {
                    ...state.status,
                    statuses: [...state.status.statuses, action.payload]
                }
            });

        // case USER_STATUS_UPDATE_SUCCESS :
        //     return ({
        //         ...state,
        //         status: {
        //             ...state.users,
        //             users: [...state.users.users, action.payload]
        //         }
        //     });
        

        case USER_STATUS_SUCCESS:
            return ({ 
                ...state,
                status: action.payload
             });

        default:
            return state;
    }
};
export default statusReducer;
