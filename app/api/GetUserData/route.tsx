import type { NextApiRequest } from 'next';
import prisma from '../../../prisma/client'

export async function GET(request:NextApiRequest) {
    const data = await prisma.userdata.findFirst();
    return new Response(JSON.stringify(data));
}
