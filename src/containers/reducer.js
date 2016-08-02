const initialState = {
    periods: [{
            id: 1,
            checked: false
        }, {
            id: 2,
            checked: false
        }, {
            id: 3,
            checked: false
        }, {
            id: 4,
            checked: false
        },

    ],
    attendance: 0,
    total: 4
};
let newState = {};
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case "UPDATE_STATE":
            newState = Object.assign({}, state);
            initialState.periods.map(function(object, index) {
                if (object.id === action.id) {
                    object.checked = !object.checked;
                    if (object.checked) {
                        newState.attendance += 1;
                    } else {
                        newState.attendance -= 1;
                    }
                }

            });
            return newState;
        case "ADD_ITEM":
            newState = Object.assign({}, state);
            newState.periods.push({
                id: newState.periods.length + 1,
                checked: false
            });
            newState.total += 1;
            return newState;
        case "REMOVE_ITEM":
            newState = Object.assign({}, state);
            if (newState.periods[newState.total - 1].checked) {
                newState.attendance-=1;
            }
            newState.periods.pop();
            newState.total -= 1;

            return newState;
        default:
            newState = Object.assign({}, state);
            return newState;
    }
}
