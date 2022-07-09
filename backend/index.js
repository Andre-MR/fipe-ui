const axios = require("axios");

exports.handler = async (event) => {
  const consulta = event.Consulta;
  let response;

  switch (consulta) {
    case "ConsultarTabelaDeReferencia":
      response = await axios
        .post("https://veiculos.fipe.org.br/api/veiculos//ConsultarTabelaDeReferencia")
      return JSON.stringify(response.data)

    case "ConsultarMarcas":
      response = await axios
        .post("https://veiculos.fipe.org.br/api/veiculos//ConsultarMarcas", {
          codigoTabelaReferencia: event.codigoTabelaReferencia,
          codigoTipoVeiculo: event.codigoTipoVeiculo
        })
      return JSON.stringify(response.data)

    case "ConsultarModelos":
      response = await axios
        .post("https://veiculos.fipe.org.br/api/veiculos//ConsultarModelos", {
          codigoTabelaReferencia: event.codigoTabelaReferencia,
          codigoTipoVeiculo: event.codigoTipoVeiculo,
          codigoMarca: event.codigoMarca
        })
      return JSON.stringify(response.data)

    case "ConsultarAnoModelo":
      response = await axios
        .post("https://veiculos.fipe.org.br/api/veiculos//ConsultarAnoModelo", {
          codigoTabelaReferencia: event.codigoTabelaReferencia,
          codigoTipoVeiculo: event.codigoTipoVeiculo,
          codigoMarca: event.codigoMarca,
          codigoModelo: event.codigoModelo
        })
      return JSON.stringify(response.data)

    case "ConsultarModelosAtravesDoAno":
      response = await axios
        .post("https://veiculos.fipe.org.br/api/veiculos//ConsultarModelosAtravesDoAno", {
          codigoTabelaReferencia: event.codigoTabelaReferencia,
          codigoTipoVeiculo: event.codigoTipoVeiculo,
          codigoMarca: event.codigoMarca,
          codigoModelo: event.codigoModelo,
          anoModelo: event.anoModelo
        })
      return JSON.stringify(response.data)

    case "ConsultarValorComTodosParametros":
      response = await axios
        .post("https://veiculos.fipe.org.br/api/veiculos//ConsultarValorComTodosParametros", {
          codigoTabelaReferencia: event.codigoTabelaReferencia,
          codigoTipoVeiculo: event.codigoTipoVeiculo,
          codigoMarca: event.codigoMarca,
          codigoModelo: event.codigoModelo,
          anoModelo: event.anoModelo,
          codigoTipoCombustivel: event.codigoTipoCombustivel,
          tipoConsulta: "tradicional"
        })
      return JSON.stringify(response.data)

    default:
      return {}
  }
};

