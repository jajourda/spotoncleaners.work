import * as React from 'react';
// import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export interface ILayoutProps {
}

export default function Layout({ children }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow">
            <Navbar />
            {/* <Header /> */}
            <main className="flex flex-col items-center justify-center w-full flex-1 p-0 text-center">{children}</main>
            <Footer />
        </div>
    );
}
