import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import logo from "../img/logo.png"

interface NavbarItemProps {
    itemLink: string;
    content: React.ReactNode;
    isActive: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({itemLink, content, isActive}) => {
    return (
        <Link 
            to={itemLink} 
            className={`text-white mr-4 p-2 rounded text-center transform transition-transform duration-500 ${isActive ? 'bg-rose-900' : 'hover:bg-rose-700'} hover:scale-110`}
        >
            {content}
        </Link>
    )
}

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="flex flex-wrap bg-rose-800 p-3 justify-between shadow-dark-mild fixed top-0 w-full">
            <div className='container mx-auto flex justify-between'>
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt='Website Logo' className="h-12 w-auto object-contain rounded transform transition-transform duration-500 hover:scale-110" loading="lazy" />
                    </Link>
                    <span className="ml-3 text-white text-xl font-bold">Chris Pitre</span>
                </div>
                <div className="flex items-center">
                    <NavbarItem itemLink="/" content="Home" isActive={location.pathname === '/'} />
                    <NavbarItem itemLink="/about" content="About Me" isActive={location.pathname === '/about/'} />
                    <NavbarItem itemLink="/projects" content="Projects" isActive={location.pathname === '/projects/'} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar