export const exerciseOptions = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "a4ac509c53msh267c6760eedb9fep1de0a5jsn7f3dc515851b",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    "x-rapidapi-key": "a4ac509c53msh267c6760eedb9fep1de0a5jsn7f3dc515851b",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
