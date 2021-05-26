import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Header = () => {
  const [IsLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [IsSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const { me } = useSelector(state => state.user);

  const openLoginModal = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const openSignUpModal = useCallback(() => {
    setIsSignUpModalOpen(true);
  }, []);

  const closeSignUpModal = useCallback(() => {
    setIsSignUpModalOpen(false);
  }, []);

  return (
    <>
      <Sheader>
        <Wrapper>
          <LogoContainer>
            <Logo>컴싸넷</Logo>
          </LogoContainer>
          <SearchContainer />
          <MenuContainer>
            <NavContainer aria-label="메인 메뉴">
              <NavList>
                {me ? (
                  <>
                    <NavItem>
                      <StyleAiOutlineMenu />
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem onClick={openLoginModal}>로그인</NavItem>
                    <NavItem onClick={openSignUpModal}>회원가입</NavItem>
                  </>
                )}
              </NavList>
            </NavContainer>
          </MenuContainer>
        </Wrapper>
      </Sheader>
      <SignIn isOpen={IsLoginModalOpen} closeModal={closeLoginModal} />
      <SignUp isOpen={IsSignUpModalOpen} closeModal={closeSignUpModal} />
    </>
  );
};

export default Header;

const Sheader = styled.header`
  color: black;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 80px;
  background-color: white;
  z-index: 100;
  opacity: 0.9;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);

  @media ${props => props.theme.mobile} {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${props => props.theme.tabletS} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${props => props.theme.tabletM} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${props => props.theme.tabletL} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const LogoContainer = styled.div`
  flex: 1 0 140px;
`;

const Logo = styled.a`
  display: inline-flex;
  height: 60px;
  font-size: 1.5rem;
  position: relative;
  vertical-align: middle;
  align-items: center;
`;

const SearchContainer = styled.div`
  text-align: center;
  flex: 0 1 auto;
  min-width: 0px;
  padding: 0 24px;
`;

const MenuContainer = styled.div`
  flex: 1 0 140px;
`;

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
`;

const NavList = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;
`;

const NavItem = styled.div`
  display: inline-block;
  align-self: center;
  position: relative;
  user-select: auto;
  white-space: nowrap;
  appearance: none;
  cursor: pointer;
  padding: 12px;
  font-weight: 600;
  &:hover {
    color: white;
    background-color: black;
    border-radius: 15px;
    transition-property: background-color, color;
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
  }
`;

const StyleAiOutlineMenu = styled(AiOutlineMenu)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
`;
