import React, { useState } from "react";
import { BackspaceFill, PersonCircle, TelephoneFill } from "react-bootstrap-icons";

const Dialpad = () => {

  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  }
  return (
    <>
      <div className="container-fluid d-table-cell align-middle">
        <div className="d-flex justify-content-center my-4">
        <PersonCircle color="white" size={75}/>
        </div>
      <input type="text" className="form-controt py-4 px-4 my-3 rounded-4 w-100 bg-light" onChange={handleChange} value={number} style={{fontSize : "25px"}} placeholder=""/>
        <div className="table-responsive bg-light rounded-4">
          <table className="table align-middle table-borderless table-light text-lg-center">
            <tbody className="">
              <tr>
                <td className="table-data" onClick={() => setNumber(number + "1")}>1</td>
                <td className="table-data" onClick={() => setNumber(number + "2")}>2</td>
                <td className="table-data" onClick={() => setNumber(number + "3")}>3</td>
              </tr>
              <tr>
                <td className="table-data" onClick={() => setNumber(number + "4")}>4</td>
                <td className="table-data" onClick={() => setNumber(number + "5")}>5</td>
                <td className="table-data" onClick={() => setNumber(number + "6")}>6</td>
              </tr>
              <tr>
                <td className="table-data" onClick={() => setNumber(number + "7")} >7</td>
                <td className="table-data" onClick={() => setNumber(number + "8")} >8</td>
                <td className="table-data" onClick={() => setNumber(number + "9")} >9</td>
              </tr>
              <tr>
                <td className="table-data" onClick={() => setNumber(number + "*")} >*</td>
                <td className="table-data" onClick={() => setNumber(number + "0")} >0</td>
                <td className="table-data" onClick={() => setNumber(number + "#")} >#</td>
              </tr>
              <tr>
                <td className="table-data"  ></td>
                <td className="table-data"  > <TelephoneFill size={25} /> </td>
                <td className="table-data" onClick={() => setNumber(number.substring(0, number.length - 1))}  > <BackspaceFill size={25} /> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dialpad;
