import React, { useRef } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const email = useRef();
  const password = useRef();
  const userName =useRef();
  const passwordConfirmation = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    //パスワードと確認用のパスワードの確認
    if(password.current.value !==passwordConfirmation.current.value){
      passwordConfirmation.current.setCustomValidity("パスワードが違います")
    }else{
      try{
        const user = {
          username:userName.current.value,
          email:email.current.value,
          password:password.current.value
        }
//registerApiを叩く
await axios.post("/auth/register",user)
navigate("/login")
      }catch(err){

      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>SNS</h3>
          <span className='loginDesc'>やってみよー</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>新規登録</p>
            <input
              type='text'
              className='loginInput'
              placeholder='ユーザー名'
              required
              ref={userName}
            />
            <input
              type='email'
              className='loginInput'
              placeholder='メールアドレス'
              required
              ref={email}
            />
            <input
              type='password'
              className='loginInput'
              placeholder='パスワード'
              required
              minLength='6'
              ref={password}
            />
            <input
              type='password'
              className='loginInput'
              placeholder='確認用パスワード'
              required
              ref={passwordConfirmation}
            />
            <button className='loginButton' type='submit'>
              サインアップ
            </button>
            <button className='loginRegisterButton'>ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
