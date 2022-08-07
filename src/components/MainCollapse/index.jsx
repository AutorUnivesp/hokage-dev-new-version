import { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { MainTabs } from '../MainTabs';
import { Container } from './style';

import { myHeaderDisc } from '../../api/header';
import { useFetch } from '../../hooks/useFetch';


export const MainCollapse = () => {

  const headerDisc = myHeaderDisc
  const urlDisciplina = "https://assets.univesp.br/hokage/disciplinas/"
  const urlOfertas = "https://assets.univesp.br/hokage/ofertas/"

  const {data: disciplina} = useFetch(urlDisciplina, headerDisc)
  const {data: ofertas} = useFetch(urlOfertas, headerDisc)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    !disciplina ? setLoading(true) : setLoading(false);
  },[disciplina])

  return (
    <div>
      <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={null}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>
        <div className='nameDisciplina'>
        {loading && <span>Aguarde......</span>}
            {disciplina && disciplina.map(item => (
                <>
                <span><strong>{item.id}</strong></span>
                <span>{item.sigla} - {item.nome} </span>
                {ofertas && ofertas.map(itemOferta => (
                  <>
                  <span>{itemOferta.tipo_1} outra coisa</span>
                  <span>{item.carga_horaria}</span>
                  <span>{itemOferta.inicio_da_oferta}</span>
                  <span>{itemOferta.prazo_contratacao_docente}</span>
                  </>
                ))}
                </>
            ))}
            </div>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MainTabs/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
   )
}
