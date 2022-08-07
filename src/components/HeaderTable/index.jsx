import { Container } from "./style"

export const HeaderTable = () => {
  return (
    <>
    
    <Container>
    <table>
        <th className="table-main-firt">Nome</th>
        <th>% Completo</th>
        <th>Responsáveis</th>
        <th>Docente</th>
        <th>Tipo 1</th>
        <th>Tipo 2</th>
        <th>Carga horária</th>
        <th>Período de oferta</th>
      </table>
    </Container>
    
    </>
  )
}
