import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
`

export const Home = () => {
  return <HomeWrapper>
    <h1>
      Hello world!
    </h1>
  </HomeWrapper>
}

export default connect()(Home);