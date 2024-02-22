function makepage(name, author, date, icon, link, description) {
    const pg = {}
    pg["name"]        = name
    pg["author"]      = author
    pg["date"]        = date
    pg["icon"]        = icon
    pg["link"]        = link
    pg["description"] = description
    return pg
}

const pages = [
    //makepage("Test", "TheEE145", "2/22/2024", "graphics/icon.png", "pages/test.html", "Pootis"),
    makepage("Space Exploration (Mindustry Edition)", "TheEE145", "2/22/2024", "graphics/pages/se.png", "pages/se.html", "The space exploration mod will be rework mindustry mechanics in total and adds lots of content")
]