export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e58a25e25cmshe802463339ff546p1ff160jsncaed0e3499c5',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e58a25e25cmshe802463339ff546p1ff160jsncaed0e3499c5',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  try{
    const res = await fetch(url, options);
  const data = await res.json();
console.log(data);
  return data;
  }catch(e){
console.log("error on fetchData Function")
  }
};
