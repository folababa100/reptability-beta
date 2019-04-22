const initialState = {
    username:"",
    creatorID:"",
    title: "",
    description:"",
    area: "",
    client:"",
    slug:"",
    groupManager:"",
    projectManager:"",
    address:"",
    archive:{},
    thumbnail:{},
    date: "",
    lastEdited: "",
    members:[],
    sceneCategories:[
        {title:"",
        id:"",
        projectID:"",
    scenes:[]}
    ],
    scenes:[
        {title:"",
         url:"",
         description:"",
         date:"",
        timeTravel:[],
        markers:[],
        }
    ]
}
export default function Projectinit (state = initialState, action) {
    switch (action.type) {
        case "PROJECT_INIT":
            var newState = Object.assign({}, state);
            newState = action.payload
            return newState;
            break;
        case "CLEAR_PROJECT":
            newState = initialState
            return newState;
            break;
        case "ADD_MARKER":
            var newState = Object.assign({}, state);
            newState.scenes.map((scene)=>{
                if(scene.url === window.PSV.config.panorama){
                    scene.markers.push(action.payload)
        }
            })
            return newState;
            break;
        case "REMOVE_MARKER":
            var newState = Object.assign({}, state);
            newState.scenes.map((scene)=>
            {
                if(scene.url === window.PSV.config.panorama)
                { 
                    var newMarkers= scene.markers.filter((marker)=>marker.id !== action.payload.id)
                 scene.markers=newMarkers
                }
            })
            return newState;
            break;
        case "ADD_SCENE_CATEGORY":
            var newState = Object.assign({}, state);
            newState.sceneCategories.push(action.payload)
            return newState;
            break;
        case "REMOVE_SCENE_CATEGORY":
            var newState = Object.assign({}, state);
            var newCats = newState.sceneCategories.filter((cat)=>cat.title !== action.payload.title)
            newState.sceneCategories = newCats;
            return newState
            break;
        case "ADD_SCENE_TO_CATEGORY":
            var newState = Object.assign({}, state);
            newState.sceneCategories.map((cat)=>{
                if(cat.title === action.payload.category){
                cat.scenes.push(action.payload.sceneID)
                }
            })
            return newState;
            break;
        case "REMOVE_SCENE_FROM_CATEGORY":
            var newState = Object.assign({}, state);
            newState.sceneCategories.map((cat)=>{
                if(cat.title === action.payload.category){
                    var newScenes =  cat.scenes.filter((sceneID)=>sceneID !==action.payload.sceneID)
                    cat.scenes = newScenes
                }
            })
            return newState;
            break;
        case "EDIT_SCENE_CATEGORY":
            var newState = Object.assign({}, state);
            newState.sceneCategories.map((cat)=>{
                if(cat.title === action.payload.title){
                   cat.title = action.payload.newTitle
                }
            })
            return newState;
            break;
        case "INCREASE_MARKER_SIZE":
            var newState = Object.assign({}, state);
            newState.scenes.map((scene)=>
            {
                if(scene.url === window.PSV.config.panorama)
                { scene.markers.map((marker)=>{
                    if(marker.id === action.payload.id){
                        marker.height +=1;
                        marker.width +=1;
                    }
                })
                }
            })
            return newState;
            break;
        case "DECREASE_MARKER_SIZE":
            var newState = Object.assign({}, state);
            newState.scenes.map((scene)=>
            {
                if(scene.url === window.PSV.config.panorama)
                { scene.markers.map((marker)=>{
                    if(marker.id === action.payload.id){
                        marker.height -=1;
                        marker.width -=1;
                    }
                })
                }
            })
            return newState;
            break;
        case "UPDATE_PROJECT":
            var newState = Object.assign({}, state);
            var newState = {...newState,...action.payload}
            return newState;
            break;
        case "ADD_MEMBER":
            var newState = Object.assign({}, state);
            newState.members.push(action.payload)
            return newState;
            break;
        case "REMOVE_MEMBER":
            var newState = Object.assign({}, state);
            var newMembers =  newState.members.filter((member)=>member.userID._id !==action.payload.userID)
            newState.members = newMembers
            return newState;
            break;
        default:
            return state;
            break;
    }
}