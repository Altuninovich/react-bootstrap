import React from 'react';
import {Container, Jumbotron as Jumbo} from "react-bootstrap";
import styled from "styled-components";
import car from "../images/1332775038_savv-91.jpg";

const Styles = styled.div`
.jumbo {
    background: url(${car}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
    }
    .overlay {
      background-color: #000;
      opacity: 0.7;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
`;
const Jumbotron = () => {
    return (
        <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
            <h1>track fighter</h1>
                <p>The best cars in the world</p>
            </Container>
        </Jumbo>
        </Styles>
    )
}

export  default Jumbotron;