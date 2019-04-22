export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

export const projectInit = (data) => {
    return {
        type: "PROJECT_INIT",
        payload: data
    }
}
export const clearProject = (data) => {
    return {
        type: "CLEAR_PROJECT",
        payload: data
    }
}
export const setActiveScene = (data) => {
    return {
        type: "SET_ACTIVE_SCENE",
        payload: data
    }
}
export const setActiveMarker = (data) => {
    return {
        type: "SET_ACTIVE_MARKER",
        payload: data
    }
}
export const removeActiveMarker = (data) => {
    return {
        type: "REMOVE_ACTIVE_MARKER",
        payload: data
    }
}
export const addMarker = (data) => {
    return {
        type: "ADD_MARKER",
        payload: data
    }
}
export const removeMarker = (data) => {
    return {
        type: "REMOVE_MARKER",
        payload: data
    }
}
export const increaseMarkerSize = (data) => {
    return {
        type: "INCREASE_MARKER_SIZE",
        payload: data
    }
}
export const decreaseMarkerSize = (data) => {
    return {
        type: "DECREASE_MARKER_SIZE",
        payload: data
    }
}
export const updateProject = (data) => {
    return {
        type: "UPDATE_PROJECT",
        payload: data
    }
}
export const addSceneCategory = (data) => {
    return {
        type: "ADD_SCENE_CATEGORY",
        payload: data
    }
}
export const removeSceneCategory = (data) => {
    return {
        type: "REMOVE_SCENE_CATEGORY",
        payload: data
    }
}
export const addSceneToCategory = (data) => {
    return {
        type: "ADD_SCENE_TO_CATEGORY",
        payload: data
    }
}
export const removeSceneFromCategory = (data) => {
    return {
        type: "REMOVE_SCENE_FROM_CATEGORY",
        payload: data
    }
}
export const editSceneCategory = (data) => {
    return {
        type: "EDIT_SCENE_CATEGORY",
        payload: data
    }
}
export const addMember = (data) => {
    return {
        type: "ADD_MEMBER",
        payload: data
    }
}
export const removeMember = (data) => {
    return {
        type: "REMOVE_MEMBER",
        payload: data
    }
}