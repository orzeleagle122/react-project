import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Result from './Result.js';

const APIKey="b727f0569c49ccec59fe88d168bb4776";

class App extends Component {
    state = { 
        formValue: "",
        data: "",
        city: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        err: ""
     }

     handleInputChange=(e)=>{
         this.setState({
            formValue: e.target.value
         })
     }

     componentDidMount(){
         //komponent zainstalowany
         //dobre miejsce do poprania danych

     }

     componentDidUpdate(prevProps,prevState){
        //  console.log(prevState.formValue);
        //  console.log(this.state.formValue);
        if(this.state.formValue===0) return
            if(prevState.formValue!==this.state.formValue){
                
                const API=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.formValue}&appid=${APIKey}&units=metric`;

                fetch(API)
                .then((response)=>{
                    if(response.ok){
                        return(response);
                    }
                    throw Error("nie udało się");
                })
                .then((response)=>{
                    return response.json();
                })
                .then((response)=>{
                    const time=new Date().toLocaleString();
                    this.setState((prevState)=>{ 
                        return (
                                { 
                                        err: false,
                                        data: time,
                                        city: prevState.formValue,
                                        sunrise: response.sys.sunrise,
                                        sunset: response.sys.sunset,
                                        temp: response.main.temp,
                                        pressure: response.main.pressure,
                                        wind: response.wind.speed,
                                    } 
                                )
                    })
                })
                .catch((err)=>{
                    console.log(err);
                    this.setState((prevState)=>{
                        return ( {
                            err : true,
                            city: prevState.formValue
                        })});
                })
            }

     }

    //  handleFindCity=(e)=>{
    //     e.preventDefault();
    //     // console.log("potwierdzony form");
    //     const API=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.formValue}&appid=${APIKey}&units=metric`;

    //     fetch(API)
    //     .then((response)=>{
    //         if(response.ok){
    //             return(response);
    //         }
    //         throw Error("nie udało się");
    //     })
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((response)=>{
    //         const time=new Date().toLocaleString();
    //         this.setState((prevState)=>{ 
    //             return (
    //                     { 
    //                             err: false,
    //                             data: time,
    //                             city: prevState.formValue,
    //                             sunrise: response.sys.sunrise,
    //                             sunset: response.sys.sunset,
    //                             temp: response.main.temp,
    //                             pressure: response.main.pressure,
    //                             wind: response.wind.speed,
    //                         } 
    //                     )
    //         })
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         this.setState((prevState)=>{
    //             return ( {
    //                 err : true,
    //                 city: prevState.formValue
    //             })});
    //     })
    //  }

    render() { 
        return ( 
            <>
                <Form formValue={this.state.formValue} change={this.handleInputChange} />
                <Result watcher={this.state}/>
            </>
         );
    }
}
 
export default App;