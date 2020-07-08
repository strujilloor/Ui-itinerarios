import React from 'react';
import Sidebar from './Sidebar';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => {
    return ( 
        <>
            <Global 
                styles={css`
                    :root {
                        --green: #ACD038;
                        --white: #FFF;
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
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
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

            <Sidebar/>

            <main>
                { children }
            </main>
        </>
    );
}

export default Layout; 