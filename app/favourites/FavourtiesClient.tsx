'use client';

import Container from "../Components/Container";
import Heading from "../Components/Heading";
import ListingCard from "../Components/listings/ListingCard";
import { SafeListings, SafeUser } from "../types";

interface FavouritesClientProps {
    listings: SafeListings[];
    currentUser?: SafeUser | null;
}

const FavourtiesClient: React.FC<FavouritesClientProps> = ({
    listings,
    currentUser
}) => {



  return (
       <Container>
           <Heading 
               title="Favourites"
               subtitle="Lists of places you have Favourited!"
           /> 

           <div className="
               grid
               grid-cols-1
               sm:grid-cols-2
               md:grid-cols-3
               lg:grid-cols-4
               xl:grid-cols-5
               2xl:grid-cols-6
               mt-10
               gap-8
           ">
              { listings.map((listing) => (
                   <ListingCard 
                       currentUser={currentUser}
                       key={listing.id}
                       data={listing}
                   />
              )) }
           </div>


       </Container>
  )
}

export default FavourtiesClient