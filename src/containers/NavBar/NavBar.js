import React from 'react'
import { Link } from 'react-router-dom'
import AlbumIcon from '@material-ui/icons/Album';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import './navbar.scss'

const NavBar = (props) => {
    return (
        <div className="navBarHome">
            <div className="navBarHeader">
                <div>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <p>Nick Stano</p>
                    </Link>
                </div>
                {props.user &&
                    <div>
                        <p onClick={() => props.setUser(null)}>Log Out</p>
                    </div>
                }
            </div>
            <div className="navBarMediaIcons" >
                <Link to="/albums" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <AlbumIcon className="mediaIcon" />
                        <p>albums</p>
                    </div>
                </Link>
                <Link to="/boards" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <DonutSmallIcon className="mediaIcon" />
                        <p>board games</p>
                    </div>
                </Link>
                <Link to="/books" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <MenuBookIcon className="mediaIcon" />
                        <p>books</p>
                    </div>
                </Link>
                <Link to="/movies" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <TheatersIcon className="mediaIcon" />
                        <p>movies</p>
                    </div>
                </Link>
                <Link to="/television" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <LiveTvIcon className="mediaIcon" />
                        <p>television</p>
                    </div>
                </Link>
                <Link to="/videos" onClick={() => window.scrollTo(0, 0)}>
                    <div className="mediaLink">
                        <VideogameAssetIcon className="mediaIcon" />
                        <p>video games</p>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default NavBar

