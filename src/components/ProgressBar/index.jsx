import { ContainerBar } from "./style";

export const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      
      height: 20,
      width: '10%',
      backgroundColor: "blue",
      borderRadius: 50,
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <ContainerBar>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </ContainerBar>
      
    );
  };
  


