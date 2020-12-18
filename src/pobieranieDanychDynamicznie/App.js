import React, {Component} from 'react';

// pseudo baza danych
const data=[
    {id:1,title:"Wiadomość nr 1",body:"zawartość wiadomości nr 1..."},
    {id:2,title:"Wiadomość nr 2",body:"zawartość wiadomości nr 2..."}
]

setInterval(() => {
    const index=data.length+1;
    data.push({
        id: index,
        title:`Wiadomość nr ${index}`,
        body:`zawartość wiadomości nr ${index}...`
    })
    // console.log(data);
}, 5000);

class App extends Component {
    state = { 
        comments: [...data]
     }

     getData=()=>{
         if(this.state.comments.length!==data.length){
             console.log("aktualizuje dane");
             this.setState({
                comments: [...data]
            })
         } else {
             console.log("dane takie same");
         }

     }

     componentDidMount(){
         this.idI=setInterval(this.getData, 1000);
     }

     componentWillUnmount(){
         clearInterval(this.idI);
     }


    render() { 
        const comments=this.state.comments.map((data)=>{return(
            <div key={data.id}>
                <h4>{data.title}</h4>
                <div>{data.body}</div>
            </div>
        )})
        return ( 
            <div>
                {comments.reverse()}
            </div>
         );
    }
}
 
export default App;
