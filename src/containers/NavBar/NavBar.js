import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AlbumIcon from '@material-ui/icons/Album';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { logout } from '../../components/actions/userActions'
import './navbar.scss'

const NavBar = (props) => {

    const { user } = props.user

    return (
        <div className="navBarHome">
            <div className="navBarHeader">
                <div>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <p>Nick Stano</p>
                    </Link>
                </div>
                {user &&
                    <div>
                        <p onClick={() => props.logout()}>Log Out</p>
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

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { logout })(NavBar)