import {
  GET_PERSONAS,
  CREATE_PERSONA,
  DELETE_PERSONA,
  UPDATE_PERSONA,
  CREATE_PERSONA_ERROR,
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

export function createPersona(persona, clear) {
  return async function (dispatch) {
    try {
      const personas = await axios.post(`/person/`, persona);
      console.log("post", personas);
      clear();
      return dispatch({
        type: CREATE_PERSONA,
        payload: personas.data,
      });
    } catch (error) {
      console.log("error de post", error);
      const errors = error.response?.data;
      return dispatch({
        type: CREATE_PERSONA_ERROR,
        payload: errors,
      });
    }
  };
}

export function eliminarPersona(id) {
  return async function (dispatch) {
    await axios.delete(`/person/${id}/`);
    const personas = await axios.get(`/person/`);

    return dispatch({
      type: DELETE_PERSONA,
      payload: personas.data,
    });
  };
}

export function actualizarPersona(id, info) {
  return async function (dispatch) {
    await axios.put(`/person/${id}/`, info);

    return dispatch({
      type: UPDATE_PERSONA,
      payload: { id, ...info },
    });
  };
}

export async function logear(info) {
  try {
    console.log("log");
    const { data } = await axios.post(`token/`, info);
    localStorage.setItem("token", data.access);

    console.log("data", data);

    setTimeout(() => {
      window.location = "http://localhost:3000/home";
    }, 600);
  } catch (error) {
    console.log(error);
  }
}
