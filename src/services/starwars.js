export const search = (query) => {
  return fetch(`https://swapi.co/api/planets/?search=${query}`)
    .then(res => res.json());
}

export const getDetails = (url) => {
  return fetch(url)
    .then(res => res.json());
}

export const userSearch = (query) => {
  return fetch(`https://swapi.co/api/people/?search=${query}`)
    .then(res => res.json());
}
