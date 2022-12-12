import React from 'react';
import NavBar from "../NavBar/NavBar";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;