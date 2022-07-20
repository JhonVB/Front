import {
  GET_PERSONAS,
  CREATE_PERSONA,
  DELETE_PERSONA,
} from "../Redux/actionsTypes";
import axios from "axios";

export function getPersonas() {
  return async function (dispatch) {
    const personas = await axios.get(`http://127.0.0.1:8000/api/person/`);
    return dispatch({
      type: GET_PERSONAS,
      payload: personas.data,
    });
  };
}

export function createPersona(persona) {
  return async function (dispatch) {
    const personas = await axios.post(
      `http://127.0.0.1:8000/api/person/`,
      persona
    );
    //  console.log(personas.data);
    return dispatch({
      type: CREATE_PERSONA,
      payload: personas.data,
    });
  };
}

// export function deletePersona(id) {
//   return async function (dispatch) {
//     const personas = await axios.delete(
//       `http://127.0.0.1:8000/home/persona/${id}`
//     );
//     //  console.log(personas.data);
//     return dispatch({
//       type: DELETE_PERSONA,
//       payload: personas.data,
//     });
//   };
// }

// export function getTypes() {
//   return async function (dispatch) {
//     const pokemons = await axios.get(`http://localhost:3001/types`);
//     return dispatch({
//       type: GET_TYPES,
//       payload: pokemons.data,
//     });
//   };
// }

// export function getPokemon(id) {
//   return async function (dispatch) {
//     const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
//     return dispatch({
//       type: GET_DETAIL,
//       payload: pokemon.data,
//     });
//   };
// }

// export function createPokemon(estado) {
//   return async function (dispatch) {
//     var info = await axios.post(`http://localhost:3001/pokemons`, estado);
//     console.log(info.data);
//     return dispatch({
//       type: CREATE_POKEMON,
//       payload: info.data,
//     });
//   };
// }
