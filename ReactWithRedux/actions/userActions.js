
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(userCredentials){

    if ( userCredentials.username === 'raj' && userCredentials.password === 'testpassword'){

        console.log ('login button clicked');
        return {
            type: LOGIN_SUCCESS
        }
    }else{
        console.log ('Failure block');
        return {
            type: LOGIN_FAILURE
        }
    }
}