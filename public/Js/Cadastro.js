const toggleBtn = document.getElementById('drillToggle');
const toggleText = document.getElementById('toggleText');
const formTitle = document.getElementById('formTitle');
const form = document.getElementById('form');

let isLogin = false;

toggleBtn.addEventListener('click', () => {
    sumirMensagem();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login";
    form.innerHTML = `
      <input id="Input_Login" type="text" placeholder="Usuário ou Email" required>
      <input id="Input_Senha" type="password" placeholder="Senha" required>
      <button type="button" onclick="entrar()" id="drillButton">
        <img id="mecha" src="../assets/mecha.jpg" alt="Gurren Lagann" />
        <img id="drillGif" src="../assets/tengen-toppa-gurren-lagann.gif" alt="Giga Drill Breaker" />
        <span>PERFURE O CÉU!</span>
      </button>
    `;
    toggleText.textContent = "Cadastro"; 
  } else {
    formTitle.textContent = "Cadastro";
    form.innerHTML = `
      <input id="Input_Email" type="text" placeholder="Email" required>
      <input id="Input_Telefone" type="text" placeholder="Telefone" required>
      <input id="Input_Usuario" type="text" placeholder="Usuário" required>
      <input id="Input_Senha" type="password" placeholder="Senha" required>
      <button id="drillButton" type="button" onclick="cadastrar()">
        <img id="mecha" src="../assets/mecha.jpg" alt="Gurren Lagann" />
        <img id="drillGif" src="../assets/tengen-toppa-gurren-lagann.gif" alt="Giga Drill Breaker" />
        <span>PERFURE O CÉU!</span>
      </button>
    `;
    toggleText.textContent = "Login"; 
  }
});
