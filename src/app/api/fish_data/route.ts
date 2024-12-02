import { promises as fs } from 'fs';
import * as d3 from 'd3';
import { FishItem } from '@/lib/definition';
const csv_file_path: string = './data/Popsicle.csv';

export async function GET() {
    const fileContent = await fs.readFile(csv_file_path, 'utf-8');

    const data: d3.DSVParsedArray<FishItem> = d3.csvParse(
        fileContent,
        (d: d3.DSVRowString<string>) => ({
            site: d['Site'] || '',
            projet: d['Projet'] || '',
            noPoisson: d['No_Poisson'] || '',
            bateau: d['Bateau'] || '',
            noImmatriculation: d['No_Immatriculation'] || '',
            dateCapture: d['Date_capture'] || '',
            mouthCapture: d['Mouth_capture'] || '',
            datePrelev: d['Date_prelev'] || '',
            positionCapture: d['Position_capture'] || '',
            latitudeCapture: d['Latitude_capture'] ? +d['Latitude_capture'] : 0,
            longitudeCapture: d['Longitude_capture']
                ? +d['Longitude_capture']
                : 0,
            espece: d['Espece'] || '',
            codeFAO: d['Code_FAO'] || '',
            codeBarrePoisson: d['CODE_BARRE_Poisson'] || '',
            refPhoto: d['REF_PHOTO'] || '',
            typeDePoids: d['Type de poids'] || '',
            poidsEntier: d['Poids_entier'] ? +d['Poids_entier'] : 0,
            poidsEstimer: d['Poids_estimer'] ? +d['Poids_estimer'] : 0,
            typeTaille: d['Type_Taille'] || '',
            taille: d['Taille'] ? +d['Taille'] : 0,
            sexe: d['Sexe'] || '',
            maturiteAD: d['Maturité_A_D'] || '',
            maturity: d['Maturity'] || '',
            poidsGonades: d['Poids_gonades'] ? +d['Poids_gonades'] : 0,
            typeTissu: d['Type_tissu'] || '',
            etiquetteTissusProjetOrigine:
                d['Etiquette tissus projet origine'] || '',
            noEchantillonFinclip: d['No_echantillon_Finclip'] || '',
            extractionADN: d['Extraction ADN'] || '',
            etiquetteGenetiqueADN: d['Etiquette Génétique (ADN)'] || '',
            adnConcentration: d['[ADN] ng/µL (nageoire)']
                ? +d['[ADN] ng/µL (nageoire)']
                : 0,
            contaminantsChair: d['contaminants_chair'] || '',
            contaminantsFoie: d['contaminants_foie'] || '',
            otolithe: d['Otolithe'] || '',
            poidsOtolithesGauche: d['Poids_otolithes gauche (g)']
                ? +d['Poids_otolithes gauche (g)']
                : 0,
            poidsOtolithesDroit: d['Poids_otolithes droit (g)']
                ? +d['Poids_otolithes droit (g)']
                : 0,
            noReferenceOtolithes: d['No_reference_otolithes'] || '',
            noEchantillonStomacal: d['No_echantillon_stomacal'] || '',
            noEchantillonMuscle: d['No_echantillon_muscle'] || '',
            commentaires: d['Commentaires'] || '',
            prelevPar: d['Prelev_par'] || '',
            stockage: d['Stockage'] || '',
        })
    );
    return Response.json({ data });
}
