import React, { useState } from 'react';
import '../Assets/CSS/Dialpad.css'

function Dialpad() {

  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className="dialpad-container">
      <div className="dialpad">
      <input type="text" className="w-100" onChange={handleChange} value={number} style={{fontSize : "25px"}} placeholder=""/>
        <table>
          <tbody>
            <tr>
              <td className="number" onClick={() => setNumber(number + "1")}>1</td>
              <td className="number" onClick={() => setNumber(number + "2")}>2</td>
              <td className="number" onClick={() => setNumber(number + "3")}>3</td>
            </tr>
            <tr>
              <td className="number"onClick={() => setNumber(number + "4")}>4</td>
              <td className="number"onClick={() => setNumber(number + "5")}>5</td>
              <td className="number"onClick={() => setNumber(number + "6")}>6</td>
            </tr>
            <tr>
              <td className="number"onClick={() => setNumber(number + "7")}>7</td>
              <td className="number"onClick={() => setNumber(number + "8")}>8</td>
              <td className="number"onClick={() => setNumber(number + "9")}>9</td>
            </tr>
            <tr>
              <td className="empty"></td>
              <td className="number"onClick={() => setNumber(number + "0")}>0</td>
              <td className="empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dialpad;
