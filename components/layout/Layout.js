import React from 'react';

const Layout = ({ children }) => {
    return ( 
        <>
            <aside>
                <h1>SideBar</h1>
            </aside>

            <main>
                { children }
            </main>
        </>
    );
}

export default Layout; 