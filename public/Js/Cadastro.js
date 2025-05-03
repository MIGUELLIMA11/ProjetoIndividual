const toggleBtn = document.getElementById('drillToggle');
const toggleText = document.getElementById('toggleText');
const formTitle = document.getElementById('formTitle');
const form = document.getElementById('form');

let isLogin = false;

toggleBtn.addEventListener('click', () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login";
    form.innerHTML = `
      <input type="text" placeholder="Usuário ou Email" required>
      <input type="password" placeholder="Senha" required>
      <button id="drillButton">
        <img id="mecha" src="../assets/mecha.jpg" alt="Gurren Lagann" />
        <img id="drillGif" src="../assets/tengen-toppa-gurren-lagann.gif" alt="Giga Drill Breaker" />
        <span>PERFURE O CÉU!</span>
      </button>
    `;
    toggleText.textContent = "Cadastro"; 
  } else {
    formTitle.textContent = "Cadastro";
    form.innerHTML = `
      <input type="text" placeholder="Email" required>
      <input type="text" placeholder="Telefone" required>
      <input type="text" placeholder="Usuário" required>
      <input type="password" placeholder="Senha" required>
      <button id="drillButton">
        <img id="mecha" src="../assets/mecha.jpg" alt="Gurren Lagann" />
        <img id="drillGif" src="../assets/tengen-toppa-gurren-lagann.gif" alt="Giga Drill Breaker" />
        <span>PERFURE O CÉU!</span>
      </button>
    `;
    toggleText.textContent = "Login"; 
  }
});
