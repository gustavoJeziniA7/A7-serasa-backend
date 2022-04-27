interface L021106 {
  "id": Number,
  "id_mailing": Number,
  "ano_evo": String,
  "mes_evo": String,
  "mes_dese": String,
  "cod_faixa_venc": String,
  "descr_faixa_venc": String,
  "vlr_faixa_de_venc": String,
  "vlr_faixa_ate_venc": String,
  "cod_faixa_avenv": String,
  "descr_faixa_aven": String,
  "vlr_faixa_de_aven": String,
  "vlr_faixa_ate_aven": String,
  "reservado_serasa": String
}



const tratarL021106 = (bloco: any) => {
  const data = bloco[0]['L021106']
  const dadoTratado = data.map((l: L021106) => {
    const {
      ano_evo,
      mes_evo,
      mes_dese,
      cod_faixa_venc,
      descr_faixa_venc,
      vlr_faixa_de_venc,
      vlr_faixa_ate_venc,
      cod_faixa_avenv,
      descr_faixa_aven,
      vlr_faixa_de_aven,
      vlr_faixa_ate_aven,
      reservado_serasa
    } = l;

    const FORNECEDORES = {
      ANO_DO_COMPROMISSO: ano_evo,
      MÊS_DO_COMPROMISSO: mes_evo,
      DESCRIÇÃO_MÊS_DO_COMPROMISSO: mes_dese,
      CÓDIGO_DA_FAIXA_VENCIDOS: cod_faixa_venc,
      DESCRIÇÃO_DA_FAIXA_VENCIDOS: descr_faixa_venc,
      VALOR_DOS_COMPROMISSOS_VENCIDOS__DE: vlr_faixa_de_venc,
      VALOR_DOS_COMPROMISSOS_VENCIDOS__ATE: vlr_faixa_ate_venc,
      CÓDIGO_DA_FAIXA_A_VENCER: cod_faixa_avenv,
      DESCRIÇÃO_DA_FAIXA_A_VENCER: descr_faixa_aven,
      VALOR_DOS_COMPROMISSOS_A_VENCER__DE: vlr_faixa_de_aven,
      VALOR_DOS_COMPROMISSOS_A_VENCER__ATE: vlr_faixa_ate_aven,
      ÁREA_RESERVADA: reservado_serasa,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021106;
