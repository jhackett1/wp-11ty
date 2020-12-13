const fetch = require("node-fetch")

module.exports = async () => {
    const res = await fetch("https://www.rollingstone.com/wp-json/wp/v2/posts")
    return await res.json()
}
