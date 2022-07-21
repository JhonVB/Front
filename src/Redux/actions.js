import {
  GET_PERSONAS,
  CREATE_PERSONA,
  DELETE_PERSONA,
  UPDATE_PERSONA,
} from "../Redux/actionsTypes";

import axios from "../Service/Service";

export function getPersonas() {
  return async function (dispatch) {
    const personas = await axios.get(`/person/`);
    return dispatch({
      type: GET_PERSONAS,
      payload: personas.data,
    });
  };
}

export function createPersona(persona) {
  return async function (dispatch) {
    try {
      const personas = await axios.post(`/person/`, persona);
      return dispatch({
        type: CREATE_PERSONA,
        payload: personas.data,
      });
    } catch (error) {
      const errors = error.response.data;
      return dispatch({
        type: CREATE_PERSONA,
        payload: { isError: true, errors },
      });
    }
  };
}

export function eliminarPersona(id) {
  return async function (dispatch) {
    await axios.delete(`/person/${id}/`);
    const personas = await axios.get(`/person/`);

    console.log(personas);
    //  console.log(personas.data);
    return dispatch({
      type: DELETE_PERSONA,
      payload: personas.data,
    });
  };
}

export function actualizarPersona(id, info) {
  return async function (dispatch) {
    const ver = await axios.put(`/person/${id}/`, info);
    const personas = await axios.get(`/person/`);

    console.log("ver", ver);

    return dispatch({
      type: UPDATE_PERSONA,
      payload: { id, ...info },
    });
  };
}
