let url = "http://localhost:3000/usuarios"
let nome = document.getElementById("nome")
let email = document.getElementById("email")
async function carregaDados(){
    await fetch(url)
    .then((response) => {
        return response.json()
    }
    )
    .then((data) => {
        console.log(data)
        nome.innerHTML = data[0].nome
        email.innerHTML = data[0].email
    })
    .catch((error) => {
        console.log("Erro no carregamento do banco de dados: " + error);
    })
    }


    const form = document.getElementById("form");
const lista = document.getElementById("lista");

// Função para carregar usuários
async function carregarUsuarios() {
  const resposta = await fetch("/usuarios");
  const usuarios = await resposta.json();
  console.log(usuarios);

  lista.innerHTML = "";
  usuarios.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.nome} - ${u.email}`;
    lista.appendChild(li);
  });
}

// Função para enviar novo usuário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  await fetch("/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }), // manda o objeto js para o banco como json
  });

  form.reset(); // limpa os campos com a função nativa para tags form
  carregarUsuarios(); // atualiza lista
});

// Carrega ao abrir a página
carregarUsuarios();
    carregaDados()


    //async function carregaUsuarios(){const.resposta = await fetch("/users") const usuarios = await resposta.json (); } carregaUsuarios

