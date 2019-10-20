export const getNews = () => ({ type: 'GET_NEWS', });
export const addOpen = () => ({ type: 'ADD_OPEN', });
export const addClose = () => ({ type: 'ADD_CLOSE', });
export const colorPopOpen = (anchorElement) => ({ type: 'COLORPOP_OPEN', anchorElement: anchorElement});
export const colorPopClose = () => ({ type: 'COLORPOP_CLOSE', });

export const fetchDog = (number) => { return { type: 'FETCHED_DOG', number: number }};
export const GET_BRANDS = () => ({type: 'GET_BRANDS'});