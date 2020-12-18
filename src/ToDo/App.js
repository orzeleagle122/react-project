import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
    counter=9;
    state = { 
        tasks: [
            {
                id:0,
                text:"zagrac w cyberpanka",
                data:"2020-02-15",
                important:true,
                active:true,
                finishDate:null
            },
            {
                id:1,
                text:"zrobic pranie",
                data:"2020-02-15",
                important:false,
                active:true,
                finishDate:null
            },
            {
                id:2,
                text:"umyc naczynia",
                data:"2020-02-15",
                important:true,
                active:true,
                finishDate:null
            }
        ]
     }

     deleteTask=(id)=>{
         
        //  znajdujemy element który pasuje do klikniecia
            // const tasks=[...this.state.tasks];
            //  const index=tasks.findIndex((task)=>task.id===id);
            //  tasks.splice(index,1);
            //  this.setState({
            //      tasks
            //  })
        // lub uzycie filter
        let tasks=[...this.state.tasks];
        tasks=tasks.filter(task=>task.id!==id);
        this.setState({
            tasks
        })

     }

     changeStatus=(id)=>{
        const tasks=[...this.state.tasks];
        tasks.forEach(task =>{
            if(task.id===id){
                task.active=false;
                task.finishDate=new Date().getTime();
            }
        });
        this.setState({
            tasks
        })
     }

     addTask=(text,data,important)=>{
         console.log("dodanie tasku do tablicy");
         const task={
            id:this.counter,
            text,
            data,
            important,
            active:true,
            finishDate:null
        }
        this.counter++;
        this.setState(prevState => {
            return { tasks: [...prevState.tasks,task] };
        });
        return true;
     }
    render() { 
        return ( 
            <>
                <h1>TODO APP</h1>
                <AddTask add={this.addTask}/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeStatus}/>
            </>
         );
    }
}
 
export default App;