import { useState } from "react"
import Child from "./childComponent"

const Parent = () => {

    let [inputText, setInputText] = useState('')

    let handleInput = (value) => {
        setInputText(value);
    }


    return <Child inputText = {inputText} handleInput = {handleInput}/>
}

export default Parent