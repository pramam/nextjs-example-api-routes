import useSWR from 'swr';
import Link from 'next/link';
import { fetchJson5 } from '../utils/fetcher';

export default function Provider(props) {
    const {
        providerName,
        swrpath,
        comment
    } = props;

    const epath = encodeURI(swrpath);

    console.log(`${providerName}: useSWR: encoded path: ${epath}`)
    const { data, error } = useSWR(epath, fetchJson5)

    if (error)
        return (
            <div>
                <Link href="/" as={"/"}>
                    <a>
                        Home
                </a>
                </Link>
                <h4> {comment} </h4>
                <h4> {providerName} Failed to Load </h4>
                {JSON.stringify(error)}
            </div>
        )
    if (!data)
        return (<div>Loading...</div>)

    return (
        <div>
            <Link href="/" as={"/"}>
                <a>
                    Home
                </a>
            </Link>
            <h1>
                {providerName}
            </h1>
            <h4>{comment}</h4>
            JSON5 file:<br /><br />
            {JSON.stringify(data)}
        </div>
    )
}