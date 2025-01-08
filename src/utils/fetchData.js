export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '939cdd1296msh5aec966edb7788fp13fd90jsna1669072e30d',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '939cdd1296msh5aec966edb7788fp13fd90jsna1669072e30d',
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
