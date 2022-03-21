import React, { useContext } from 'react' // ! Importando el hook useContext
import UserContext from '../context/User/UserContext' // ! Importando el contexto

const Profile = () => {
  const { selectedUser } = useContext(UserContext) // ? Accediendo al contexto

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            alt=""
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{ width: '180px' }}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  )
}

export default Profile
