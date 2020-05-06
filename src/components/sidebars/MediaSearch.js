import React from 'react'

function MediaSearch(props) {
    let text = function () {
        return `Search ${props.mediaName}`
    }

    return (
        <div className="mediaSearch">
            <form onSubmit={(event) => event.preventDefault()}>
                <input type="text" className="mediaSearchBox" placeholder={text()} onChange={(event) => { props.onChange(event.target.value) }} />
            </form>
        </div>
    )
}

export default MediaSearch