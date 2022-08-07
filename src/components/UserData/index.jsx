import DefaultImg from "../../assets/avatar.png"
import { Container } from "./style"

export const UserData = () => {
  return(
    <><Container>
      <img src={DefaultImg} alt="" />
      <p>{localStorage.userName}</p>
    </Container>
    </>
  )
}
