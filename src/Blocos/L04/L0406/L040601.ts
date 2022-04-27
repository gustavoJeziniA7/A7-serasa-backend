interface L040601 {
  "id": Number,
  "id_mailing": Number,
  "ocor_fac": String,
  "data_fac": String,
  "tipo_fac": String,
  "origem_fac": String,
  "vara_fac": String,
  "cida_fac": String,
  "uf_fac": String,
  "cdnatu_fac": String,
  "reservado_serasa": String
}


const tratarL040601 = (bloco: any) => {
  const data = bloco[0]['L040601']
  const dadoTratado = data.map((l: L040601) => {
    const {
      ocor_fac,
      data_fac,
      tipo_fac,
      origem_fac,
      vara_fac,
      cida_fac,
      uf_fac,
      cdnatu_fac,
      reservado_serasa
    } = l;

    const APONTAMENTOS = {
QUANTIDADE_OCORRÊNCIAS: ocor_fac,
DATA_FACON: data_fac,
TIPO_DE_FACON: tipo_fac,
ORIGEM_DO_FACON: origem_fac,
VARA_CIVEL: vara_fac,
CIDADE_DO_FACON: cida_fac,
UNIDADE_DA_FEDERAÇÃO: uf_fac,
CODIGO_DA_NATUREZA: cdnatu_fac,
ÁREA_RESERVADA: reservado_serasa,
    }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040601;
