import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import Axios from "axios";

function Form() {
  const [valorLat, setValorLat] = useState();
  const [valorLon, setValorLon] = useState();
  const [valorTilt, setValorTilt] = useState();
  const [valorPower, setValorPower] = useState();

  const onSubmit = () => {
    Axios.get("http://127.0.0.1:8000/energy/new", {
      params: { 
          lat: valorLat, 
          lon: valorLon, 
          tilt: valorTilt,
          power: valorPower
        }
    });
  };

  const handleChangePower = (e) => {
    setValorPower(e.target.value);
  };
  const handleChangeLat = (e) => {
    setValorLat(e.target.value);
  };
  const handleChangeLon = (e) => {
    setValorLon(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
        <TextField
          label="Potencia nominal panel (kW)"
          variant="outlined"
          onChange={handleChangePower}
        />
      <TextField
        label="Latitud"
        variant="outlined"
        onChange={handleChangeLat}
      />
      <TextField id="outlined-helperText" label="Longitud" variant="outlined" onChange={handleChangeLon}/>
      {/* Reemplazar TextFIeld por input */}
      <TextField
        label="Inclinación"
        variant="outlined"
        onChange={(e) => {setValorTilt(e.target.value)}}
      />
      <div style={{ margin: "auto", marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Consultar
        </Button>
      </div>
    </form>
  );
}

export default Form;
