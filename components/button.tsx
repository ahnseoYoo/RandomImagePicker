import styled from 'styled-components';


const Button = styled.button`

  width: 100px;
  height: 70px;
  background-color: white;
  color: black;
  border-radius: 15px;
  &:hover{
    background-color: black;
    color: white;
  }
`

function SubmitButton(props) {
  
  return(
    <>
      <Button>{props.children}</Button> 
    </>
  )

}





export default SubmitButton