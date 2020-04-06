import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function TVShowHome() {

    const mediaNames = ["Whose Line Is It Anyway", "The Simpsons", "Flight of the Conchords", "Parks and Recreation", "Entourage"]

    const mediaIntro = "Committing to TV is challenging for me. I cannot say I have good taste or have explored shows that I know most poeple have seen. Gave up on Game of Thrones after Season 3."


    return (
        HomeTemplate(mediaNames, photos.tvShows, "TV Shows", mediaIntro)
    )
}