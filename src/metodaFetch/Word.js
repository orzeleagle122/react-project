import React from 'react';
import "./Word.css";

const Word = (props) => {
    return ( 
        <li>
            Słowo po angielsku <strong>{props.english}</strong>.
            Tłumaczenie: <strong>{props.polish}</strong>
        </li>
     );
}
 
export default Word;