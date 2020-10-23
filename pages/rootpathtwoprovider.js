import Provider from '../components/provider'

export default function RootPathTwoProvider() {

    // this goes /pages/api/[...rootPathTwo].js
    return (
        <Provider
            providerName="Root Path Two Provider"
            swrpath="/api/data/twodata.json5"
        />
    )
}

