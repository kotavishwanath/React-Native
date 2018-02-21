



import * as actions from '../actions/userActions'

const initialState = {
    userName : 'raju'
}

export default function userReducer(state = initialState, action) {

    switch ( action.type ){

        case actions.LOGIN_SUCCESS:{
            console.log ( 'login success from reducer  ' + state.userName);

            return Object.assign({}, state, {
                userName: 'Chandu',
              })
        }
        case actions.LOGIN_FAILURE :{
            console.log ( 'login failure from reducer  ' + state.userName );
            return Object.assign({}, state, {
                userName: 'Appala raju'
              })
        }
        default:{
            console.log ( 'this action is from default block');
            return state;
        }
    }
}