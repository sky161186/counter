import { Component } from "react";
import WrappedComponent from "./WrappedComponent";

class Sky extends Component{
    render (){
        return(
            <>
            <WrappedComponent>
            <h1>hi i am sky</h1>
            </WrappedComponent>
           
            </>
            
        )
    }
}

export default Sky;