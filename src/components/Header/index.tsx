import { useNavigate } from "react-router-dom";
import { HeaderContainer, SquereDiv, Trapezoid } from "./style";

function Header() {
  const navigate = useNavigate();
  return (
    <SquereDiv>
      <HeaderContainer onClick={() => navigate('/')}>
        <h1>Beers</h1>
      </HeaderContainer>
      <Trapezoid />
    </SquereDiv>
  )
}

export default Header;