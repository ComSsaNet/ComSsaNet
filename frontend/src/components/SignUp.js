import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox } from 'antd';
import { VscChromeClose } from 'react-icons/vsc';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../_reducers/user';

const ErrorMessage = styled.div`
  color: red;
`;

const SignUp = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();

  const { signUpLoading, signUpDone, signUpError } = useSelector(
    state => state.user,
  );

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChagePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      return dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, nickname, password },
      });
    },
    [password, passwordCheck],
  );

  if (signUpDone) {
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
                <Tabtitle>회원가입</Tabtitle>
              </TitleHeader>
              <RightTemp />
            </ModalHeader>
            <ModalContent>
              <ContentContainer>
                <ContentTitle>
                  <Title>컴싸넷에 오신 걸 환영합니다</Title>
                </ContentTitle>
                <SignUpForm onSubmit={onSubmitForm}>
                  <Input
                    name="email"
                    type="text"
                    placeholder="이메일"
                    value={email}
                    required
                    onChange={onChangeEmail}
                  />
                  <Input
                    name="nickname"
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    required
                    onChange={onChangeNickname}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    required
                    onChange={onChagePassword}
                  />
                  <Input
                    name="confirm-password"
                    type="password"
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    required
                    onChange={onChangePasswordCheck}
                  />
                  {passwordError && (
                    <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
                  )}
                  <CheckBoxContainer>
                    <Checkbox
                      name="user-term"
                      checked={term}
                      onChange={onChangeTerm}
                    />
                    <span
                      style={{ fontWeight: '600', textDecoration: 'underline' }}
                    >
                      이용약관
                    </span>{' '}
                    및{' '}
                    <span
                      style={{ fontWeight: '600', textDecoration: 'underline' }}
                    >
                      개인정보 취급방침
                    </span>{' '}
                    동의{' '}
                    <span style={{ fontSize: '14px', color: 'red' }}>
                      (필수)
                    </span>
                    {termError && (
                      <ErrorMessage>
                        약관에 동의하셔야 회원가입이 가능합니다.
                      </ErrorMessage>
                    )}
                  </CheckBoxContainer>
                  <SignUpBtn htmlType="submit" loading={signUpLoading}>
                    {signUpLoading ? '' : '회원가입'}
                  </SignUpBtn>
                </SignUpForm>
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
                        <SocialText>카카오로 시작하기</SocialText>
                      </SocialLoginContent>
                    </SocialLoginBtn>
                  </form>
                </SocialButton>
                <SocialButton>
                  <form>
                    <SocialLoginBtn>
                      <SocialLoginContent>
                        <SocialLogo />
                        <SocialText>네이버로 시작하기</SocialText>
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

SignUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignUp;

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

const SignUpForm = styled.form``;

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

const CheckBoxContainer = styled.div`
  align-self: center;
  margin-top: 10px;
`;

const SignUpBtn = styled(Button)`
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
