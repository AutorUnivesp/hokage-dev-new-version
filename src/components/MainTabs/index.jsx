
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyTable } from '../BodyTable';
import './style.css';

export const MainTabs = (props) => {
    
return(
  
  <Tabs>
    
    <TabList>
      <Tab><span>{props.etapa}</span></Tab>
      <Tab><span>{props.equipe}</span></Tab>
    </TabList>

    <TabPanel>
      <BodyTable/>     
    </TabPanel>

    <TabPanel>
      <BodyTable/>     
    </TabPanel>

    
  </Tabs>
  
)};