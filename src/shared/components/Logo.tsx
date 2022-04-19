import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
    
    const navigate = useNavigate();
    return(
        <LogoContainer onClick={()=>navigate("/")}>
            <LogoIcon src = "./logo.svg" />
            <LogoText>PANCAKE BOT</LogoText>
        </LogoContainer>
    );
}

const LogoContainer = styled.div`

`;
const LogoIcon = styled.img`

`;
const LogoText = styled.div`

`;

export default Logo;

