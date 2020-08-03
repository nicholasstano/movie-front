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
                <Link to="/albums" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <AlbumIcon />
                        <p>albums</p>
                    </div>
                </Link>
                <Link to="/boards" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <DonutSmallIcon />
                        <p>boardgames</p>
                    </div>
                </Link>
                <Link to="/books" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <MenuBookIcon />
                        <p>books</p>
                    </div>
                </Link>
                <Link to="/movies" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <TheatersIcon />
                        <p>movies</p>
                    </div>
                </Link>
                <Link to="/television" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <LiveTvIcon />
                        <p>television</p>
                    </div>
                </Link>
                <Link to="/videos" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <VideogameAssetIcon />
                        <p>videogames</p>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default NavBar

