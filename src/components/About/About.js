import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';


const About = () => {
    const {user} = useContext(AuthContext)
   
    return (
        <div>
          <p>{user?.email}</p>
        </div>
    );
};

export default About;