import initialState from './initialState'
import { ADD_NEWS, DEL_NEWS } from '../constants'


export default function (state = initialState.news, action) {
  // action => {type: 'blah iiij" }
  switch (action.type) {
    case ADD_NEWS:
      return Object.assign(
        {}, //empty
        state, // current
        { data: [...state.data, action.payload] } //change
      )

      case DEL_NEWS:
      return Object.assign(
        {}, //empty
        state, // current
        { data: state.data.filter(i => i.id !== action.payload.id)} //change
      )

    default:
      return Object.assign({}, state)
  }


}