import React from 'react';
import Sidebar from './Sidebar';
import { Global, css } from '@emotion/core';
import Head from 'next/head';

const Layout = ({ children }) => {
    return ( 
        <>
            <Global 
                styles={css`
                    :root {
                        --green: #ACD038;
                        --white: #FFF;
                        --gray: #3d3d3d;
                        --gray2: #6F6F6F;
                        --gray3: #e1e1e1;
                        --red: #BF3230;
                        --orange: #DA552F;
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem; /* ...16px  */
                        line-height: 1.5;
                        font-family: 'Titillium Web', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-weight: 700;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                    a {
                        text-decoration: none;
                    }

                `}
            />

            <Head>
                <html lang="es" />
                <title>UI Itinerarios</title>
                {/* Normalize */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;700&display=swap" rel="stylesheet" />
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>

            <Sidebar/>

            <main>
                { children }
            </main>
        </>
    );
}

export default Layout; 