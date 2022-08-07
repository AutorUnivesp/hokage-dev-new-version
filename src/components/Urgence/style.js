import styled from "styled-components";

export const Container = styled.div`
display:flex;
width:300px;
align-items:center;
button{
  display:inline;
  width: 250px;
  height: 38px;
  margin-top:38px;
}
label{
  margin-left:10px;
}
input[type=checkbox]:checked{

  label{
    color:red;
  }

}
`
