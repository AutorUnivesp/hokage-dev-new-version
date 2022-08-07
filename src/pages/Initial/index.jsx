import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";

import { MainCollapse } from '../../components/MainCollapse';
import { Search } from "../../components/Search";
import { Urgence } from "../../components/Urgence";

import { Container, ContentSearch } from "./style";



export const Initial = () => {
  return (
    <>
      <Header
        title="SISTEMA DE GERENCIAMENTO ACADÊMICO"
        local=" Meu Dashboard"
        direction="/hokage/dashboard"
      />
      <Container>
        <Filter filtro="DI" pessoa="Pessoa-Di" />
        <Filter filtro="Arte" pessoa="Pessoa-Arte" />
        <Filter filtro="Montagem" pessoa="Pessoa-Montagem" />
        <Filter filtro="Supervisor" pessoa="Pessoa-Supervisor" />
        <Filter filtro="Docente" pessoa="Pessoa-Docente" />
        <Filter filtro="Tipo 1" pessoa="Pessoa-Tipo1" />
        <Filter filtro="Tipo 2" pessoa="Pessoa-Tipo2" />
      </Container>
      <ContentSearch>
        <Search />
        <Urgence />
      </ContentSearch>
      
      <MainCollapse />
    </>
  );
}
