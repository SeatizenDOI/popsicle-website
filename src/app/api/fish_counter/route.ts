import { promises as fs } from 'fs';
const csv_file_path: string = './data/Popsicle.csv';

export async function GET() {
    const fileContent = await fs.readFile(csv_file_path, 'utf-8');
    const fish_number = fileContent.split('\n').length;
    return Response.json({ fish_number });
}
