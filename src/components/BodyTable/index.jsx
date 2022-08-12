import { useState, useEffect } from 'react';

import { myHeaderDisc } from "../../api/header";
import { useFetch } from "../../hooks/useFetch";

import { Container } from './style'

export const BodyTable = () => {
  const [loading, setLoading] = useState(false)
 

  const urlOfertas = "https://assets.univesp.br/hokage/ofertas/"
  const {data: ofertas} = useFetch(urlOfertas, myHeaderDisc) 

  const idOferta = ofertas && ofertas[0]["id"]

  const urlItensOferta = "https://assets.univesp.br/hokage/itens/oferta/" + idOferta + "/"
  const {data: itemOfertas} = useFetch(urlItensOferta, myHeaderDisc) 

  useEffect(() => {
    !itemOfertas ? setLoading(true) : setLoading(false);
  },[itemOfertas])

  return(
  <>
    {loading && <span>Aguarde......</span>}
      <Container>      
          {itemOfertas && itemOfertas.map((item, index) => (
            <tr key={index}>
            <td> <input type="checkbox" />{item.nome}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>           
            </tr>
          ))}        
      </Container>
    </>
  )
}
