"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { GiBoatFishing, GiForestCamp, GiIsland, GiParachute, GiHealthPotion } from "react-icons/gi";

import { MdSportsMotorsports, MdOutlineWater, MdOutlineBusiness, MdRestaurant, MdTwoWheeler, MdSnowboarding, MdOutlineNightlife, MdHiking, MdQueueMusic, MdSynagogue } from "react-icons/md";
import { TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const activicateg = [
  {
    label: 'Agua',
    icon: MdOutlineWater,
    description: 'Deportes Acuáticos'
  },
  {
    label: 'Aire',
    icon: GiParachute,
    description: 'Deportes Aéreos'
  },
  {
    label: 'Multiaventura',
    icon: MdHiking,
    description: 'Puenting, Rutas a Caballo, Visitas Guiadas, etc'
  },
  {
    label: 'Deportes a Motor',
    icon:  MdSportsMotorsports,
    description: 'Quads, Karting, Buggies, Rutas 4x4, etc'
  },
  {
    label: 'Nieve',
    icon: MdSnowboarding,
    description: 'Esqui, Snowboard, Motos de Nieve, etc'
  },
  {
    label: 'Campamentos',
    icon: GiForestCamp,
    description: 'Multiaventura, Fútbol, Surf, Urbanos, etc'
  },
  {
    label: 'Parque Temáticos',
    icon: TbPool,
    description: 'Acuáticos, Tirolina, Infantiles, Atracciones, Zoológicos, etc'
  },
  {
    label: 'Despedidas de Solter@s',
    icon: GiIsland,
    description: 'Pensadas para celebrar la despedida'
  },
  {
    label: 'Empresas',
    icon: MdOutlineBusiness,
    description: 'Actividades pensadas para empresas'
  },
  {
    label: 'Restaurantes',
    icon: MdRestaurant,
    description: 'Ofrece tu carta a los comensales'
  },
  {
    label: 'Bailar',
    icon: MdOutlineNightlife,
    description: 'Discotecas, Bares Musicales, Viestas en Barco, etc'
  },
  {
    label: 'Navegar',
    icon: GiBoatFishing,
    description: 'Pesca, Alquiler, Cruceros'
  },
  {
    label: 'Alquileres',
    icon: MdTwoWheeler,
    description: 'Bicicletas, Segway, Tablas de Surf, Barcos'
  },
  {
    label: 'Bienestar',
    icon: GiHealthPotion,
    description: 'SPA'
  },
  {
    label: 'Conciertos',
    icon: MdQueueMusic,
    description: 'Actuaciones en directo'
  },
  {
    label: 'Infantiles',
    icon: MdSynagogue,
    description: 'Parques infantiles, etc'
  }
];

type Props = {};

function ActiviCateg({}: Props) {
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
        {activicateg.map((items, index) => (
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

export default ActiviCateg;







                                                                                                                                                                        
                                