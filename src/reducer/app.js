const initialState = {
  gender: "",
  skills: [],
  postCode: 0,
  phoneNumebr: 0,
  firstname: '',
  lastname: '',
  birthDay: new Date(),
  streetApt: '',
  homeAddress: '',
  provinceState: '',
  cityTown: '',
  values: [0],
  workExperiences: []
}

export default function App (state = initialState, action) {
  switch (action.type) {
    case "ADD_SET_ONE":
      let newState = Object.assign({}, state);
      newState = action.payload
      return newState;
      break;
    case "ADD_WORK_EXPERIENCE":
      newState.workExperience.push(action.payload)
      return newState
      break;
    case "ADD_SKILLS_SET":
      return [
        ...state.workExperiences,
        action.workExperience
      ]
      break;
    default:
      return state;
      break;
    
  }
}
