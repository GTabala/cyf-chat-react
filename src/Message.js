import React from "react";

const Message = ({msg, askAPI, isUpdate}) => {

  const deleteMsg = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
      
  };

 
  fetch(`https://gtabala-chat-server.glitch.me/messages/${msg.id}`, requestOptions)
      .then(x => x.json())
      .then(x => console.log(x));
      setTimeout(() => {
        askAPI();
      }, 1000);
  };

  const updateMsg = () => {
    isUpdate(true);
  };


  return (
    <div id={msg.id} className="message" >   
        <p className="from">
            {msg.from}
        </p>
<div className="text-container">
<p className="text">{msg.text}</p>
    <div className={"btns"}>
    <button className="btnUpd" onClick={updateMsg} >Update</button>
    <button className="btnDel" onClick={deleteMsg} >Delete</button>
    </div>
</div>
    </div>
  );
};

export default Message;