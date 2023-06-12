import React, {useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import './Signup.css'
import { AuthContext } from '../../contexts/UserContexts';
const Signup = () => {

    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        if(password.length <6 ){
            setError('Password must be 6 characters or more')
        }
        if(password !== confirm){
            setError('Your password did not match');
            return;

        }

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error =>{
            console.error(error);
        })

    }
    return (
        <div className='form-container-signup'>
        <h2 className='form-title'>
            Sign Up
        </h2>
        <form  onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Email' id='' required></input>
            </div>
            <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='password' id='' required></input>
            </div>
            <div className="form-control">
                <label htmlFor='confirm'>Confirm  Password</label>
                <input type='password' name='confirm' placeholder='password' id='' required></input>
            </div>
                <input type="submit" className="btn-submit" value="Signup"/>
        </form>
        <p className="new_sit">Already have an account <Link to='/login'>Please Login</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default Signup;