// auth.js

let accessToken = ""; // Defina a variável accessToken no escopo global

function obterTokenDeAcesso() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  const clientId = "7485883853274633";
  const clientSecret = "0ioG2QbX77y94HkYcMG0xHQHKsZ1qv9v";
  const redirectUri = "https://metricspro.000webhostapp.com/webapp.html";
  const tokenEndpoint = "https://api.mercadolibre.com/oauth/token";

  if (code) {
    fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`,
    })
      .then((response) => response.json())
      .then((data) => {
        accessToken = data.access_token; // Atualize a variável accessToken com o token obtido
        console.log(accessToken); // Use o token de acesso para fazer requisições às APIs do Mercado Livre em nome do usuário autenticado
        iniciarRequest(); // Chame a função para fazer a requisição em request.js assim que o token for obtido
      })
      .catch((error) => {
        console.error("Erro ao obter o token de acesso:", error);
      });
  }
}

function getAccessToken() {
  return accessToken; // Função para retornar o token de acesso
}

obterTokenDeAcesso(); // Chame a função para obter o token de acesso assim que o arquivo for carregado

export { getAccessToken }; // Exporte a função para que possa ser importada em outros arquivos
