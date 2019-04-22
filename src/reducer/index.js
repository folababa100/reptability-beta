import {combineReducers} from "redux"
import Auth from "./auth.js"
import App from './app.js'
import Projectinit from "./project"
import Activescene from "./scene"
var allReducer = combineReducers({
    auth : Auth,
    initProject: Projectinit,
    activeScene: Activescene,
    app: App

})

export default allReducer;