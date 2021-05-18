import styled from 'styled-components';
import React from 'react';
// import Header from './header';

const HomePage = () => {
  return (
    <div>
      <Header>
        <Navber>
          <Logo />
          <Hamburger />
          <MyMenu />
        </Navber>
      </Header>
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

const Header = styled.div`
  position: absolute;
  top: 30px;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navber = styled.div`
  width: 90vw;
  height: 80px;
  position: relative;
  background-color: black;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Logo = styled.div`
  position: absolute;
  width: 70px;
  height: 50px;
  background-color: blue;
  left: 10px;
`;

const Hamburger = styled.button`
  position: absolute;
  right: 70px;
  width: 70px;
  height: 50px;
`;

const MyMenu = styled.div`
  position: absolute;
  background-color: blue;
  width: 50px;
  height: 50px;
  right: 10px;
  border-radius: 50px;
`;

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
