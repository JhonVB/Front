import {
  GET_PERSONAS,
  CREATE_PERSONA,
  DELETE_PERSONA,
  UPDATE_PERSONA,
  CREATE_PERSONA_ERROR,
} from "./actionsTypes";

const initialState = {
  personas: [],
  errors: {},
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

    case CREATE_PERSONA_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case DELETE_PERSONA:
      return {
        ...state,
        personas: action.payload,
      };

    case UPDATE_PERSONA:
      const person = state.personas.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.personas[person] = action.payload;
      return {
        ...state,
        personas: [...state.personas],
      };

    default:
      return {
        ...state,
      };
  }
}
