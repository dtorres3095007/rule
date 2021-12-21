import {
  TYPE_LIST,
} from "../actions/actGlobal";

const initialState = {
  typeList: 'list',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_LIST:
      return Object.assign({}, state, {
        typeList: action.typeList
      })
    default:
      return state;
  }
}

export default reducer;
