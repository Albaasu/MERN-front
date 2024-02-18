import React, { useContext, useRef } from 'react';
import './Login.css';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch}=useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({
      email:email.current.value,
      password:password.current.value,
    },
    dispatch
    );
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>SNS</h3>
          <span className='loginDesc'>MERN</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>ログイン</p>
            <input
              type='email'
              className='loginInput'
              required
              ref={email}
              placeholder='メールアドレス'
            />
            <input
              type='password'
              className='loginInput'
              required
              placeholder='パスワード'
              minLength='6'
              ref={password}
            />
            <button className='loginButton'>ログイン</button>
            <span className='logiForgot'>パスワードを忘れた</span>
            <button className='loginRegisterButton'>アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
