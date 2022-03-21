import { GET_USERS, GET_PROFILE } from '../types' // * Importamos los tipos de datos de nuestro contexto

const UserReducer = (state, action) => {
  const { type, payload } = action // ? type: Es el tipo de acción que se está ejecutando, payload: Es el contenido de la acción el cual contiene el estado actualizado

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      }
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      }
    default:
      return state
  }
}

export default UserReducer
