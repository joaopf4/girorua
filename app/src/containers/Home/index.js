import React from "react";
import styled from 'styled-components';
import Title from "../../components/title";

const HomeWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
`

export const Home = () => {
  return <HomeWrapper>
    <Title />
  </HomeWrapper>
}

export default Home;