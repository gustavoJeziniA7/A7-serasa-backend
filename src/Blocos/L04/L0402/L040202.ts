interface L040202 {
  "id": Number,
  "id_mailing": Number,
  "qtde_res": String,
  "disc": String,
  "mesi_des": String,
  "mesi": String,
  "anoi": String,
  "mesf_des": String,
  "mesf": String,
  "anof": String,
  "moed": String,
  "valo": String,
  "orig": String,
  "agpr": String,
  "total_res": String,
  "natureza": String
}


const tratarL040202 = (bloco: any) => {
  const data = bloco[0]['L040202']
  const dadoTratado = data.map((l: L040202) => {
    const {
      qtde_res,
      disc,
      mesi_des,
      mesi,
      anoi,
      mesf_des,
      mesf,
      anof,
      moed,
      valo,
      orig,
      agpr,
      total_res,
      natureza
    } = l;

    const APONTAMENTOS = {
      QUANTIDADE_OCORRÊNCIAS: qtde_res,
      DISC_27_C_GRUPO_DE_OCORRÊNCIA: disc,
      DESCRIÇÃO_DO_MÊS_INICIAL_DA_OCORRÊNCIA: mesi_des,
      MÊS_INICIAL_DA_OCORRÊNCIA: mesi,
      ANO_INICIAL_DA_OCORRÊNCIA: anoi,
      DESCRIÇÃO_DO_MÊS_FINAL_DA_OCORRÊNCIA: mesf_des,
      MÊS_FINAL_DA_OCORRÊNCIA: mesf,
      ANO_FINAL_DA_OCORRÊNCIA: anof,
      MOEDA_DA_OCORRÊNCIA: moed,
      VALOR_DA_OCORRÊNCIA: valo,
      ORIGEM_DA_OCORRÊNCIA: orig,
      AGENCIA_DA_OCORRÊNCIA: agpr,
      TOTAL_VALOR: total_res,
      CÓDIGO_DA_NATUREZA: natureza,
      legenda_para_codigo: '01 – pend.financeira (somente para autorizador) 03 – protesto 04 - ação judicial 05 – partic.falencia 06 - falencia/concordata 07 – dívida vencida 09 - cheque sem fundo achei 10 – refin (somente para autorizador)'
   }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040202;
