import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialColor = randomColor({
    luminosity: ['light', 'dark'],
    hue: ['red', 'blue', 'green'],
  });
  const [color, setColor] = useState(initialColor);
  const [count, setCount] = useState(0);
  const [hueInput, setHueInput] = useState(initialColor.hue);
  const [lumInput, setLumInput] = useState(initialColor.luminosity);

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
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
          setCount(count + 1);
          setHueInput(initialColor.hue);
          setLumInput(initialColor.luminosity);
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
      <p
        style={{
          fontSize: '20px',
          alignContent: 'center',
          margin: '5px',
          padding: '10px',
        }}
      >
        Counter: {count}
      </p>
      <div
        id="buttonDiv"
        style={{
          height: '200px',
          borderRadius: '20px',
          backgroundColor: `${hueInput || color || lumInput}  `,
          animation: 'ease-in',
          transition: '0.75s',
          lineHeight: '125px',
        }}
      >
        <p
          style={{
            fontSize: '25px',
            alignContent: 'center',
            margin: '20px',
            padding: '20px',
            textAlign: 'center',
            textverticalAlign: 'center',
          }}
        >
          Generated Color: {color}
        </p>
      </div>
      <p
        style={{
          fontSize: '20px',
          alignContent: 'center',
          margin: '5px',
          padding: '10px',
        }}
      >
        You have generated {count} random colors.
      </p>

      <div>
        <p
          style={{
            textAlign: 'center',
            fontSize: '15px',
          }}
        >
          Now try to type a color below
        </p>
        <input
          placeholder="red/blue/green"
          value={hueInput}
          onChange={(event) => setHueInput(event.currentTarget.value)}
          style={{
            fontFamily: 'monospace',
            margin: '2px',
          }}
        />

        <input
          placeholder="light/dark"
          value={lumInput}
          onChange={(event) => setLumInput(event.currentTarget.value)}
          style={{
            fontFamily: 'monospace',
            margin: '2px',
          }}
        />
      </div>
    </div>
  );
}
