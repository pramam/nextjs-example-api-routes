import Provider from '../components/Provider'

export default function SixProvider() {

    // This goes to /pages/api/six.js
    return (
        <Provider
            providerName="Six Provider"
            swrpath="/api/six"
            comment="Hard code the path to show data is accessible from resolved ./ on the server"
        />
    )
}