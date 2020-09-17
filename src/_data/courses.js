const fetch = require("node-fetch")

module.exports = async () => {
    const res = await fetch("https://opportunities.hackney.gov.uk/wp-json/wp/v2/course")
    return await res.json()
}