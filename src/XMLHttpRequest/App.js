import React,{Component} from 'react';

class App extends Component {
    state = { 
        users: []
     }

     componentDidMount(){
        const xhr=new XMLHttpRequest();
        xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
        xhr.onload=()=>{
            console.log(xhr.status); //status 200 jak jest dobrze
            console.log(typeof xhr.response); //string
            if(xhr.status===200){
                const users=JSON.parse(xhr.response) //zmiena stringa z jsona na object
                // console.log(typeof users); //object
                this.setState({
                    users
                })
            }
        }
        xhr.send(null);
     }
    

    render() { 
        const users=this.state.users.map((user)=>{return(
            <div key={user.id} >
                <h4>{user.name}</h4>
                <p>{user.address.city}</p>
            </div>
        )})
        return ( 
            <div>
                {users}
            </div>
         );
    }
}
 
export default App;