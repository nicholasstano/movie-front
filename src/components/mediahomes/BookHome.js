import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function BookHome() {

    const mediaNames = ["Harry Potter and the Order of the Phoenix", "Speaker for the Dead", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Goblet of Fire", "Ender's Shadow"]

    const mediaIntro = "I have revisited the Harry Potter franchise too many times as well as the Enderverse. I know there are plenty of great titles out there that I haven't read."

    return (
        HomeTemplate(mediaNames, photos.books, "Books", mediaIntro)
    )
}