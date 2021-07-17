import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
const SignInLink = () => {

    const user = useSelector((state) => state.user);
    const name = user.name;
    const signedIn = user.signedIn;

    return (
        <div>
            {signedIn? <h4 className="name">Hi {name}</h4>: <Link  to={'/signin'}>
            <h4 className="signin">Sign in</h4></Link>}
        </div>
    )
}

export default SignInLink
