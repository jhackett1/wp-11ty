const fetch = require("node-fetch")

// Fetch the most recent 10 posts
// If we want more, we can loop through requests, up to 100 at a time, and append them to an array
// https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/

module.exports = async () => {
    const res = await fetch("https://www.rollingstone.com/wp-json/wp/v2/posts")
    return await res.json()
}
