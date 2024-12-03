import { promises as fs } from 'fs';
import { csvParse } from 'd3';
import { FishItem } from '@/lib/definition';
const csv_file_path: string = './data/Popsicle.csv';

export async function GET() {
    const fileContent = await fs.readFile(csv_file_path, 'utf-8');

    const data: d3.DSVParsedArray<FishItem> = csvParse(
        fileContent,
        (d: d3.DSVRowString<string>) => ({
            site: d['Site'] || '',
            projet: d['Projet'] || '',
            noPoisson: d['No_Poisson'] || '',
            noPecheur: d['No_pêcheur'] || '',
            dateCapture: d['Date_capture'] || '',
            monthCapture: d['Month_capture'] || '',
            datePrelev: d['Date_prelev'] || '',
            positionCapture: d['Position_capture'] || '',
            espece: d['Espece'] || '',
            codeFAO: d['Code_FAO'] || '',
            codeBarrePoisson: d['CODE_BARRE_Poisson'] || '',
            refPhoto: d['REF_PHOTO'] || '',
            typeDePoids: d['Type de poids'] || '',
            poidsEntierKg: d['Poids_entier(kg)'] ? +d['Poids_entier(kg)'] : 0,
            typeTaille: d['Type_Taille'] || '',
            tailleMesureCm: d['Taille_mesure(cm)']
                ? +d['Taille_mesure(cm)']
                : 0,
            sexe: d['Sexe'] || '',
            maturity: d['Maturity'] || '',
            maturiteAD: d['Maturité_A_D'] || '',
            poidsGonadesG: d['Poids_gonades(g)'] ? +d['Poids_gonades(g)'] : 0,
            noOtolithes: d['No_Otolithes'] || '',
            noReferenceOtolithes: d['No_reference_otolithes'] || '',
            profondeurCapture: d['Profondeur_Capture']
                ? +d['Profondeur_Capture']
                : 0,
            commentaires: d['Commentaires'] || '',
            prelevPar: d['Prelev_par'] || '',
            stockage: d['Stockage'] || '',
        })
    );
    return Response.json({ data });
}
