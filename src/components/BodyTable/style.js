
import styled from "styled-components";

export const Container = styled.table`
display:flexbox;
align-items:center;
border: 1px solid #000;
border-collapse: collapse;

border-radius: 5px;
margin-top:-10px;
width:100%;
tr{
    
    width:100%;
}

td{
    padding:10px;
    border: 1px solid #000;
    width:180px;
}
td:nth-child(1){
    width:500px;    
}

td:nth-child(2){
    width:220px;    
}

td:nth-child(3){
    width:220px;    
}

td:nth-child(4){
    width:220px;    
}


input {
    margin-right:5px;
    margin-bottom: -5px;
    width:20px;
    height:20px;
}

`