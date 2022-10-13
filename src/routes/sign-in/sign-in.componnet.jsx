import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'


const SignIN = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(res); 
        createUserDocFromAuth(user);
    }
    return (
        <>
    <h1>Sign IN Page </h1>
        <button onClick={logGoogleUser}>
            Sign in With google Popup
        </button>
        </>
    )
}

export default SignIN;