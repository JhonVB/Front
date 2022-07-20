import { GET_PERSONAS, CREATE_PERSONA } from "./actionsTypes";

const initialState = {
  personas: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONAS:
      return {
        ...state,
        personas: action.payload,
      };

    case CREATE_PERSONA:
      return {
        ...state,
        personas: [...state.personas, action.payload],
      };

    //  case DELETE_PERSONA:
    //    return {
    //      ...state,
    //      personas: action.payload,
    //    };

    default:
      return {
        ...state,
      };
  }
}
