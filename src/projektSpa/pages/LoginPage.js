import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label> Podaj Login
                <input type="text"></input>
            </label>
            <label> Podaj Haslo
                <input type="password"></input>
            </label>
            <button>zaloguj</button>
        </div>
     );
}
 
export default LoginPage;