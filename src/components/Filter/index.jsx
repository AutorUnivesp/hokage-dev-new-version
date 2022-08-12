import { Container } from "./style"

export const Filter = ({filtro, pessoa}) => {
  console.log(pessoa)
  return(
    <>
    <Container>
      <select>
          {/* {filtroF && filtroF.map((item) => (
            <option hidden>item.name</option>))}
          {pessoaP && pessoaP.map((item) => (
          <option>item.name</option>))} */}
          <option hidden>{filtro.nome}</option>

            <option>{pessoa.nome}</option>



        </select>
    </Container>
    </>
  )
}
