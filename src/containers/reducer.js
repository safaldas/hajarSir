import cloneDeep from 'lodash/cloneDeep';
const initialState = {
    name: '',
    photoURL: '',
    now: '',
    date: {},
    attendance: 0,
    total: 0,
    allDates:[]
};

let newState = {},
    sampleObject = {
        periods: [
            /*{
                            id: 1,
                            checked: false
                        }, {
                            id: 2,
                            checked: false
                        }*/
        ]
    };
const today = new Date(),
    date = today.toDateString().replace(/ /g, '_');
let dummy = {};
initialState.now = date;
initialState.date = today.getTime();
initialState[initialState.now] = cloneDeep(sampleObject);
console.log('in reducer');
function CreateAndSetObject(newState) {
    if (newState.now in newState) {
        return newState;
    }
    newState[newState.now] = cloneDeep(sampleObject);
    newState.total += newState[newState.now].periods.length;
    return newState;
}
export default (state = initialState, action = {}) => {


    switch (action.type) {
        case "USER_AUTH":
            if (action.login) {
                newState = cloneDeep(state);
                newState.name = action.user.displayName;
                newState.photoURL = action.user.photoURL;
                return newState;
            }
            else{
                newState=cloneDeep(initialState);
                return CreateAndSetObject(newState);

            }
        case "LOAD_STORE":
            newState = cloneDeep(state);
            console.log('loading');
            newState = action.store;
            return newState;
        case "UPDATE_STATE":
            newState = cloneDeep(state);
            newState[newState.now].periods.map(function(object, index) {
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
            newState = cloneDeep(state);
            console.log('camehere');
            newState[newState.now].periods.push({
                id: newState[newState.now].periods.length + 1,
                checked: false
            });
            newState.total += 1;
            console.log(newState.allDates,"came here");
            if(!!newState.allDates.indexOf(newState.now)){
                newState.allDates.push(newState.now);
                console.log(newState.allDates);
            }
            return newState;
        case "REMOVE_ITEM":
            newState = cloneDeep(state);
            if (newState[newState.now].periods.length === 0) {
                return newState;
            } else if (newState[newState.now].periods[newState[newState.now].periods.length - 1].checked) {
                newState.attendance -= 1;
            }
            newState[newState.now].periods.pop();
            newState.total -= 1;

            return newState;
        case "SET_DATE":

            newState = cloneDeep(state);
            newState.date = action.date.getTime();
            newState.now = action.date.toDateString().replace(/ /g, '_');
            return CreateAndSetObject(newState);
        case "DATE_NAV":
            newState = cloneDeep(state);
            switch (action.option) {
                case 'next':
                    dummy = newState.date + (24 * 60 * 60 * 1000);
                    newState.date = dummy;
                    newState.now = new Date(dummy).toDateString().replace(/ /g, '_');
                    return CreateAndSetObject(newState);
                case 'prev':
                    dummy = newState.date - (24 * 60 * 60 * 1000);
                    newState.date = dummy;
                    newState.now = new Date(dummy).toDateString().replace(/ /g, '_');
                    return CreateAndSetObject(newState);
                default:
                    return newState;
            }
        default:
            newState = cloneDeep(state);
            return newState;
    }
}
