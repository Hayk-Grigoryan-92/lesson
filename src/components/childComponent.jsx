

const Child = (props) => {

    const addText = (value) => {
       console.log('zzzzzzzzzzzzzzzz');
       value = ''
    } 

    return <div>
        <input type="text" placeholder="Insert your text" onChange={(e) => props.handleInput(e.target.value)} value={props.inputText}/>
        <button onClick={addText} value={props.inputText}>Add Text</button>
        <p>{props.inputText}</p>
    </div>
}

export default Child