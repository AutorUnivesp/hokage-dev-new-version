import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { myHeaderDisc } from "../../api/header"
import { MainCollapse } from '../../components/MainCollapse';
import { Search } from "../../components/Search";
import { Urgence } from "../../components/Urgence";

import { Container, ContentSearch } from "./style";
import { TitleCollapse } from "../../components/TitleCollapse";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export const Initial = () => {

  const [loading, setLoading] = useState(false)
  const urlOfertas = "https://assets.univesp.br/hokage/ofertas/"
  const {data: ofertas} = useFetch(urlOfertas, myHeaderDisc) 

  const responsavelMontagem = ofertas && ofertas[0]["montagem_responsavel"]
  const responsavelDi = ofertas && ofertas[0]["di_responsavel"]
  const responsavelArte = ofertas && ofertas[0]["arte_responsavel"]
  const responsavelRevisao = ofertas && ofertas[0]["revisao_responsavel"]
  const responsavelDocente = ofertas && ofertas[0]["docente_responsavel"]
 
  const urlUsuariosMontagem = "https://assets.univesp.br/hokage/usuarios/" + responsavelMontagem +"/"
  const {data: usuarioMontagem} = useFetch(urlUsuariosMontagem, myHeaderDisc)
  const urlUsuariosDi = "https://assets.univesp.br/hokage/usuarios/" + responsavelDi +"/"
  const {data: usuarioDi} = useFetch(urlUsuariosDi, myHeaderDisc)
  const urlUsuariosArte = "https://assets.univesp.br/hokage/usuarios/" + responsavelArte +"/"
  const {data: usuarioArte} = useFetch(urlUsuariosArte, myHeaderDisc)
  const urlUsuariosRevisao = "https://assets.univesp.br/hokage/usuarios/" + responsavelRevisao +"/"
  const {data: usuarioRevisao} = useFetch(urlUsuariosRevisao, myHeaderDisc)
  const urlUsuariosDocente = "https://assets.univesp.br/hokage/usuarios/" + responsavelDocente +"/"
  const {data: usuarioDocente} = useFetch(urlUsuariosDocente, myHeaderDisc)
 
  const fotoMontagem = usuarioMontagem && usuarioMontagem["foto"]
  const fotoDi = usuarioDi && usuarioDi["foto"]
  const fotoArte = usuarioArte && usuarioArte["foto"]
  const fotoRevisao = usuarioRevisao && usuarioRevisao["foto"]
  const nomeDocente = usuarioDocente && usuarioDocente["nome"]
 
  const urlDisciplina = "https://assets.univesp.br/hokage/disciplinas/" //+ idDisciplina + "/"
  const {data: disciplina} = useFetch(urlDisciplina, myHeaderDisc)

  console.log(ofertas)
 
  
  useEffect(() => {
    !disciplina ? setLoading(true) : setLoading(false);
  },[disciplina])

  const equipe = {Arte : 'Arte',
                  DI : 'DI',
                  Montagem : 'Montagem',
                  Supervisor : 'Supervisor',
                  Docente : 'Docente'}
  const idUser = localStorage.getItem('id')
  
  return (
    <>
      <Header
        title="SISTEMA DE GERENCIAMENTO ACADÊMICO"
        local=" Meu Dashboard"
        direction="/hokage/dashboard"
        user={idUser}
      />
      <Container>
        <Filter filtro="DI" pessoa="Pessoa-Di" />
        <Filter filtro="Arte" pessoa="Pessoa-Arte"/>
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
      
      <TitleCollapse/>
        {disciplina && disciplina.map((item, index) => (
          <>            
            <MainCollapse 
            key={index} 
            sigla={item.sigla}
            id={item.id}
            nome={item.nome}
            fotoMontagem={fotoMontagem}
            fotoDi={fotoDi}
            fotoArte={fotoArte}
            fotoRevisao={fotoRevisao}
            nomeDocente={nomeDocente}            
            />
          </>       
        ))}
    </>
  );
}
