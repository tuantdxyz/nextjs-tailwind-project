import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            console.log("METHOD");
            await handleGet(req, res);
            break;
        case 'PUT':
            await handlePut(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const jsonData = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(jsonData);
    res.status(200).json(data.discountCodes);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
    const { code, usedCount } = req.body;
    const jsonData = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(jsonData);
    if (data.discountCodes[code]) {
        data.discountCodes[code].used = usedCount;
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
        res.status(200).json(data.discountCodes[code]);
    } else {
        res.status(404).json({ message: 'Discount code not found' });
    }
}