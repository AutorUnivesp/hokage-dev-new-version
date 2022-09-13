// import { useState, useEffect} from 'react'

// import { myHeaderDisc } from "../../api/header"
// import { useFetch } from "../../hooks/useFetch"

import { ContentCollapsetitle, ContentCollapseImage, ContentCollapseData, Container } from "./style"

export const HeaderTable = (props) => {
 
   return (
     <>
     <Container>
     <div className='nameDisciplina'>
                 <>
                 <ContentCollapsetitle>
                    <span><strong>{props.id}</strong></span>
                    <span>{props.sigla} - {props.nome} </span>
                 </ContentCollapsetitle>
                   {/* statusbar aqui */}
                 <ContentCollapseImage>
                    <img src={props.fotoMontagem} alt='foto-montagem'/>
                    <img src={props.fotoDi} alt='foto-di'/>
                    <img src={props.fotoArte} alt='foto-arte'/>
                    <img src={props.fotoRevisao} alt='foto-revisão'/>
                 </ContentCollapseImage>
                   <>                   
                   <ContentCollapseData>
                      <span>{props.nomeDocente}</span>
                      {/* <span>{itemOferta.tipo_1}</span> */}
                      <span>{props.cargaHoraria}</span>
                      {/* <span>{itemOferta.inicio_da_oferta} - {itemOferta.prazo_contratacao_docente}</span>*/}
                   </ContentCollapseData>
                   </>
                 </>

             </div>
             </Container>
     </>
  )
}
