export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b698f3a435msh608ebede0ef2c31p1a1a55jsnf41e366e1efe',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '50b74be4abmsh3612e33a5aa0344p120b8ejsn2a83698e62d4',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const exercisegeneratoroptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc8ac817bdmshcc70b99833fab42p1d40d1jsn94f9a8627f39',
		'X-RapidAPI-Host': 'https://api.api-ninjas.com'
	}
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
