import React from 'react'
import { Link } from 'react-router-dom'
import AlbumIcon from '@material-ui/icons/Album';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import './navbar.scss'

const NavBar = () => {

    return (
        <div className="navBarHome">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <p>Nick Stano</p>
            </Link>
            <div className="topNavbar" >
                <div className="mediaLink">
                    <Link to="/albums" onClick={() => window.scrollTo(0, 0)}>
                        <AlbumIcon />
                        <p>albums</p>
                    </Link>
                </div>
                <div className="mediaLink">
                    <Link to="/boards" onClick={() => window.scrollTo(0, 0)}>
                        <DonutSmallIcon />
                        <p>boardgames</p>
                    </Link>
                </div>
                <div className="mediaLink">
                    <Link to="/books" onClick={() => window.scrollTo(0, 0)}>
                        <MenuBookIcon />
                        <p>books</p>
                    </Link>
                </div>
                <div className="mediaLink">
                    <Link to="/movies" onClick={() => window.scrollTo(0, 0)}>
                        <TheatersIcon />
                        <p>movies</p>
                    </Link>
                </div>
                <div className="mediaLink">
                    <Link to="/television" onClick={() => window.scrollTo(0, 0)}>
                        <LiveTvIcon />
                        <p>television</p>
                    </Link>
                </div>
                <div className="mediaLink">
                    <Link to="/videos" onClick={() => window.scrollTo(0, 0)}>
                        <VideogameAssetIcon />
                        <p>videogames</p>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default NavBar

