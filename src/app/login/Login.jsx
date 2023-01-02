import React from 'react';
import './styles.css';


export default function Login() {
  return (
  <section className="h-100 gradient-form">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  
                  <div className="text-center ">
                    <a href="/">
                      <img className="logo" src="../imagens/salesforce-crm-social.png" alt="Logo"/>         
                    </a>
                  </div>
  
                  <form>
                    <p>Por favor, faça login na sua conta</p>
  
                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" className="form-control"
                        placeholder="Nome de usuário ou endereço de e-mail" />
                      <label className="form-label" for="form2Example11">Nome de usuário</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" className="form-control" placeholder="Digite sua senha" />
                      <label className="form-label" for="form2Example22">Senha</label>
                    </div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button" type="button">Login</button>
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button" type="reset" onclick="Aviso('Campos limpos com secesso.')" >Limpar Campos</button>
                      <br/>
                      <a className="text-muted" href="redefinirSenha.html">Esqueceu a senha?</a>
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Não tem uma conta?</p>
                      <a className="btn btn-outline-danger">Criar uma conta</a>
                    </div>
  
                  </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
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
