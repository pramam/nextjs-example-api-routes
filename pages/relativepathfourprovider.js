import Provider from '../components/provider'

export default function RelativePathFourProvider() {

    // this goes /pages/api/subapi/[...relativePathThree].js
    return (
        <Provider
            providerName="Relative Path Four Provider"
            swrpath="/api/subapi/data/static/provider/A/B/C/fourdata.json5"
            comment="This tests `includeFiles=data/static/provider/A/**/*.json5` for `../A/B/C/fourdata.json5`"
        />
    )
}