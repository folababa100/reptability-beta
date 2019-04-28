import uuid from 'uuid';

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

export const addSkill = (
  {
  skill = ''
  } = {}
) => ({
    type: "ADD_SKILL_SET",
    skill: {
      id: uuid(),
      skill
    }
  }
)

export const addSkills = (
  {
    employer = '',
    title = '',
    start = 0,
    end = 0,
    responsibility = ''
  } = {}
) => ({
  type: 'ADD_SKILLS_SET',
  workExperience: {
    id: uuid(),
    employer,
    title,
    start,
    end,
    responsibility
  }
});
