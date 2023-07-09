"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState("España");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOOKUP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">ACERCA DE</h5>
          <p>Sala de prensa</p>
           <p>Más información sobre las nuevas funciones</p>
           <p>Carta de nuestros fundadores</p>
           <p>Carreras</p>
           <p>Inversores</p>
        </motion.div>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">Soporte</h5>
           <p>Centro de ayuda</p>
           <p>Cubierta de aire</p>
           <p>Opciones de cancelación</p>
           <p>Información de seguridad</p>
           <p>Informar una inquietud del vecindario</p>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">Comunidad</h5>
           <p>Inmo-Ocio </p>
           <p>Web</p>
           <p>Twitter</p>
           <p>Docs</p>
           <p>Investments-Dao</p>
        </motion.div>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">Alojamiento</h5>
           <p>Prueba de hospedaje</p>
           <p>AirCover para anfitriones</p>
           <p>Explore los recursos de alojamiento</p>
           <p>Cómo hospedar responsablemente</p>
        </motion.div>
        <p className="text-sm">{country}</p>
      </div>
    </ClientOnly>
  );
}

export default Footer;
