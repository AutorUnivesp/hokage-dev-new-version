import { useState} from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../api/api.js';
import './login.css';
import { history } from '../../routes/history.js';
import { toast } from 'react-toastify';
import { AiOutlineEye } from "react-icons/ai";

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const userToken = localStorage.getItem("accessToken");
   userToken && history.push('/hokage/index');

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);

    if(email !== "" && password !== ""){
      const  signin = async  () => {
         await login(email, password);
       }
       await signin();
       

       //determinando intervalo para redirecionamento pro index depois de logado
       let intervalo = setInterval(function(){
        history.push('/hokage/index');
       }, 1000)

       // parando o intervalo depois de 7 segundos
       setTimeout(function(){
         clearInterval(intervalo);
       }, 7000);
       

    }else{
      toast.error("Preencha todos os campos.");
      setTimeout(()=>{setLoading(false)}, 1500);
    }
  }

  function togglePassword(){
    setShowPassword(!showPassword);
  }


  return(
    <div className="login-body">

      <div className="form-top">
        <h3>Sistema de gestão acadêmica</h3>
        <p>Entre com email e senha para logar no sistema:</p>
      </div>

      <div className="form-bottom">
      <form>

        {/* <form onSubmit={handleSubmit}> */}
          <input type="email" placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <input type={showPassword ? "text" : "password"} placeholder="digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <AiOutlineEye onClick={togglePassword} size={22} title={showPassword ? "esconder senha" : "mostrar senha"} />


          <button type="submit" className="login-button" onClick={handleSubmit}>{loading ? 'Carregando...' : 'Logar!'}</button>


        </form>

        <Link className="change-password" to="/">Precisa trocar a senha? Clique aqui.</Link>

      </div>

    </div>
  );
  }
