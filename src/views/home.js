import React from "react";
import Form from "../components/form";

function Home() {
  return (
    <>
      <div className="Home">
        <div>
          <h1>INICIO</h1>
          <p>
            Consulte datos estimados de generación de energía solar por
            ubicación para una inclinación de panel dada
          </p>
        </div>
      </div>
      <Form />
    </>
  );
}

export default Home;
