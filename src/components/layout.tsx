import * as React from 'react'
import Navbar from './navbar'

interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
        <div>
            <Navbar />
            <main>
                <div className='text-center'>
                    <h1>{pageTitle}</h1>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
