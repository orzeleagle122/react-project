import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends Component {
    state = {
        value: ""
    }

    handleOnchange=(e)=>{
        this.setState({ value: e.target.value });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({ value: "" });
    }

    render(){
        return ( 
            <div className="contact" onSubmit={this.handleSubmit}>
                <form>
                    <h3>
                        Napisz do nas!
                    </h3>
                    <textarea value={this.state.value} onChange={this.handleOnchange} placeholder="wpisz wiadomość..."></textarea>
                    <button>wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz niewypełniony formularz! Czy napewno chcesz opuścić tę stronę?" 
                />
            </div>
        );
    }
}
 
export default ContactPage;