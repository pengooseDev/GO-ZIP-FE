import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import createUser from 'libs/client/api/createUser';
import { motion } from 'framer-motion';
import { FormState } from 'libs/client/types/formType';
import ReactHookInput from 'components/form/ReactHookInput';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const onValid = async (data: FormState) => {
    const { email, nickname, password } = data;
    const res = await createUser({ email, nickname, password });
    console.log(`res : ${res}`);
  };

  return (
    <Container>
      <TopWrapper>
        <Title>Sign in</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <ReactHookInput
            type="이메일"
            register={register}
            errorMessage={errors.email?.message}
          />
          <ReactHookInput
            type="닉네임"
            register={register}
            errorMessage={errors.nickname?.message}
          />
          <ReactHookInput
            type="비밀번호"
            register={register}
            errorMessage={errors.password?.message}
          />
          <Submit>create</Submit>
        </Form>
        <SocialText>SignIn with Social</SocialText>
      </TopWrapper>
      <BottomWrapper>
        <SocialText>Or Sign Up Using</SocialText>
        <a href="/login">login</a>
      </BottomWrapper>
    </Container>
  );
};

export default Signin;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;
  gap: 5px;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const SocialText = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  opacity: 0.7;
`;

const TopWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 700px;
  border-radius: 5px;
  left: calc(50% - 250px);
  top: calc(50% - 400px);
  color: ${({ theme }) => theme.color};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.color};
  backdrop-filter: blur(3px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ease-in-out 0.15s;
`;

const Title = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Submit = styled.button`
  margin: 30px 0 30px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  font-size: 20px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;