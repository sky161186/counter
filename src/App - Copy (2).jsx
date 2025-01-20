import React, { PureComponent } from "react";

class MYComponent extends PureComponent{
    state={
        name: 'surendra'
    }
    render(){
        console.log('render2')
        return(
            <div>Name: {this.props.name}</div>
        )
    }
}

class App extends React.Component{
    constructor(){
        super()
        this.state={
            address: "Noida"
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.state.address='delhi'
        console.log('asd')
        this.setState({
            address: 'delhi',
        }, ()=>{
            console.log('component has been rendered')
        })
    }

    render(){
        console.log('render1')
        console.log(this.state.address)
        return(
            <>
                <MYComponent name="surendrra"/>
                City name: {this.state.address}
                <button onClick={this.handleInput}>click</button>
            </>
        )
    }
}

export default App;