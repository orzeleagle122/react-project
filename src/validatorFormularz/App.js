import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = { 
        username:"",
        email:"",
        pass:"",
        accept:false,
        errors: {
            username:false,
            email:false,
            pass:false,
            accept:false
        },
        message:""
     }

     handleChange=(e)=>{
        const name=e.target.name;
        const type=e.target.type;
        if(type==="text" || type==="password" || type==="email"){
            this.setState({ [name]: e.target.value  });
        } else if(type==="checkbox"){
            this.setState({ [name]: e.target.checked });
        }        
     }

     message={
         username_incorrect: " Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
         email_incorrect: " Nazwa emaila musi zawierać znak @",
         pass_incorrect: " Hasło mu mieć 8 znaków",
         accept_incorrect: " Nie potwierdzona zgoda"
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        const validation=this.formValidation(); //{}
        console.log(validation);
        if(validation.correct){
            this.setState({ 
                username:"",
                email:"",
                pass:"",
                accept:false,
                errors: {
                    username:false,
                    email:false,
                    pass:false,
                    accept:false
                },
                message:"Formularz został wysłany!"
             });
             
        } else {
            this.setState({
                errors: {
                    username:!validation.username,
                    email:!validation.email,
                    pass:!validation.password,
                    accept:!validation.accept
                }
            });
        }
     }

     componentDidUpdate(){
         if(this.state.message!==""){
             setTimeout(()=> this.setState({message:""}),3000);
         }
     }

     formValidation=()=>{
         let username=false, email=false, password=false,accept=false;
         let correct=false;

         if(this.state.username.length<10&&this.state.username.indexOf(" ")===-1){
             username=true;
         }

         if(this.state.email.indexOf("@")!==-1){
             email=true;
         }

         if(this.state.pass.length===8){
            password=true;
         }

         if(this.state.accept){
            accept=true;
         }

         if(username&&email&&password&&accept){
            correct=true;
         }

         return (
             {
                correct,
                username,
                email,
                password,
                accept
             }
         )
     }

    render() { 
        return ( 
            <div className="App">
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="user"> Twoja imie:
                    <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
                    {this.state.errors.username&&<span>{this.message.username_incorrect}</span>}
                    </label>

                    <label htmlFor="email"> Twoj email:
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    {this.state.errors.email&&<span>{this.message.email_incorrect}</span>}
                    </label>

                    <label htmlFor="password"> Twoje hasło:
                    <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
                    {this.state.errors.pass&&<span>{this.message.pass_incorrect}</span>}
                    </label>

                    <label htmlFor="accept">
                        <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/> Wyrażam zgodę wszelaką
                        {this.state.errors.accept&&<span>{this.message.accept_incorrect}</span>}
                    </label>

                    <button>Zapisz się</button>
                </form>
                {this.state.message&&<h3>{this.state.message}</h3>}
            </div>
         );
    }
}
 
export default App;