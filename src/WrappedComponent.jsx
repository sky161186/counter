import { useState } from "react";

// class WrappedComponent extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <>
//                 <h2>header</h2>
//                 <h2>left sidebar</h2>
//                 <div>{this.props.children}</div>
//                 <h2>Foote section</h2>

//             </>
//         )
//     }
// }


const ChildComponet = () => {
    return (
        <>
            <h2>Child Component</h2>
        </>
    )
}



const HOC = (HComponent) => {

    return (props)=>{

        const [state, setState] = useState('sky')
        return (
            <>
                <h3>HOC</h3>
                <p>State: {state}</p>
               <HComponent {...props}/>
            </>
        )

    }
   
}

const NewComponent = HOC(ChildComponet)

const WrappedComponent = (props) => {
    return (
        <>
            <h2>header</h2>
            {/*hi i am commmented here*/}
            <h2>left sidebar</h2>
            <div>{props.children}</div>
            <NewComponent />
            <h2>Foote section</h2>
        </>
    )

}

export default WrappedComponent;