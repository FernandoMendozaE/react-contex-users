import React, { useReducer } from 'react'
import UserReducer from './UserReducer' // ! Importando el reducer
import UserContext from './UserContext' // ! Importando el contexto
import axios from 'axios'

const UserState = props => {
  // * Inicicializando el estado usuario
  const initialState = {
    users: [],
    selectedUser: null,
  }

  // ? useReducer: Es un hook que nos permite crear un estado global en un componente, compone las siguiente variables:
  // ? dispatch: Es una función que se ejecuta cuando se hace un cambio en el estado
  // ? UserReducer: Es el reducer que se encarga de manejar el cambio de estado
  const [state, dispatch] = useReducer(UserReducer, initialState)

  // * Función para obtener una lista de usuarios
  const getUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users')
    dispatch({
      type: 'GET_USERS', // ? type: Es el tipo de acción que se está ejecutando
      payload: res.data.data, // ? payload: Es el contenido de la acción el cual contiene el estado actualizado
    })
  }

  // * Función para obtener un usuario
  const getProfile = async id => {
    const res = await axios.get('https://reqres.in/api/users/' + id)
    dispatch({
      type: 'GET_PROFILE', // ? type: Es el tipo de acción que se está ejecutando
      payload: res.data.data, // ? payload: Es el contenido de la acción el cual contiene el estado actualizado
    })
  }

  return (
    // ? Creando el contexto
    // ? Todo los componentes que sean hijos de UserState, podrán acceder al contexto (estado, dispatch)
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
