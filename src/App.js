import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const changeColor = randomColor();
  const [color, setColor] = useState('#f2af85');
  const click = (color) => {
    setColor(color);
    // eslint-disable-next-line no-restricted-syntax
    document.getElementById('buttonDiv').style.backgroundColor = changeColor;
  };

  return (
    <div
      style={{
        fontFamily: 'monospace',
        justifyContent: 'center',
        border: '10px solid #078080',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
        padding: '20px',
      }}
    >
      <h1
        style={{
          margin: '20px',
          padding: '20px',
          alignContent: 'center',
        }}
      >
        Random color generator
      </h1>
      <p
        style={{
          fontSize: '15px',
          alignContent: 'center',
          margin: '5px',
          padding: '5px',
        }}
      >
        Click on the button below to generate a color.
      </p>

      <button
        onClick={() => click(changeColor)}
        id="colorinput"
        name="colorinput"
        type="button"
        className="inputField"
        style={{
          margin: '20px',
          padding: '20px',
          borderRadius: '20px',
          backgroundColor: '#8cd4fa',
        }}
      >
        Generate
      </button>

      <div
        id="buttonDiv"
        style={{
          borderRadius: '20px',
          backgroundColor: '#f2af85',
          animation: 'ease-in',
          transition: '1s',
        }}
      >
        <p
          style={{
            fontSize: '25px',
            alignContent: 'center',
            margin: '20px',
            padding: '20px',
          }}
        >
          Generated Color: {color}
        </p>
      </div>
    </div>
  );
}

/*
      <label for="colorinput" />
      <input
        value={color}
        onClick={
          (event) => setColor(event.currentTarget.value)
           const foundColor = get(event.currentTarget.value);
          {color}

        id="colorinput"
        name="colorinput"
        type="button"
        className="inputField"
        style={{
          margin: '20px',
          padding: '20px',
          borderRadius: '20px',
          backgroundColor: '#5e1493',
        }
      />  */
