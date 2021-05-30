import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { VscChromeClose } from 'react-icons/vsc';
import useInput from '../hooks/useInput';
import { LOG_IN_REQUEST } from '../_reducers/user';

const SignIn = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const { logInLoading, logInError, logInDone } = useSelector(
    state => state.user,
  );

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const [email, onChangeEmail] = useInput('');
  const [password, onChagePassword] = useInput('');

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch({ type: LOG_IN_REQUEST, data: { email, password } });
    },
    [email, password],
  );
  if (logInDone) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <Outside onClick={closeModal} />
          <Modal>
            <XButton onClick={closeModal}>
              <VscChromeClose />
            </XButton>
            <ModalHeader>
              <LeftTemp />
              <TitleHeader>
                <Tabtitle>로그인</Tabtitle>
              </TitleHeader>
              <RightTemp />
            </ModalHeader>
            <ModalContent>
              <ContentContainer>
                <ContentTitle>
                  <Title>컴싸넷에 오신 걸 환영합니다</Title>
                </ContentTitle>
                <LoginForm onSubmit={onSubmitForm}>
                  <Input
                    name="email"
                    type="text"
                    placeholder="이메일"
                    value={email}
                    required
                    onChange={onChangeEmail}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    required
                    onChange={onChagePassword}
                  />
                  <LoginBtn htmlType="submit" loading={logInLoading}>
                    {logInLoading ? '' : '로그인'}
                  </LoginBtn>
                </LoginForm>
              </ContentContainer>
              <BreakLineContainer>
                <BreakLine>
                  <BreakLineText>또는</BreakLineText>
                </BreakLine>
              </BreakLineContainer>
              <SocialContainer>
                <SocialButton>
                  <form>
                    <SocialLoginBtn>
                      <SocialLoginContent>
                        <SocialLogo />
                        <SocialText>카카오로 로그인하기</SocialText>
                      </SocialLoginContent>
                    </SocialLoginBtn>
                  </form>
                </SocialButton>
                <SocialButton>
                  <form>
                    <SocialLoginBtn>
                      <SocialLoginContent>
                        <SocialLogo />
                        <SocialText>네이버로 로그인하기</SocialText>
                      </SocialLoginContent>
                    </SocialLoginBtn>
                  </form>
                </SocialButton>
              </SocialContainer>
            </ModalContent>
          </Modal>
        </ModalContainer>
      ) : null}
    </>
  );
};

SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignIn;

const ModalContainer = styled.div`
  position: fixed;
  max-height: calc(1vh * 100);
  background: rgb(0, 0, 0, 0.6);
  display: flex;
  z-index: 2000;
  flex-direction: row;
  justify-content: center;
  inset: 0px;
  @media ${props => props.theme.mobile} {
    padding: 40px;
    align-items: center;
  }
`;

const Outside = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  position: relative;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px;
  background: rgb(255, 255, 255);
  @media ${props => props.theme.mobile} {
    width: 100%;
    max-width: 568px;
    border-radius: 12px;
  }
`;

const XButton = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  left: 24px;
  z-index: 1;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    border-radius: 3px;
  }
  @media ${props => props.theme.mobile} {
    top: 24px;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  min-height: 64px;
  border-bottom: 1px solid rgb(235, 235, 235);
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
`;

const LeftTemp = styled.div`
  flex: 0 0 16px;
  text-align: left;
`;

const RightTemp = styled.div`
  flex: 0 0 16px;
  text-align: right;
`;

const TitleHeader = styled.div`
  overflow: hidden;
  flex: 0 1 auto;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
`;

const Tabtitle = styled.h1`
  color: inherit;
  font-size: 1rem;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;

const ModalContent = styled.div`
  padding: 24px;
  flex: 1 1 auto;
  overflow-y: auto;
  outline: none;
`;

const ContentContainer = styled.div``;

const ContentTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 0;
`;

const LoginForm = styled.form``;

const Input = styled.input`
  margin-top: 15px;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  ::placeholder {
    color: #999999;
  }
`;

const LoginBtn = styled(Button)`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  margin-top: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 10px 24px;
  border: none;
  background: green;
  color: rgb(255, 255, 255);
  width: 100%;
`;

const BreakLineContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const BreakLine = styled.div`
  overflow: hidden;
  text-align: center;
`;

const BreakLineText = styled.span`
  position: relative;
  padding-bottom: 16px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  ::before {
    content: '';
    position: absolute;
    border-bottom: 1px solid rgb(228, 228, 228);
    top: 50%;
    right: 100%;
    width: 5000px;
    border-bottom-width: 1px;
    border-bottom-color: #e4e4e4;
  }
  ::after {
    content: '';
    position: absolute;
    border-bottom: 1px solid rgb(228, 228, 228);
    top: 50%;
    left: 100%;
    width: 5000px;
    border-bottom-width: 1px;
    border-bottom-color: #e4e4e4;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SocialButton = styled.div`
  width: 100%;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const SocialLoginBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  color: rgb(72, 72, 72);
  padding: 10px 12px;
  font-weight: 800;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(176, 176, 176);
  background: transparent;
  box-shadow: none;
  min-width: 71.1935px;
  width: 100%;
`;

const SocialLoginContent = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
`;

const SocialLogo = styled.div`
  flex: 0 1 0%;
`;

const SocialText = styled.div`
  flex: 1 1 0%;
`;
