import styled from 'styled-components';
import { medGray } from './GlobalStyle'

export const Card = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 3px 5px ${medGray};
    box-sizing: border-top;
    ${({height}) => height && `height: ${height}px;`}

    @media (max-width: 1200px) {
        padding: 10px;
    }
`