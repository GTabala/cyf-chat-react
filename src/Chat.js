import React, {useState} from "react";

const Chat = ({askAPI, isUpdate}) => {

    let [name, setName] = useState("");
    let [message, setMessage] = useState("");
  

    const submitForm = (e) => {
        e.preventDefault();
        let newMessage = {
            "from": name,
            "text": message
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        };

        fetch("https://gtabala-chat-server.glitch.me/messages/", requestOptions)
            .then(x => x.json())
            .then(x => console.log(x));
            setTimeout(() => {
              askAPI();
            }, 1000);
            setName("");
            setMessage("");
    }
    console.log(isUpdate);

    return (
        <div>
          <form onSubmit={submitForm}>
            <label>
                Name:
            </label>
            <input type="text" name="name" value={name} placeholder="Enter name" onChange={e => setName(e.target.value)} />
            <br/><br/>
            <label>
                Message:
            </label>
            <input type="text" name="message" value={message} placeholder="Enter your message here" onChange={e => setMessage(e.target.value)} />
            <br/><br/>
  

            <button onClick={submitForm}>
               {isUpdate ? "Update":"Post"}
            </button>
            </form>
        </div>
    )
};

export default Chat;