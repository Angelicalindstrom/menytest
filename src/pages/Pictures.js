import React, {useState} from "react";
import "../App.css"
export default function Pictures() {

  const [color, setColor]= useState("white"); // startfärg
  const changeBackgroundColor = ()=>{
    const myColor= '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = myColor;
  }

  return (
    <div>
      <h1>This is the pictures page</h1>
      <div className="App" style={{backgroundColor: color}}>
        <header onClick={changeBackgroundColor}>
          <h3>klicka här så hänhder det något</h3>
        </header>
      </div>
    </div>
  );
}
