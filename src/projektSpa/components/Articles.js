import React from 'react';

const Articles = ({title,author,text}) => {
    //stylowanie w komp;omencie
    const style={
        marginTop: 40
    }
    return ( 
        <article style={style}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase"
            }}>{title}</h3>
            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: 12
            }}>{author}</span>
            <p style={{
                fonstSize: 15
            }}>{text}</p>
        </article>
     );
}
 
export default Articles;