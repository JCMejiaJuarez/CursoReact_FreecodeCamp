import React from "react";
import "../hojas-de-estilo/Pantalla.css"
//Esta sintaxis se puede usar en componentes sencillos
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;