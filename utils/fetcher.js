import JSON5 from 'json5';

export const fetchJson5 = async (url) => {
    console.log(`fetchJson5: url: ${url}`)
    return JSON5.parse(await (await fetch(url)).text());
};
