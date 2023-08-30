import EmptyState from "../Components/EmptyState";
import ClientOnly from "../Components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    };

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length == 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your Properties!"
                />
            </ClientOnly>
        )
    }

    return (
         <ClientOnly>
              <ReservationsClient
                   reservations={reservations}
                   currentUser={currentUser}
              />
         </ClientOnly>
    );
}

export default ReservationsPage;