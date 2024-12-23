import { promises as fs } from 'fs';
import { csvParse } from 'd3';
import { FisherRank } from '@/lib/definition';
const csv_file_path: string =
    process.env.NODE_ENV === 'production'
        ? process.env.PROD_PATH + '/data/Classement.csv'
        : './data/Classement_test.csv';

export async function GET() {
    const fileContent = await fs.readFile(csv_file_path, 'utf-8');

    const data: d3.DSVParsedArray<FisherRank> = csvParse(
        fileContent
            .split('\r\n')
            .filter((f) => f !== '')
            .join('\r\n'),
        (d: d3.DSVRowString<string>) => ({
            rank: d['Rang']
                ? +d['Rang'].replace('er Place', '').replace('ème Place', '')
                : 0,
            pseudo: d['Pseudo'] || '',
            nbPoint: d['Nombre de point'] ? +d['Nombre de point'] : 0,
        })
    );
    return Response.json({ data });
}
