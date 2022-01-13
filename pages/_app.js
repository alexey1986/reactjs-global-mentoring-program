import React from 'react';
import Head from 'next/head'
import { wrapper } from '@src/store'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Movie Cloud</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(App)
