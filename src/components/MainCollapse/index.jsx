
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { MainTabs } from '../MainTabs';
import { Container } from './style';

import { HeaderTable } from '../HeaderTable';
import { useFetch } from '../../hooks/useFetch';
import { myHeaderDisc } from "../../api/header"
import { useEffect, useState } from 'react';


export const MainCollapse = (props) => {
   const idUser = localStorage.id;
   const equipeUser = localStorage.equipe;     
  return (
    <>    
    <div>
      <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={null}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>
         <HeaderTable
         id={props.id} 
         sigla={props.sigla} 
         nome={props.nome}  
         fotoMontagem={props.fotoMontagem}
         fotoDi={props.fotoDi}
         fotoArte={props.fotoArte}
         fotoRevisao={props.fotoRevisao}
         nomeDocente={props.nomeDocente}
         cargaHoraria={props.carga_horaria}
         />         
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MainTabs
            equipe='DI' 
            etapa='Semana 0' 
            user={props.user}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
    
    </>
  
   )
}
