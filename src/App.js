// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Message from './Message';
import './App.css';
import Chat from './Chat';

function App() {

const [messages, setMessages] = useState([]);
const [kick, setKick] = useState(true);
let [update, setUpdate] = useState(false);


const askAPI = () => {
  setKick(!kick);
};



useEffect(() => {
    fetch("https://gtabala-chat-server.glitch.me/messages/")
    .then(response => response.json())
    .then(response => setMessages(response));
  },[kick]
);

// Commented out due to Glitch blocking
// setInterval(() => {
//   setKick(!kick);
// }, 30000);

  return (
    <div className="App">

{
  messages.map((item, ind) => <Message key={ind} msg={item} askAPI={askAPI} isUpdate={setUpdate} />)
}
      <Chat askAPI={askAPI} isUpdate={update} />
    </div>
  );
}

export default App;
