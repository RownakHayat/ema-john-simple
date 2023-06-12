import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';

const Inventory = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h3>This is inventory {user?.email}</h3>
        </div>
    );
};

export default Inventory;