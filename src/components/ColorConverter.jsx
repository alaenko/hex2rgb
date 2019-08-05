import React, { useState } from 'react';

export default function ColorConverter() {
  const [color, setColor] = useState("#ffffff");
  const [error, setError] = useState(false);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
  }

  const handleChange = evt => {
    const value = evt.target.value;
    if (value.length === 7 && hexToRgb(value)) {
      setError(false);
      setColor(value);
    } else if (value.length < 7) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <form className="converter" style={{backgroundColor: error ? 'red' : color}} onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}></input>
      <div className="rgb">{error ? 'Ошибка!' : hexToRgb(color)}</div>
    </form>
  )
}



