import React from "react"

interface IUser {
    name: string,
    id?: number
}

interface Props {
    user: IUser
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name} <br/>
            <strong>id: </strong> {user.id || 'Não possui email'} <br/> 
        </div>
    )
}

export default User