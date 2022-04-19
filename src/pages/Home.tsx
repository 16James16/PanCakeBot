import styled from 'styled-components';

import { Button }  from 'shared/components/Button';

const Home: React.FC = () => {
    
    return (
        <Container>
            <Section1>
                <Title>Eager to run Pancake Bot?</Title>
                <Buttons>
                    <Button text = 'Start' />
                    <Button text = 'Start' />
                </Buttons>
            </Section1>
            <Section2>
                 
            </Section2>
        </Container>
    );
}

const Container = styled.div`

`;
const Section1 = styled.div`

`;
const Title = styled.div`

`;
const Buttons = styled.div`

`;
const Section2 = styled.div`

`;

export default Home;