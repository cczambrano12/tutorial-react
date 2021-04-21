import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import Table from "../components/table";
import Chart from "../components/chart";
import { Grid } from "@material-ui/core";

function Data() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      method: 'get',
      url: "http://127.0.0.1:8000/energy/data",
    })
      .then((response) => {
        console.log("ok");
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Table dataParam={list} />
      </Grid>
      <Grid item xs={6}>
        <Chart dataParam={list} />
      </Grid>
    </Grid>
  );
}

export default Data;
