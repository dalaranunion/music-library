// Main API URL
export const baseUrl = "https://api.discogs.com";
// export const baseUrl = "https://swapi-node.now.sh";

// Categories API has available extra "category" is used when searching vehicles/people/etc
const searchCategories: string[] = [
  "masters",
  "artists",
  "vehicles",
  "people",
  "planets",
  "species",
];
export interface ApiAlbumShapeResponse {}

export interface ApiPaginationResponseShape {
  per_page: number | null;
  items: number;
  page: number;
  pages: number;
  urls: { last: string | null; next: string | null } | {};
}
export interface ApiPaginationShape {
  pageNo: number | null;
  perPage: number | null;
}

const endPoints = {
  search: { endpoint: "/database/search/?", param: "artist" },
  album: { endpoint: "" },
};

function validSearch(input: string) {
  return searchCategories.includes(input);
}

const fetchData = async (
  searchString: string | null,
  searchType: string
): Promise<ApiResponseSchema> => {
  // Lowercase any input to avoid casing issues

  if (searchString) searchString = searchString.toLocaleLowerCase().trim();
  searchType = searchType.toLocaleLowerCase();

  let endpoint = "";

  // Check if this is category people,vehicles,etc and if the requested category exists
  if (validSearch(searchType)) {
    endpoint = `/api/${searchType}`;
  }

  // Check if the searchtype is not a category
  if (searchString && validSearch(searchType)) {
    endpoint = `/api/${searchType}/?search=${searchString}`;
  }

  if (!endpoint) return emptyObject;
  try {
    const data = await swapiCaller(`${baseUrl}${endpoint}`);
    return data ? data : emptyObject;
  } catch (error) {
    throw Error(error);
  }

  // Returns empty data if there is no data
};

const apiCaller = async (getRequest: string): Promise<ApiResponseSchema> => {
  try {
    const response = await fetch(getRequest);
    if (!response.ok) {
      throw Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    return data as ApiResponseSchema;
  } catch (error) {
    setTimeout(function () {
      animation.enter();
    }, 2000);
    throw Error(error);
  }
};

export {
  fetchData,
  swapiCaller,
  ApiResponseSchema,
  emptyObject,
  searchCategories,
};

export default fetchData;
