import * as JSON5 from 'json5';
import * as fs from "fs";
import path from 'path';

export default function allDataSevenHandler({ query: { allDataSeven } }, res) {

    const dir = path.resolve('./');
    console.log(`pages/api/subapi2/[...allDataSeven].js: dir: ${dir}`)

    // allDataPath is in the format: [data7, static, provider, A, B, C, xyz.json]

    //https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
    const subPath = decodeURI(allDataSeven.join('/'))


    const filePath = dir + '/' + subPath;
    console.log(`pages/api/subapi2/[...allDataSeven].js: filePath: ${filePath}`)

    const raw = fs.readFileSync(filePath, "utf8");
    const metadata = JSON5.parse(raw);

    res.StatusCode = 200
    res.setHeader('Content-Type', 'application/json5')
    res.end(JSON.stringify(metadata))
}