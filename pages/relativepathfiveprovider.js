import Provider from '../components/provider'

export default function RelativePathFiveProvider() {

    // this goes /pages/api/subapi/[...relativePathThree].js
    return (
        <Provider
            providerName="Relative Path Five Provider"
            swrpath="/api/subapi/data/static/provider/A/B/C/@D/fivedata.json5"
            comment="This tests if @ works in a directory name"
        />
    )
}
