import type { NextApiRequest } from 'next';
import prisma from '../../../prisma/client'

export async function GET(request:NextApiRequest) {
    const data = await prisma.projectdata.findMany()
    return new Response(JSON.stringify(data));
}
