const initialState = {
    addopen: false,
    colorpopopen: false,
    anchorElement: null,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'NEWS_RECEIVED':
            return { ...state, news: action.json[4], loading: false };

        case 'ADD_OPEN':
            return { ...state, addopen: true };
        case 'ADD_CLOSE':
            return { ...state, addopen: false };
        case 'COLORPOP_OPEN':
            return { 
                ...state, 
                colorpopopen: true,
                anchorElement:action.anchorElement
            };
        case 'COLORPOP_CLOSE':
            return { 
                ...state, 
                colorpopopen: false,
                anchorElement: null, 
            };
        case 'GET_BRANDS':
                return { ...state, number: action.number };

        default: 
            return state;
    }
};
export default reducer;