import React from 'react'
import photos from '../../photos/favorites'

export default function BookHome() {
    let favoriteFive = photos.books.map((book, index) =>
        <div className="mediaFavoriteFiveSingle" key={book}>
            <img src={book} alt={book} />
        </div>)
    return (
        <div>
            <div className="mediaHome">
                <h1 className="mediaHeader font-weight-light">Favorite Books</h1>
                <div className="mediaFavoriteFive">{favoriteFive}</div>
                <p>I have revisited the Harry Potter franchise too many times as well as the Enderverse. I know there are plenty of great titles out there that I haven't read.</p>
                <p>1) The longest Harry Potter happens to be the best. Has the best villain of the series and Dumbledore shows us he is human by making poor judgments with Harry. Dumbledore escaping in his office is one of my favorite sequences.  Fred and George are hilarious in the books and get their best moments here.</p>
                <p>2) Took me a while to get into this book but I enjoy it more than Ender's Game. The Ribeira family gives us a set of 7 new unique characters who end up playing at least a small role. The chapter when Ender speaks for Marcos is the best. Finally, the reveal of the pequeninos life cycle is the right amount of strange Sci-Fi for me.</p>
                <p>3) I always enjoy revisiting the reveals in Chamber of Secrets. Each book in the franchise does cool reveals at the end and this was one of my favorites. The anagram of Tom Marvolo Riddle and I Am Lord Voldemort is a scene that still makes me shiver as well as the giant Basilisk traveling through Hogwarts.</p>
                <p>4) I love how much higher the stakes are in this book. We get a chapter on professional Quidditch and I think Rowling does an excellent job describing the sport at the World Cup. Fun reveals at the end with Crouch and Voldemort is back baby!</p>
                <p>5) This retelling of Ender's Game from the perspective of Bean really hooked me on the Enderverse. The other novels in the Bean series are great as they continue the stories of characters first introduced in Ender's Game.The thing that bothered me about Speaker at first was a completely new cast that took place 3,000 years in the future. Cool to get closure on Ender's jeesh.</p>
            </div>
        </div>
    )
}
