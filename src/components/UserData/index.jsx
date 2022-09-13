import { useState } from "react"

import { useFetch } from "../../hooks/useFetch"
import { myHeaderDisc } from "../../api/header"
import { Container } from "./style"

import DefaultImg from "../../assets/avatar.png"



export const UserData = ({user}) => {
  const [userDataInfo, setUserDataInfo] = useState(false)
  const userId = user 

  const urlUsuariosCurrent = "https://assets.univesp.br/hokage/usuarios/" + userId +"/"
  const {data: currentUser} = useFetch(urlUsuariosCurrent, myHeaderDisc)

  const fotoUserCurrent = currentUser && currentUser["foto"]

  const handleUserData = () => {
    if(userDataInfo === true){
      return;
    }    
    setUserDataInfo(!userDataInfo)
  }

  return(
    <>
    <Container>
      <img src={fotoUserCurrent === "" ? DefaultImg : fotoUserCurrent} alt="" />
      <p onClick={handleUserData()}>{localStorage.userName}</p>
    </Container>
    </>
  )
}
