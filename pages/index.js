import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div class="container">
      <Head>
        <title>API Routes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>
          Testing catch all API routes with SWR
        </h3>

        <p class="description">
          This example repo tests if catch all API routes can fetch data from the server located in "/data".

          Each example fetches the data file using the API route in the table.
          The directory /data should be copied to the deployment server root based on the <code>vercel.json</code> file in the repo.
          If you see a json5 file in each example, then it has worked.
        </p>

        <table>
          <tr>
            <th>Example</th>
            <th>API Route</th>
            <th>Path to data</th>
            <th>includeFiles=</th>
          </tr>
          <tr>
            <td>
              <Link href="/pages/oneprovider" as={"/oneprovider"}>
                <a>
                  Example One
                </a>
              </Link>
            </td>
            <td>
              pages/api/one.js
            </td>
            <td>
              data/static/provider/onedata.json5
            </td>
            <td>
              data/static/provider/onedata.json5
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/pages/rootpathtwoprovider" as={"/rootpathtwoprovider"}>
                <a>
                  Example Two
                </a>
              </Link>
            </td>
            <td>
              pages/api/[...rootPathTwo].js
            </td>
            <td>
              data/twodata.json5
            </td>
            <td>
              data/twodata.json5
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/pages/relativepaththreeprovider" as={"/relativepaththreeprovider"}>
                <a>
                  Example Three
                </a>
              </Link>
            </td>
            <td>
              pages/api/subapi/[...relativePathThree].js
            </td>
            <td>
              data/static/provider/A/B/threedata.json5
            </td>
            <td>
              data/static/provider/A/**/*.json5
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/pages/relativepathfourprovider" as={"/relativepathfourprovider"}>
                <a>
                  Example Four
                </a>
              </Link>
            </td>
            <td>
              pages/api/subapi/[...relativePathThree].js
            </td>
            <td>
              data/static/provider/A/B/C/fourdata.json5
            </td>
            <td>
              data/static/provider/A/**/*.json5
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/pages/relativepathfiveprovider" as={"/relativepathfiveprovider"}>
                <a>
                  Example Five
                </a>
              </Link>
            </td>
            <td>
              pages/api/subapi/[...relativePathThree].js
            </td>
            <td>
              data/static/provider/A/B/C/@D/fivedata.json5
            </td>
            <td>
              data/static/provider/A/**/*.json5
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/pages/hardcodedsixprovider" as={"/hardcodedsixprovider"}>
                <a>
                  Example Six
                </a>
              </Link>
            </td>
            <td>
              pages/api/six.js
            </td>
            <td>
              data/static/sixdata.json5
            </td>
            <td>
              -
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/pages/alldatasevenprovider" as={"/alldatasevenprovider"}>
                <a>
                  Example Seven (added 10/26/2020)
                </a>
              </Link>
            </td>
            <td>
              pages/api/subapi2/[...allDataSeven].js
            </td>
            <td>
              data2/static/provider/A/B/sevendata.json5
            </td>
            <td>
              data2/**
            </td>
          </tr>

        </table>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: blue;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        table, th, td {
          border: 1px solid black;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
