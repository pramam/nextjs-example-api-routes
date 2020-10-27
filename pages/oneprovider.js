import Provider from '../components/provider'

export default function OneProvider() {

    // This goes to /pages/api/one.js
    return (
        <Provider
            providerName="One Provider"
            swrpath="/api/one?urlpath=/data/static/provider/onedata.json5"
            comment="This tests if the path can be passed as a query"
        />
    )
}