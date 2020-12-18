import React, { Component } from 'react';
// dane w public/data/words/json
import Word from "./Word";

class App extends Component {
    state = { 
        words: [],  // żadanie AJAX
        isLoaded: false
    }

     componentDidMount(){
         this.idInterval=setTimeout(this.fetchData,3000);
     }

     componentWillUnmount(){
         clearInterval(this.idInterval);
     }

     fetchData=()=>{
        fetch('data/words.json')
        .then((responce)=>responce.json()) //responce odpowiedz od fetcha (nazwa dowolna)
       .then((data)=>{
           this.setState(()=>{return({
               words: data.words,
               isLoaded: true
           })})
       })
     }

    render() { 
        const words=this.state.words.map((word)=>{return(<Word key={word.id} english={word.en} polish={word.pl} />)});
        return ( 
            <React.Fragment>
                <ul>
                    {this.state.isLoaded?words:`Wczytuje dane`}
                </ul>
            </React.Fragment>
         );
    }
}
 
export default App;