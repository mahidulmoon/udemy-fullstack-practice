import React,{useState,useEffect} from 'react';

const Numbers = () =>{
    const [numbers,setNumbers] = useState(['one','two','three'])
    const [letters,setLetters] = useState(['a','b','c'])
    const addNumber=()=>{
        setNumbers([...numbers,'four'])
    }
    const addLetter=()=>{
        setLetters([...numbers,'d'])
    }
    useEffect(() => {
        console.log('mahidulmoon');
    },[numbers,letters])
    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map(num=> {
                return <h4>{num}</h4>   
            })}
            {letters.map(num=> {
                return <h4>{num}</h4>   
            })}
            <button onClick={addNumber}>click</button>
            <button onClick={addLetter}>click</button>
        </div>
    )
} 

export default Numbers;