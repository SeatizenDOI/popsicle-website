import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import Aled from '@/app/lib/actions';

export default async function GetImage({ image_name }: { image_name: string }) {
    console.log('image_name', image_name);
    await Aled();

    return <></>;
}
