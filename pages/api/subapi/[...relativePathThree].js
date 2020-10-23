import * as JSON5 from 'json5';
import * as fs from "fs";
import path from 'path';

export default function relativePathThreeHandler({ query: { relativePathThree } }, res) {

    const dir = path.resolve('./');
    console.log(`pages/api/subapi/[...relativePathThree].js: dir: ${dir}`)

    // relativePath is in the format: [data, static, provider, A, B, C, xyz.json]

    //https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
    const subPath = decodeURI(relativePathThree.join('/'))


    const filePath = dir + '/' + subPath;
    console.log(`pages/api/subapi/[...relativePathThree].js: filePath: ${filePath}`)

    const raw = fs.readFileSync(filePath, "utf8");
    const metadata = JSON5.parse(raw);

    res.StatusCode = 200
    res.setHeader('Content-Type', 'application/json5')
    res.end(JSON.stringify(metadata))
}