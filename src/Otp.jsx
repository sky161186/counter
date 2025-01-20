import { useState } from "react"

const Otp =(props)=>{

    //const num= props.number;
    let arr = ['4','9']
    const [number, setNumber] = useState(0)

    const handleInput=(e)=>{
        const number = e.target.value
        if(!isNaN(number)>10){
                setNumber(number)
                console.log('it is a number')
        } else {
            console.log('it will be less than 10')
        }
    }

    return(
        <>
            <h2>OTP section</h2>
            <form>
                <p>Number of fields{number}</p>
                <div style={{width: '100%'}}>
                    {
                        arr.map((val, index)=>{
                            return(
                                <span key={index} style={{width: "20%"}}><input type="number" min="1" max="1" placeholder="Please enter the value" onChange={handleInput}/></span>
                            ) 
                        })
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
          
        </>
    )
}

export default Otp;