let bairros = [
  "Serrinha",
  "Edson Queiroz",
  "Benfica",
  "Centro",
  "Aldeota",
  "Eng. Luciano Cavalcante",
  "Água Fria",
  "Cidade dos Funcionários",
  "Dunas",
  "Varjota",
  "Dionísio Torres",
  "Joaquim Távora",
  "Meireles",
  "Damas",
  "Messejana",
  "Parangaba",
  "Farias Brito",
  "Cais do Porto",
  "Jardim das Oliveiras",
  "Carlito Pamplona",
  "Granja Portugal",
  "Barra do Ceará",
  "Praia do Futuro",
  "Conjunto Ceará",
  "Mucuripe",
  "Mondubim",
  "Granja Lisboa",
  "Siqueira",
  "Conjunto Esperança",
  "Conjunto Palmeiras",
  "Aracapé",
  "Jangurussu",
  "Vila União",
  "Castelão",
  "Quintino Cunha",
  "Couto Fernandes",
  "Bela Vista",
  "São João do Tauape",
  "Edson Queiroz",
  "Serrinha",
  "Cristo Redentor",
  "Granja Portugual",
  "Pan Americano",
  "Luciano Cavalcante",
  "Colonia",
  "Jockey Clube",
  "Edson Queiroz",
  "Vila Pery",
  "Vicente Pizon",
  "Itaoca",
  "Siqueira",
  "Centro",
  "Vila Uniao",
  "José Walter",
  "Parque Araxa",
  "Cais do Porto",
  "Paupina",
  "Parangaba",
  "Antônio Bezerra",
  "Quintino Cunha",
  "Vila Velha",
  "Vila Manoel Satiro",
  "Dionisio Torres",
  "Barra do Ceara",
  "Henrique Jorge",
  "Lagoa Redonda",
  "Montese",
  "Bom Sucesso",
  "Itaperi",
  "Conjunto Ceara",
  "Bela Vista",
  "Mondubim",
  "Jangurussu",
  "Jardim Iracema",
  "Serrinha",
  "Rodolfo Teofilo",
  "Quintinho Cunha",
  "Jd das Oliveiras",
  "Ellery",
  "Bom Jardim",
  "Cidade 2000",
  "Dias Macedo",
  "Conj José Walter",
  "Granja Lisboa",
  "Pici",
  "Mucuripe",
  "Aracape",
  "Maraponga",
  "Sapiranga",
  "Presidente Kennedy",
  "Parque Dois Irmaos",
  "Barroso",
  "Jardim Guanabara",
  "Messejana",
  "João Xxiii",
  "Castelo Encantado",
  "Jacarecanga",
  "Padre Andrade",
  "Benfica",
  "Caca e Pesca",
  "Passare",
  "Pedras",
  "Jardim das Oliveiras",
  "Aerolandia",
  "Pio Xii",
  "Parque São José",
  "Jardim America",
  "Fatima",
  "Granja Portugal",
  "Democrito Rocha",
  "Alvaro Weyne",
  "Conj Esperanca",
  "Pirambu",
  "Parque Genibau",
  "Autran Nunes",
].sort()

const bairroSelect = document.getElementById("select-bairro");
function criaBairrosOptions() {
  for (let i = 0; i < bairros.length; i++) {
    const opt = document.createElement("option");
    opt.value = bairros[i];
    opt.innerHTML = bairros[i];
    bairroSelect.appendChild(opt);
  }
}

function errorNome() {
  let errorDiv = document.getElementsByClassName("error-div-nome")[0];
  //let input = document.getElementById('nome-input')
  errorDiv.innerHTML = `<span class='text-danger'>Insira um nome</span>`;
}
function errorEmail() {
  let errorDiv = document.getElementsByClassName("error-div-email")[0];
  errorDiv.innerHTML = `<span class='text-danger'>Insira um email válido</span>`;
}
function errorBairro() {
  let errorDiv = document.getElementsByClassName("error-div-bairro")[0];
  //let input = document.getElementById('nome-input')
  errorDiv.innerHTML = `<span class='text-danger'>Insira um bairro</span>`;
}
function errorData() {
  let errorDiv = document.getElementsByClassName("error-div-data")[0];
  errorDiv.innerHTML = `<span class='text-danger'>Insira uma data válida(Você tem que ter mais de 18 anos)</span>`;
}
function errorTelefone() {
  let errorDiv = document.getElementsByClassName("error-div-telefone")[0];
  errorDiv.innerHTML = `<span class='text-danger'>Insira um telefone válido</span>`;
}
function errorPeriodo() {
  let errorDiv = document.getElementsByClassName("error-div-periodo")[0];
  errorDiv.innerHTML = `<span class='text-danger'>Insira um periodo válido</span>`;
}
function validacaoEmail(field) {
  usuario = field.substring(0, field.indexOf("@"));
  dominio = field.substring(field.indexOf("@") + 1, field.length);

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    return false;
  } else {
    return true;
  }
}

function infoSuccess() {
  let sucessDiv = document.getElementById("success");
  let successSpan = document.getElementsByClassName("success-span")[0];
  sucessDiv.className = "success";
  successSpan.innerHTML = "Enviado com sucesso!";
}

function phoneMask(value) {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

function handlePhone(event) {
  let input = event.target;
  input.value = phoneMask(input.value);
}

function send() {
  let bairro = document.getElementById("select-bairro");
  let periodo = document.getElementById("select-periodo");
  let nome = document.getElementById("nome-input");
  let email = document.getElementById("email-input");
  let telefone = document.getElementById("telefone-input");
  let data = document.getElementById("data-input");
  let errorDiv = "";
  let error = false;

  if (bairro.value === "") {
    errorBairro();
    error = true;
  } else {
    errorDiv = document.getElementsByClassName("error-div-bairro")[0];
    errorDiv.innerHTML = `<span class='text-danger'></span>`;
  }
  if (data.value === "" || parseInt(data.value.slice(0,4)) < 1900 || parseInt(data.value.slice(0,4)) > 2004) {
    errorData();
    error = true;
  } else {
    errorDiv = document.getElementsByClassName("error-div-data")[0];
    errorDiv.innerHTML = `<span class='text-danger'></span>`;
  }
  if (validacaoEmail(email.value)) {
    errorEmail();
    error = true;
  } else {
    errorDiv = document.getElementsByClassName("error-div-email")[0];
    errorDiv.innerHTML = `<span class='text-danger'></span>`;
  }

  if (nome.value === "") {
    errorNome();
    error = true;
  } else {
    errorDiv = document.getElementsByClassName("error-div-nome")[0];
    errorDiv.innerHTML = `<span class='text-danger'></span>`;
  }

  if (telefone.value.length < 14) {
    errorTelefone();
    error = true;
  } else {
    errorDiv = document.getElementsByClassName("error-div-telefone")[0];
    errorDiv.innerHTML = `<span class='text-danger'></span>`;
  }

  if (periodo.value === "") {
    errorPeriodo();
    error = true;
  } else {
    errorDiv = document.getElementsByClassName("error-div-periodo")[0];
    errorDiv.innerHTML = `<span class='text-danger'></span>`;
  }
  if (!error) {
    infoSuccess();
  }
  /*    if(!email.value.contains('@') && !email.value.contains('@')){
        errorEmail()
        error = true
    }else{
        let errorDiv = document.getElementsByClassName('error-div-email')[0]
        errorDiv.innerHTML = `<span class='text-danger'></span>`
    }*/
}
criaBairrosOptions();
document.getElementById("btn").addEventListener("click", () => send());
