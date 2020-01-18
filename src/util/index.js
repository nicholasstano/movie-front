
export default {
    searchMedia
}

function searchMedia(media, field, searchTerm) {
    return media.filter(m => m[field].toLowerCase().includes(searchTerm.toLowerCase()))
}

