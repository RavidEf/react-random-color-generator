import './App.css';
import randomColor from 'randomcolor';
import { React, useRef, useState } from 'react';

export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);

  return (
    <body>
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
          onClick={() => {
            const newColor = randomColor();
            setColor(newColor);
          }}
          id="colorinput"
          name="colorinput"
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
            backgroundColor: `${color}`,
            animation: 'ease-in',
            transition: '0.75s',
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
    </body>
  );
}
