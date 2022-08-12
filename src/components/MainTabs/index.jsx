

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyTable } from '../BodyTable';
import './style.css';

export const MainTabs = () => (
  
  <Tabs>
    <TabList>
      <Tab><span>Semana 0 </span></Tab>
      <Tab><span>Di</span></Tab>
      <Tab><span>Supervisão</span></Tab>
      <Tab><span>Montagem</span></Tab>
      <Tab>Revisão</Tab>
    </TabList>

    <TabPanel>
      <BodyTable/>

     
    </TabPanel>
    <TabPanel>
      <p>Conteudo DI</p>
      <p>Conteudo DI</p>
      <p>Conteudo DI</p>
      <p>Conteudo DI</p>
      <p>Conteudo DI</p>
      <p>Conteudo DI</p>
    </TabPanel>
    <TabPanel>
      <p>Conteudo Supervisão</p>
      <p>Conteudo Supervisão</p>
      <p>Conteudo Supervisão</p>
      <p>Conteudo Supervisão</p>
    </TabPanel>
    <TabPanel>
      <p>Conteudo Montagem</p>
      <p>Conteudo Montagem</p>
      <p>Conteudo Montagem</p>
      <p>Conteudo Montagem</p>
      <p>Conteudo Montagem</p>
    </TabPanel>
    <TabPanel>
      <p>Conteudo Arte</p>
      <p>Conteudo Arte</p>
      <p>Conteudo Arte</p>
      <p>Conteudo Arte</p>
      <p>Conteudo Arte</p>
    </TabPanel>
  </Tabs>
  
);