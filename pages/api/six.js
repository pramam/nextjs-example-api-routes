import * as JSON5 from 'json5';
import * as fs from "fs";
import path from 'path';

export default function sixHandler(req, res) {

    const dir = path.resolve('./');
    console.log(`pages/api/six.js : dir: ${dir}`)

    const filePath = dir + "/data/static/sixdata.json5";
    console.log(`/pages/api/six.js: filePath: ${filePath}`)

    const raw = fs.readFileSync(filePath, "utf8");
    const metadata = JSON5.parse(raw);

    res.StatusCode = 200
    res.setHeader('Content-Type', 'application/json5')
    res.end(JSON.stringify(metadata))
}