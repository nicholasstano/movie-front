import React from 'react'

function MediaSearch(props) {
    let text = function () {
        return `Search ${props.mediaName}`
    }

    return (
        <div className="mediaReviewSearch">
            <form onSubmit={(event) => event.preventDefault()}>
                <input type="text" className="mediaReviewSearchBox font-weight-light" placeholder={text()} onChange={(event) => { props.onChange(event.target.value) }} />
            </form>
        </div>
    )
}

export default MediaSearch