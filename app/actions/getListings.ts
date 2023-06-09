import prisma from '@/app/libs/prismadb';
export default function getListings() {
    try {

        const listings = prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return listings;
        
    } catch (error : any) {
        throw new Error(error);
    }
}