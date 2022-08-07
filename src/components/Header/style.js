import styled from "styled-components"

export const Container = styled.header`
  width:100%;
  height:100px;
  background:#474141;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-shadow:6px 3px 20px 6px #999;

  h2 {
    color:#fff;
    font-weight:normal;
    margin-left:20px;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
    }
  }
`
export const LeftSide = styled.div`
display:flex;
h3 {
    color:#fff;
    font-weight:normal;
    margin-right:20px;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
    }
  }
  span{
    margin:0 20px;
  }
`


