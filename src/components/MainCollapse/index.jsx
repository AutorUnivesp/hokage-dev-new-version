
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { MainTabs } from '../MainTabs';
import { Container } from './style';

import { HeaderTable } from '../HeaderTable';

export const MainCollapse = () => {

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
         <HeaderTable/>         
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
