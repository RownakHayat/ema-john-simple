import React, { useContext} from 'react';
import './Login.css'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';

const Login = () => {
   const {signIn} = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            console.log("result", result);
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error));


    }
    


    return (
        <div className='form-container'>
            <h2 className='form-title'>
                Login Now
            </h2>
            <form onSubmit={handleSubmit} method='POST'>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Email' id='' required></input>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='password' id=''></input>
                </div>
                    <input type="submit" className="btn-submit" value="Login"/>
            </form>
            <p className="new_sit">New to Amazon <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;