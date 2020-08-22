import React,{Component} from 'react';

class Footer extends Component{
    state={
        name:'',
        age: 35,
    }
    componentDidMount(){
        this.setState({name:'mahidulmoon'})
    }
    componentWillUnmount(){

    }
    createAlert(){
        alert("hello moon");
    }
    changed=(evt)=>{
        this.setState({name:evt.target.value});
        console.log(this.state.name);
    }
    render(){
        const animals = ['cats','dogs','horse']
        return (
            <React.Fragment>
                
                { this.state.age === 35 ? (<div>
                    <h2 onClick={this.createAlert}>This is our footer{this.props.trademark}</h2>
                <h2 onClick={this.props.myAlert}>This is our fucnction alert{this.props.trademark}</h2>
                <input type="text" value={this.state.name} onChange={this.changed} />
                </div>):'no' }
                {animals.map(animal=>
                    <h1 key={animal}>{animal}</h1>    
                )}
            </React.Fragment>
        )
    }
}

export default Footer;