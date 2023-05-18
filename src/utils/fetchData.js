export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '17ca273a01mshe01e37985da1f7bp161e1ajsn33c02f653d23',
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
