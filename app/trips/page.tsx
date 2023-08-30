import EmptyState from "../Components/EmptyState";
import ClientOnly from "../Components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
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
    }

    const reservation = await getReservations({
        userId: currentUser.id
    });

    if (reservation.length == 0) {
        return (
            <ClientOnly>
                <EmptyState 
                   title="No trips Found"
                   subtitle="Looks like you have'nt reserved any trips!"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservation}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}


export default TripsPage;