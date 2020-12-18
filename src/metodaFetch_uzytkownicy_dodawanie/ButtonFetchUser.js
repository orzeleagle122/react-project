import React from 'react';
const ButtonFetchUser = (props) => {
    return ( 
        <button 
        style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            margin: '20px'
        }}
        onClick={props.click}>Dodaj użytkownika</button>
     );
}
 
export default ButtonFetchUser;