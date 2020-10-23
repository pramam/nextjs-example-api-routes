import Provider from '../components/Provider'

export default function RelativePathThreeProvider() {

    // this goes /pages/api/subapi/[...relativePathThree].js
    return (
        <Provider
            providerName="Relative Path Three Provider"
            swrpath="/api/subapi/data/static/provider/A/B/threedata.json5"
        />
    )
}