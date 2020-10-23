import Provider from '../components/Provider'

export default function OneProvider() {

    // This goes to /pages/api/one.js
    return (
        <Provider
            providerName="One Provider"
            swrpath="/api/one?urlpath=/data/static/provider/onedata.json5"
        />
    )
}