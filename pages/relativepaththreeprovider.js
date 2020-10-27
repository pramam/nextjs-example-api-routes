import Provider from '../components/provider'

export default function RelativePathThreeProvider() {

    // this goes /pages/api/subapi/[...relativePathThree].js
    return (
        <Provider
            providerName="Relative Path Three Provider"
            swrpath="/api/subapi/data/static/provider/A/B/threedata.json5"
            comment="This tests `includeFiles=data/static/provider/A/**/*.json5` for `../A/B/threedata.json5`"
        />
    )
}