export const addSetUp = (data) => {
  return {
    type: "ADD_SET_UP",
    payload: data
  }
}

export const addSetOne = (data) => {
  return {
    type: "ADD_SET_ONE",
    payload: data
  }
}

export const addSetTwo = (data) => {
  return {
    type: "ADD_SET_TWO",
    payload: data
  }
}

export const addSetThree = (data) => {
  return {
    type: "ADD_SET_THREE",
    payload: data
  }
}

// export const addSkills = (data) => {
//   return {
//     type: "ADD_SKILLS_SET",
//     payload: data
//   }
// }

export const addSkills = (workExperience) => ({
  type: 'ADD_SKILLS_SET',
  workExperience
});
