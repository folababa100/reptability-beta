const initialState = {
    activeScene: {timeTravel:[]},
    activeMarker:{}
}
export default function Setactivescene (state = initialState, action) {
    
    switch (action.type) {
        case "SET_ACTIVE_SCENE":
            var newState = Object.assign({}, state);
            newState.activeScene = action.payload
            return newState;
            break;
        case "SET_ACTIVE_MARKER":
            var newState = Object.assign({}, state);
            newState.activeMarker = action.payload
            return newState;
            break;
        case "REMOVE_ACTIVE_MARKER":
            var newState = Object.assign({}, state);
            newState.activeMarker = {}
            return newState;
            break;
        default:
            return state;
            break;
    }
}