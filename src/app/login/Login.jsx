import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import logocrm from '../../Images/logocrm.png';



import FireBase from '../config/FireBase';
import 'firebase/auth';

export default function Login() {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function LoginUsuario(){ 
    
    FireBase.auth().signInWithEmailAndPassword(email, senha).then(function(FireBase){
      alert('Deu certo :).')
    })
    .catch(function(error){
      alert(error)
    });
    
  }

  function emailLogin(event){

    setEmail(event.target.value);

  }

  function senhaLogin(event){

    setSenha(event.target.value);

  }
  
  function limpar_campos (){
    return alert('Campos limpo com sucesso.');
  }

  return (
  <section className="h-100 gradient-form ">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  
                  <div className="text-center ">
                    <Link to="/">
                      <img className="logo" src={logocrm}/>         
                    </Link>
                  </div>                  
  
                  <form>
                    <p>Por favor, faça login na sua conta.</p>
  
                    <div className="form-outline mb-4">
                      <input onChange={emailLogin} type="email" id="form2Example11" className="form-control"
                        placeholder="E-mail do usuário" />
                      <label className="form-label" for="form2Example11">E-mail</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input onChange={senhaLogin} type="password" id="form2Example22" className="form-control" placeholder="Digite sua senha" />
                      <label className="form-label" for="form2Example22">Senha</label>
                    </div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button onClick={LoginUsuario} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button" type="button">Acessar</button>

                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button" type="reset" onClick={limpar_campos} >Limpar Campos</button>
                      <br/>                      
                      <Link to="/app/redefinirsenha" className="text-muted redefinir-senha" >Esqueceu a senha?</Link>
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Não tem uma conta?</p>
                      <Link to='/app/criarconta' className="btn btn-outline-danger" >Criar uma conta</Link>
                    </div>
  
                  </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <div className="text-center ">
                    <Link to="/">
                      <img className="logo2" src={logocrm}/>         
                    </Link>
                  </div>
                  <h4 className="mb-4">Somos mais que uma empresa</h4>
                  <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
