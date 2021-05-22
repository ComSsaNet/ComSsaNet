import styled from 'styled-components';
import React from 'react';
import Header from '../../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <SubjectTable>
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
      </SubjectTable>
    </div>
  );
};

export default HomePage;

const SubjectTable = styled.div`
  position: absolute;
  top: 230px;
  width: 100vw;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 280px);
  row-gap: 100px;
  column-gap: 50px;
`;

const Subject = styled.div`
  display: flex;
  width: 280px;
  height: 230px;
  background-color: blue;
  border-radius: 20px;
`;
