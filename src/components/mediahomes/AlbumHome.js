import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function AlbumHome() {

    const mediaNames = ["Computerwelt", "Safe as Milk", "Arthur", "The Lamb Lies Down on Broadway", "Hot Rats"]

    const mediaIntro = "Chris Jericho defines a perfect album as one where every song is an A or better. I believe a perfect album is an album that you throw on and have a desire to skip no tracks. I guess that's the same thing."

    return (
        HomeTemplate(mediaNames, photos.albums, "Albums", mediaIntro)
    )
}