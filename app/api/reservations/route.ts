import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST (
    requset: Request
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await requset.json();

    const {
        listingId,
        startDate,
        entDate,
        totalPrice
    } = body;

    if (!listingId || !startDate || !entDate || !totalPrice) {
        return NextResponse.error();
    }

    const ListingAndReservation = await prisma.listing.update({
        where: {
            id: listingId
        },
        data: {
            reservations: {
                create: {
                    userId: currentUser.id,
                    startDate,
                    entDate,
                    totalPrice
                }
            }
        }
    });

    return NextResponse.json(ListingAndReservation);

}