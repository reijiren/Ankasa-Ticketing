const initialState = {
    limit: 2,
    sortBy: "name",
    sortOrd: "asc",
    data: {}
}

// init reducer
const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SORTBYPRICE": 
            return {...state, sortBy: "price"};
        case "SORTBYCLASS": 
            return {...state, sortBy: "class"};
        case "SORTBYDATE": 
            return {...state, sortBy: "date_created"};
        case "SORTORDER": 
            const ord = state.sortOrd;
            if(ord == "asc") 
                ord = "desc";
            else 
                ord = "asc";
            return {...state, sortOrd: ord};
        default:
            return state;
    }
}

export default searchReducer;