// A Wikipedia API wrapper for AgroMate

const WIKIPEDIA_ENDPOINT = "https://en.wikipedia.org/w/api.php?";

// Interface for Wikipedia image API
interface ImageQuery {
    query: {
        pages: {
            page: {
                thumbnail: {
                    source: string
                };
            };
        };
    };
}

export async function get_plant_photo(plant: string) {  // Get photo from Wikipedia
    const query: ImageQuery = await (await fetch(WIKIPEDIA_ENDPOINT.concat("action=query&titles=".concat(plant).concat("&prop=pageimages&format=json&pithumbsize=100&redirects&origin=*")))).json();

    if(query.query == null)
        return null;

    if(query.query.pages["-1"] != null)
        return null;

    return Object.values(query.query.pages)[0].thumbnail.source;
}