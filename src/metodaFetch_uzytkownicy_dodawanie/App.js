import React, {Component} from 'react';
import './App.css';
import UserList from './UserList'
import ButtonFetchUser from './ButtonFetchUser';


const API="https://randomuser.me/api/?results=1";



class App extends Component {
    state = { 
        users: []
     }

     handleDataFetch=()=>{
        fetch(API)
        .then((response)=>{
            if(response.ok){
                return response;
            }
            throw Error(response.status)
        })
        .then((response)=>response.json())
        .then((data)=>{
            const user=data.results;
            this.setState((prevState) => {
                return { 
                    users: prevState.users.concat(user)
                 };
            });
        })
        .catch(error=>console.log(error+" coś nie tak"))
     }

    render() { 
        const users=this.state.users;
        return ( 
            <>
                <ButtonFetchUser click={this.handleDataFetch}/>
                {users.length>0?<UserList users={users}/>:users}
            </>
         );
    }
}
 
export default App;