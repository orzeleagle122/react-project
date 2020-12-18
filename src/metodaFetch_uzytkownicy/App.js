import React, {Component} from 'react';
import './App.css';
import UserList from './UserList'
import ButtonFetchUser from './ButtonFetchUser';


const API="https://randomuser.me/api/?results=5";



class App extends Component {
    state = { 
        users: null
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
            this.setState({ users: data.results });

        })
        .catch(error=>console.log(error+" coś nie tak"))
     }

    render() { 
        const users=this.state.users;
        return ( 
            <>
                <ButtonFetchUser click={this.handleDataFetch}/>
                {users?<UserList users={users}/>:users}
            </>
         );
    }
}
 
export default App;