import React, { useState } from "react";

export default function Textarea(props) {
  //To handel on uppercase click event
  const UpperClick = () => {
    let newText = text.toUpperCase();
    textarea(newText);
  };

  //to handel lowercase click event
  const Lowercase = () => {
    let newText = text.toLowerCase();
    textarea(newText);
  };

  //to handel Claer click event
  const Clear = () => {
    let newText = "";
    textarea(newText);
  };

  //to handel Capital click event
  const Capital = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      //here arr[i].charAt(0).toUpperCase() is used to select and capitalize first character and + is for concatnation and arr[i].slice(1) is used to concate remaining word
      //for ex raj first they select r and capaitalize it and then concate with aj 
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    textarea(str2);
  };

  //to handel changes on textarea
  const UpperChange = (event) => {
    textarea(event.target.value);
  };

  //state
  const [text, textarea] = useState("");

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={UpperChange}
          style={{backgroundColor:props.mode === "dark"?'#3a4045':"white",
          color:props.mode === "dark"?'white':"black"
        }}
        ></textarea>

        <button className="btn btn-primary my-3" onClick={UpperClick}>
          Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={Lowercase}>
          Lowercase
        </button>

        <button className="btn btn-primary my-3 " onClick={Clear}>
          Clear
        </button>

        <button className="btn btn-primary my-3 mx-3" onClick={Capital}>
          Capitalize
        </button>
      </div>

      <div className={`container my-3 border text-center text-${props.mode === 'light'?'dark':'light'}`}>
        <h3 className="my-1">Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p className="fw-bold">
          Time required to Read Text :{" "}
          <span className="fw-normal">
            {0.008 * text.split(" ").length} Min{" "}
          </span>
        </p>
      </div>
      
    </>
  );
}
