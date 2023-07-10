import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import ActividadesClient from "./ActividadesClient";

type Props = {};

const ActividadesPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Por favor Iniciar sesión" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No se encontraron actividades"
          subtitle="Parece que no tienes ninguna actividad"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ActividadesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ActividadesPage;