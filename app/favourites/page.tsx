import EmptyState from "../Components/EmptyState";
import ClientOnly from "../Components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavouritesListing from "../actions/getFavouriteListings";
import FavourtiesClient from "./FavourtiesClient";

const ListingPage = async () => {
  const listings = await getFavouritesListing();
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites found!"
          subtitle="Looks like you have no favourite listings."
        />
      </ClientOnly>
    );
  }

    return (
        <ClientOnly>
             <FavourtiesClient 
                 listings={listings}
                 currentUser={currentUser}
             /> 
        </ClientOnly>
    )


};

export default ListingPage;
