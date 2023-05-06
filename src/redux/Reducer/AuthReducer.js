import { USER_DELETE_SUCCESS, USER_FETCH_ROLE_FAIL, USER_FETCH_ROLE_REQUEST, USER_FETCH_ROLE_SUCCESS, USER_REGISTER_SUCCESS } from '../Constants/Constants';

let initState = {
    users: {}
}

const userAuthReducer = (state = initState, action) => {
    switch (action.type) {

        case USER_REGISTER_SUCCESS:
            return ({
                ...state,
                users: {
                    ...state.users,
                    users: [...state.users.users, action.payload]
                }
            });

            // case USER_DELETE_SUCCESS:
            //     return ({
            //         ...state,
            //         users: {
            //             ...state.users,
            //             users: [...state.users.users, action.payload]
            //         }
            //     });

        case USER_FETCH_ROLE_SUCCESS:
           // console.log(action.payload, "action.payload")
            return ({ 
                ...state,
                users: action.payload
             });

        default:
            return state;
    }
};
export default userAuthReducer;
