import { Container } from "./style"

export const Filter = ({filtro, pessoa}) => {
  return(
    <>
    <Container>
      <select>
          <option hidden>{filtro}</option>
          <option>{pessoa}</option>
        </select>
    </Container>
    </>
  )
}
