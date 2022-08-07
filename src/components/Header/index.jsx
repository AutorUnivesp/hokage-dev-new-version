import { Link } from "react-router-dom";
import { Bell } from "../Bell";
import { UserData } from "../UserData";
import { Container, LeftSide } from "./style";


export const Header = ({title, local, direction}) => {

  return(
    <>
      <Container>
        <h2>{title}</h2>        
        <LeftSide>
          <Link to={direction}><h3>{local}</h3></Link>
          <Bell/>
          <UserData/>
          <Link to="/"><h3><span>|</span>Sair</h3></Link>
  </LeftSide>
      </Container>
    </>
  );
}
