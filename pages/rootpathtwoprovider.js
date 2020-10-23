import Provider from '../components/Provider'

export default function RootPathTwoProvider() {

    // this goes /pages/api/[...rootPathTwo].js
    return (
        <Provider
            providerName="Root Path Two Provider"
            swrpath="/api/data/twodata.json5"
        />
    )
}

