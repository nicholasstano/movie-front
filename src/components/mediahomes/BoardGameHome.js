import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function BoardGameHome() {

    const mediaNames = ["Terra Mystica", "Concordia", "Dominion", "Seven Wonders", "Power Grid"]

    const mediaIntro = "Big thanks for Juho Snellman for his online implementation of Terra Mystica. Shoutouts to Matt, Tim, Frank, Paul, and Mike for continuing to entertain me by playing head to head contests."

    return (
        HomeTemplate(mediaNames, photos.boardGames, "Board Games", mediaIntro)
    )
}