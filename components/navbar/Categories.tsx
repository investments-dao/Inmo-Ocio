"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: 'Apartamento',
    icon: MdOutlineVilla,
    description: '¡Esta propiedad es moderna!'
  },
  {
    label: 'Piso',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Playa',
    icon: TbBeach,
    description: '¡Esta propiedad está cerca de la playa!',
  },
  {
    label: 'Rural',
    icon: TbMountain,
    description: 'Esta propiedad esta en zona rural'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Esqui',
    icon: FaSkiing,
    description: '¡Esta propiedad tiene actividades de esquí!'
  },
  {
    label: 'Piscinas',
    icon: TbPool,
    description: 'Esta es propiedad tiene una hermosa piscina.'
  },
  {
    label: 'Islas',
    icon: GiIsland,
    description: '¡Esta propiedad está en una isla!'
  },
  {
    label: 'Lago',
    icon: GiBoatFishing,
    description: '¡Esta propiedad está cerca de un lago!'
  },
  {
    label: 'Castillo',
    icon: GiCastle,
    description: '¡Esta propiedad es un antiguo castillo!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Molinos de viento',
    icon: GiWindmill,
    description: '¡Esta propiedad tiene molinos de viento!',
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Caserón',
    icon: GiBarn,
    description: '¡Esta propiedad está en un caserón!'
  }
];

type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            label={items.label}
            selected={category === items.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
