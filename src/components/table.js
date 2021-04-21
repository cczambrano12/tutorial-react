import { Card, CardContent, CardHeader, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";

function Table({ dataParam }) {
  console.log(dataParam);
  return (
    <Card>
      <CardHeader title="Promedios anuales" />
      <CardContent>
        <TableBody>
          <TableRow hover key="names">
            <TableCell align="center">POTENCIA NOMINAL [kW]</TableCell>
            <TableCell align="center">INCLINACIÓN [°]</TableCell>
            <TableCell align="center">LATITUD</TableCell>
            <TableCell align="center">LONGITUD</TableCell>
            <TableCell align="center">ENERGÍA PROMEDIO ANUAL</TableCell>
          </TableRow>
          {dataParam.map((item, index) => (
            <TableRow hover key={index}>
              <TableCell align="center">{`${item?.power || ""}`}</TableCell>
              <TableCell align="center">{`${item?.tilt || ""}`}</TableCell>
              <TableCell align="center">{`${item?.latitude || ""}`}</TableCell>
              <TableCell align="center">{`${item?.longitude || ""}`}</TableCell>
              <TableCell align="center">{`${
                item?.average_energy || ""
              }`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CardContent>
    </Card>
  );
}

export default Table;
