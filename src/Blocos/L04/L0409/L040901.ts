interface L040901 {
  "id": Number,
  "id_mailing": Number,
  "ocor": String,
  "data_ccf": String,
  "cheque": String,
  "qtde": String,
  "banco_ccf": String,
  "agenc_ccf": String,
  "cida_ccf": String,
  "uf_ccf": String,
  "cdnatu_achei": String,
  "reservado_serasa": String
}


const tratarL040901 = (bloco: any) => {
  const data = bloco[0]['L040901']
  const dadoTratado = data.map((l: L040901) => {
    const {
      ocor,
      data_ccf,
      cheque,
      qtde,
      banco_ccf,
      agenc_ccf,
      cida_ccf,
      uf_ccf,
      cdnatu_achei,
      reservado_serasa
    } = l;

    const APONTAMENTOS = {
    QUANTIDADE_OCORRÊNCIAS: ocor,
    DATA_DA_OCORRÊNCIA: data_ccf,
    NÚMERO_DO_CHEQUE: cheque,
    QUANTIDADE_NO_BANCO: qtde,
    BANCO: banco_ccf,
    AGÊNCIA: agenc_ccf,
    CIDADE: cida_ccf,
    UNIDADE_DA_FEDERAÇÃO: uf_ccf,
    CÓDIGO_DA_NATUREZA: cdnatu_achei,
    AREA_RESERVADA: reservado_serasa,
    }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040901;
