import { promises as fs } from 'fs';
const csv_file_path: string =
    process.env.NODE_ENV === 'production'
        ? './data/Popsicle.csv'
        : './data/Popsicle_test.csv';

export async function GET() {
    const fileContent = await fs.readFile(csv_file_path, 'utf-8');

    const fish_number = fileContent
        .split('\r\n')
        .slice(1)
        .filter((f) => f !== '').length;
    return Response.json({ fish_number });
}
