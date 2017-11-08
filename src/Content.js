import React, { Component } from 'react';
import ShowCounter from "./ShowCounter";

class Content extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            showLoading : true
        }

        this.minusCounter = this.minusCounter.bind(this);
        this.addCounter = this.addCounter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    minusCounter(){
        this.setState({
            counter: this.state.counter - 1
        })

        /*this.setState((prevState) => ({
            counter : prevState.counter - 1
        }))*/
    }

    addCounter(){
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleChange(event){
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        alert("name : " + this.state.first_name + " : " +this.state.last_name);
    }

    componentWillMount() {
        console.log("log will mount");
    }

    render() {
        if(this.state.showLoading){
            return <h1>Loading...</h1>
        }

        const info = {
            first_name : "Sivakorn",
            last_name : "Chantakad"
        }

        return (
            <div>Hello Content
                <button onClick={this.minusCounter}>Minus Click</button>
                <button onClick={this.addCounter}>Add Click</button>
                <ShowCounter counter={this.state.counter} info={info}/>
                <br/>

                <input type="text" onChange={this.handleChange} name="first_name"/>
                <input type="text" onChange={this.handleChange} name="last_name"/>

                <button onClick={this.handleSubmit}>Save</button>
            </div>
        );
    }




    componentDidMount() {
        console.log("log did mount");

        setTimeout(() => {
            this.setState({
                showLoading:false
            })
        }, 3000)
    }
}

Content.defaultProps = {};

export default Content;
