import './App.css';
import React, {useState} from 'react';
function App() {
  const [input, setInput] = useState('');
  const handleChange = event =>{
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>HTML Markup Previewer</h2>
        <div className="textarea">
        <textarea className = "input box" placeholder="Type some HTML and see it displayed on the right --->" onChange={handleChange}></textarea>
        <div className = "output box" dangerouslySetInnerHTML={{__html:input}} ></div>
        </div>
       

      </header>
    </div>
  );
}

export default App;
