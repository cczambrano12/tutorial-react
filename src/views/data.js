import React from "react";
import Axios from "axios";
import {useState, useEffect} from 'react'

function Data() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://127.0.0.1:8000/energy/data",
    })
      .then((response) => {
        console.log('ok')
        setList(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="Data">
      <div>
        <table>
          <tbody>
          <tr>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Energía promedio anual</th>
          </tr>
          {list.map((item, index) => (
            <tr>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.average_energy}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
