import { StyledButton, Container } from './style'
import { ReactNode } from 'react';
interface ButtonProps {
  onButtonClick: () => void
  children: ReactNode;
  position: string;
}

function Button(props: ButtonProps) {
  return (
    <Container position={props.position}>
      <StyledButton onClick={props.onButtonClick}>
        {props.children}
      </StyledButton>
    </Container>
  )
}

export default Button;