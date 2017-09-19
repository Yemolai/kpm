import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
  <div class="container">
    <div class="row">
      <div class="Absolute-Center is-Responsive">
        <div class="container" style="text-align:center">
          <img class="card-shadow" width="128" src="assets/logobig.png">
          <h5>{{title}}</h5>
        </div>
        <div class="col-sm-12">
          <form action="#" id="loginForm">
            <div class="form-group input-group">
              <span class="input-group-addon"><i class="fa fa-at"></i></span>
              <input #email class="form-control" type="email" placeholder="{{placeholders.email}}"/>          
            </div>
            <div class="form-group input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input #password class="form-control" type="password" placeholder="{{placeholders.senha}}"/>     
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox"> {{text.agree1}} <a href="#">{{text.agree2}}</a>
              </label>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-danger btn-block" (click)="submit(email.value, password.value)">
                {{text.submit}}
              </button>
            </div>
            <div class="form-group text-center">
              <a href="#">{{text.forgot}}</a>&nbsp;|&nbsp;<a href="#">{{text.help}}</a>
            </div>
          </form>        
        </div>  
      </div>    
    </div>
  </div>
  `,
  styles: [
    `div.well {
      height: 250px;
    }`,
    `.Absolute-Center {
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
    }`,
    `.Absolute-Center.is-Responsive {
      width: 50%; 
      height: 50%;
      min-width: 20em;
      max-width: 28em;
      padding: 2em;
    }`,
    `.card-shadow {
      background: #fff;
      border-radius: 2px;
      display: inline-block;
      margin: 1rem;
      position: relative;
      padding: 1em;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }`
  ]
})
export class LoginComponent {
  title = 'Gerenciador de pacientes';
  placeholders = {
    email: 'email',
    senha: 'senha'
  };
  text = {
    agree1: 'Concordo com os',
    agree2: 'Termos e condições',
    submit: 'Entrar',
    forgot: 'Esqueci a senha',
    help: 'Ajuda'
  };
  submit(email:string, senha:string):any {
    console.info('submit lançado ao mar, capitão!');
    console.log('email:', email);
    console.log('senha:', senha);
  }
}
