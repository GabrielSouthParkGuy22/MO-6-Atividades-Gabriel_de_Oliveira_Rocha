const root_container = document.querySelector("#root");

function Header() {
  return (
    <header id="header">
      <a href="#">
        <img src="./Vector.svg" alt="logo" />
      </a>
    </header>
  );
}

function RegisterHeader() {
  return (
    <div id="registerHeader">
      <h1 id="registerTitle">Cadastro</h1>
    </div>
  );
}

function UserForm() {
  return (
    <form action="" id="user-form">
      <div id="userDataContainer">
        <h1 id="userData">Dados Cadastrais</h1>
      </div>
      <div id="form-container">
        <div className="item1">
          <label className="label-tag" for="name">
            Nome completo:
          </label>
          <input className="input-field" type="text" id="name" name="name" />
        </div>

        <div className="item2">
          <label className="label-tag" for="e-mail">
            Email:
          </label>
          <input
            className="input-field"
            type="email"
            id="e-mail"
            name="e-mail"
          />
        </div>

        <div className="item3">
          <label className="label-tag" for="phone">
            Telefone:
          </label>
          <input className="input-field" type="tel" id="phone" name="phone" />
        </div>

        <div className="item4">
          <label className="label-tag" for="userDate">
            Data de Nacimento
          </label>
          <input
            className="input-field"
            type="date"
            name="userDate"
            id="userDate"
          />
        </div>

        <div className="item5">
          <label className="label-tag" for="userCPF">
            CPF
          </label>
          <input
            className="input-field"
            type="text"
            name="userCPF"
            id="userCPF"
          />
        </div>

        <div className="item6">
          <label className="label-tag" for="userCell">
            Celular
          </label>
          <input
            className="input-field"
            type="tel"
            name="userCell"
            id="userCell"
          />
        </div>

        <div className="item7">
          <label className="label-tag" for="pw">
            Senha:
          </label>
          <input className="input-field" type="password" id="pw" name="pw" />
        </div>

        <div className="item8">
          <label className="label-tag" for="checkPW">
            Confirmar Senha:
          </label>
          <input
            className="input-field"
            type="password"
            id="checkPW"
            name="checkPW"
          />
        </div>
      </div>
      <button id="form-btn">CONFIRMAR</button>
    </form>
  );
}

function Footer() {
  return (
    <footer>
      <div id="newsletter">
        <p>Receba notificações pelo Newsletter</p>

        <div>
          <input
            type="text"
            id="newsletter-input"
            name="newsletter-input"
          ></input>
          <button id="subscribe-btn">SE-INSCREVER</button>
        </div>
      </div>

      <div id="contact-container">
        <h3>Contatos:</h3>
        <p>tel: 11 99999-9999</p>
        <p>undergroundmusicofficial@gmail.com</p>
      </div>
    </footer>
  );
}

ReactDOM.render(
  <div>
    <Header />
    <RegisterHeader />
    <UserForm />
    <Footer />
  </div>,
  root_container
);
