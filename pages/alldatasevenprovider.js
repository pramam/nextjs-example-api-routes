import Provider from '../components/provider'

export default function AllDataSevenProvider() {

    // this goes /pages/api/subapi2/[...allDataSeven].js
    // with the following in vercel.json:
    // "pages/api/subapi2/[...allDataSeven].js": {
    //     "includeFiles": "data2/**"
    // }
    return (
        <Provider
            providerName="All Data Seven Provider"
            swrpath="/api/subapi2/data2/static/provider/A/B/sevendata.json5"
            comment="This tests if `data2/**` works as `includeFiles` in vercel.json"
        />
    )
}