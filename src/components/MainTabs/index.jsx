

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';

export const MainTabs = () => (
  
  <Tabs>
    <TabList>
      <Tab><span>Semana 0 </span></Tab>
      <Tab><span>Di</span></Tab>
      <Tab><span>Supervisão</span></Tab>
      <Tab><span>Montagem</span></Tab>
      <Tab>Arte</Tab>
    </TabList>

    <TabPanel>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>
      <h2>Conteudo Semana 0</h2>

     
    </TabPanel>
    <TabPanel>
      <h2>Conteudo DI</h2>
    </TabPanel>
    <TabPanel>
      <h2>Conteudo Supervisão</h2>
    </TabPanel>
    <TabPanel>
      <h2>Conteudo Montagem</h2>
    </TabPanel>
    <TabPanel>
      <h2>Conteudo Arte</h2>
    </TabPanel>
  </Tabs>
  
);