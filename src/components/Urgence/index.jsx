import { Container } from "./style"

export const Urgence = () => {
  return(
    <>
    <Container>
        <button type="button" id="checkall">
          <input id="checkurgency" type="checkbox"/>
          <label htmlFor="checkurgency">Mostrar somente urgĂȘncias</label>
        </button>
    </Container>
    </>
  )
}
