// A Wikipedia API wrapper for AgroMate

const WIKIPEDIA_ENDPOINT = "https://en.wikipedia.org/w/api.php?";

function is_query_empty(query: ImageQuery | DescriptionQuery) {
    if(query.query == null)
        return true;

    if(query.query.pages["-1"] != null) // If -1 object exists in query, the result should be empty
        return true;

    return false;
}

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
    const query: ImageQuery = await (await fetch(WIKIPEDIA_ENDPOINT.concat("action=query&titles=".concat(plant).concat("&prop=pageimages&format=json&pithumbsize=500&redirects&origin=*")))).json();

    if(is_query_empty(query))
        return null;

    return Object.values(query.query.pages)[0].thumbnail.source;
}

interface DescriptionQuery {
    query: {
        pages: {
            page: {
                extract: string
            }
        }
    }
}

export async function get_plant_description(plant: string) {
    const query: DescriptionQuery = await (await fetch(WIKIPEDIA_ENDPOINT.concat("format=json&action=query&prop=extracts&exintro&explaintext&redirects&origin=*&titles=").concat(plant))).json();

    if(is_query_empty(query))
        return null;

    return Object.values(query.query.pages)[0].extract;
    
}