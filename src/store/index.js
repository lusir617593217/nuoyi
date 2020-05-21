import { createStore } from 'redux'

const initState = {
  collapsed: false
}

const reducer = (state = initState, action) => {
  const newState = {...state}
  switch (action.type) {
    case 'change_collapsed':
      newState.collapsed = action.collapsed
      return newState

    default:
      return state
  }

}

const store = createStore(reducer)

export default store
