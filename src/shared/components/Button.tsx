import styled from "styled-components";

export const Button: React.FC<any> = (props) => {
    return (
        <ButtonStyle>
            {props.text}
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button`

`;

