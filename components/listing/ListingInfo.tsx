"use client";

import useCountries from "@/hook/useCountries";
import { SafeUser } from "@/types";
import dynamic from "next/dynamic";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import Sleep from "../Sleep";
import Offers from "../Offers";

const Map = dynamic(() => import("../1-Map"), {
  ssr: false,
});

type Props = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
};

function ListingInfo({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: Props) {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className=" text-xl font-semibold flex flex-row items-center gap-2">
          <div>Publicado por {user?.name}</div>
          <Avatar src={user?.image} userName={user?.name} />
        </div>
        <div>Contacto {user?.email}</div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <p>{guestCount} Personas</p>
          <p>{roomCount} Habitaciones</p>
          <p>{bathroomCount} Baños</p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-[#FF5A5F]">
          InmoOcio<span className="text-black">Cobertura</span>
        </p>
        <p className="text-neutral-500 pt-3">
        Cada reserva incluye protección gratuita contra cancelaciones del Anfitrión, 
        inexactitudes en los listados y otros problemas, como problemas para registrarse.
        </p>
        <p className="text-black font-bold underline pt-3 cursor-pointer">
          Aprende más
        </p>
      </div>
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      <Sleep />
      <hr />
      <Offers />
      <hr />
      <div >
      <p className="text-xl font-semibold">{`¿Donde estarás?`}</p>
      <Map />
      </div>
      
    </div>
  );
}

export default ListingInfo;
