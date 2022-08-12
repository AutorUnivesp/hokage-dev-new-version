import { useState, useEffect} from 'react'

import { myHeaderDisc } from "../../api/header"
import { useFetch } from "../../hooks/useFetch"

import { ContentCollapsetitle, ContentCollapseImage, ContentCollapseData, Container } from "./style"

export const HeaderTable = () => {

  const [loading, setLoading] = useState(false)
  const headerDisc = myHeaderDisc
  
  const urlOfertas = "https://assets.univesp.br/hokage/ofertas/"
  const {data: ofertas} = useFetch(urlOfertas, headerDisc) 

  // const idDisciplina = ofertas && ofertas[0]["id_disciplina"]
  
  const responsavelMontagem = ofertas && ofertas[0]["montagem_responsavel"]
  const responsavelDi = ofertas && ofertas[0]["di_responsavel"]
  const responsavelArte = ofertas && ofertas[0]["arte_responsavel"]
  const responsavelRevisao = ofertas && ofertas[0]["revisao_responsavel"]
  const responsavelDocente = ofertas && ofertas[0]["docente_responsavel"]
  
  const urlUsuariosMontagem = "https://assets.univesp.br/hokage/usuarios/" + responsavelMontagem +"/"
  const {data: usuarioMontagem} = useFetch(urlUsuariosMontagem, headerDisc)
  const urlUsuariosDi = "https://assets.univesp.br/hokage/usuarios/" + responsavelDi +"/"
  const {data: usuarioDi} = useFetch(urlUsuariosDi, headerDisc)
  const urlUsuariosArte = "https://assets.univesp.br/hokage/usuarios/" + responsavelArte +"/"
  const {data: usuarioArte} = useFetch(urlUsuariosArte, headerDisc)
  const urlUsuariosRevisao = "https://assets.univesp.br/hokage/usuarios/" + responsavelRevisao +"/"
  const {data: usuarioRevisao} = useFetch(urlUsuariosRevisao, headerDisc)
  const urlUsuariosDocente = "https://assets.univesp.br/hokage/usuarios/" + responsavelDocente +"/"
  const {data: usuarioDocente} = useFetch(urlUsuariosDocente, headerDisc)
  
  const fotoMontagem = usuarioMontagem && usuarioMontagem["foto"]
  const fotoDi = usuarioDi && usuarioDi["foto"]
  const fotoArte = usuarioArte && usuarioArte["foto"]
  const fotoRevisao = usuarioRevisao && usuarioRevisao["foto"]
  const nomeDocente = usuarioDocente && usuarioDocente["nome"]
  
  const urlDisciplina = "https://assets.univesp.br/hokage/disciplinas/" //+ idDisciplina + "/"
  const {data: disciplina} = useFetch(urlDisciplina, headerDisc)

  useEffect(() => {
    !disciplina ? setLoading(true) : setLoading(false);
  },[disciplina])

  return (
    <>
    <Container>
    <div className='nameDisciplina'>
        {loading && <span>Aguarde......</span>}
            {disciplina && disciplina.map((item, index )=> (
                <div key={index}>
                <ContentCollapsetitle>               
                <span><strong>{item.id}</strong></span>
                <span>{item.sigla} - {item.nome} </span>
                </ContentCollapsetitle>                
                  {/* statusbar aqui */}              
                <ContentCollapseImage>                  
                  <img src={fotoMontagem} alt='foto-montagem'/>
                  <img src={fotoDi} alt='foto-di'/>
                  <img src={fotoArte} alt='foto-arte'/>
                  <img src={fotoRevisao} alt='foto-revisão'/>     
                </ContentCollapseImage>              
                {ofertas && ofertas.map((itemOferta, index) => (
                  <>
                  {/* <span>{nomeDocente}</span> */}
                  <ContentCollapseData key={index}>
                  <span>{nomeDocente}</span>
                  <span>{itemOferta.tipo_1}</span>
                  <span>{item.carga_horaria}</span>
                  <span>{itemOferta.inicio_da_oferta} - {itemOferta.prazo_contratacao_docente}</span>                  
                  </ContentCollapseData>
                  </>
                ))}                                
                </div>                
            ))}
            </div>  
            </Container>      
    </>
  )
}
