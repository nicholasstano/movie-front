
export default {
    searchMedia,
    sortMediaById
}

function searchMedia(media, field, searchTerm) {
    return media.filter(m => m[field].toLowerCase().includes(searchTerm.toLowerCase()))
}

function sortMediaById(media) {
    return media.sort(function (a, b) {
        return b.id - a.id
    })
}
