import { FaChevronRight } from 'react-icons/fa';
import { StyledButton, Container } from './style'
interface ButtonProps {
  onButtonClick: () => void
  buttonText: string;
  position: string;
}

function Button(props: ButtonProps) {
  return (
    <Container position={props.position}>
      <StyledButton onClick={props.onButtonClick}>
        <FaChevronRight size={25} />
        {props.buttonText}
      </StyledButton>
    </Container>
  )
}

export default Button;