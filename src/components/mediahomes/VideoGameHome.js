import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function VideoGameHome() {

    const mediaNames = ["Warcraft III The Frozen Throne", "Super Mario 64", "GoldenEye 007", "Baldur's Gate", "Sonic the Hedgehog"]

    const mediaIntro = "I enjoy a good story and fun play through preferably that can be done over the course of a few hours. I struggle with the grindy style game where my addictive personality has me playing too much. In general I prefer RTS genre though I've played very few of them, as well as a classic 2D side scroller."

    return (
        HomeTemplate(mediaNames, photos.videoGames, "Video Games", mediaIntro)
    )
}