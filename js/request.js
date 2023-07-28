// request.js

import { getAccessToken } from "./auth.js"; // Importe a função getAccessToken de auth.js

const questionsEndpoint = "https://api.mercadolibre.com/questions/search";

function iniciarRequest() {
  const accessToken = getAccessToken(); // Obtenha o token de acesso usando a função getAccessToken

  // Faça uma requisição GET para o endpoint das perguntas usando o token de acesso
  fetch(`${questionsEndpoint}?seller_id=SEU_SELLER_ID&api_version=4`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Aqui estão as perguntas recebidas pelo usuário autenticado
      console.log(data);

      // Faça algo com os dados das perguntas, exiba na interface do usuário, etc.
    })
    .catch((error) => {
      console.error("Erro ao obter as perguntas:", error);
    });
}
