import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    //const path = window.location.pathname
    return <nav className="nav">
        <Link to="/Home" className="site-title">
            DreamDrive
            {/*<div class="logo-image">
                <img src="dreamdrive-logo.jpg" class="img-fluid"></img>
            </div>*/}
        </Link>
        <ul>
            
            <CustomLink to="/dreamform">New Dream</CustomLink>
            <CustomLink to="/viewlogs">Logs</CustomLink>
            <CustomLink to="/viewstats">Stats</CustomLink>
            <CustomLink to="/LogoutPage">Logout</CustomLink>
            <CustomLink to="/UserProfile">User profile</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    //const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}