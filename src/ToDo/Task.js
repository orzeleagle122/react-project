import React from 'react';

const Task = (props) => {
    const {text,data,id,active,important,finishDate} = props.task;
    const style={
        color: "red"
    }
    if(active){
    return ( 
        <div>
            <p>
                <strong style={important?style:null}>{text}</strong> - do <span>{data}</span>
                <button onClick={()=>props.change(id)}>Zostało zrobione</button><button onClick={()=>props.delete(id)}>X</button>
            </p>
            
        </div>
     );
    } else {
        const finish=new Date(finishDate).toLocaleString();
        return (
            <div>
            <p>
                <strong>{text}</strong> (zrobić do <em>{data}</em>) <br/>
                - potwierdzenie wykonania <span>{finish}</span>
                <button onClick={()=>props.delete(id)}>X</button>
            </p>
            </div>
        )
    } 
}
 
export default Task;