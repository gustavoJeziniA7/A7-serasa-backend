interface L021115 {
  "id": Number,
  "id_mailing": Number,
  "des_per_segc": String,
  "ano1_prf_segc": String,
  "mes1_prf_segc": String,
  "mes_desp_segc": String,
  "cod1_faixa": String,
  "descr1_faixa": String,
  "vlr1_faixa_de": String,
  "vlr1_faixa_ate": String,
  "perc1_faixa_de": String,
  "perc1_faixa_ate":String,
  "pma1_faixa_de": String,
  "pma1_faixa_ate": String,
  "seg_info": String,
  "reservado_serasa": String
}



const tratarL021115 = (bloco: any) => {
  const data = bloco[0]['L021115']
  const dadoTratado = data.map((l: L021115) => {
    const {
      des_per_segc,
      ano1_prf_segc,
      mes1_prf_segc,
      mes_desp_segc,
      cod1_faixa,
      descr1_faixa,
      vlr1_faixa_de,
      vlr1_faixa_ate,
      perc1_faixa_de,
      perc1_faixa_ate,
      pma1_faixa_de,
      pma1_faixa_ate,
      seg_info,
      reservado_serasa
    } = l;

    const FORNECEDORES = {
      DESCRIÇÃO_DO_PERÍODO_DO_HISTÓRICO_DE_PAGAMENTOS: des_per_segc,
      ANO_DO_PAGAMENTO: ano1_prf_segc,
      MÊS_DO_PAGAMENTO: mes1_prf_segc,
      DESCRIÇÃO_DO_MÊS_DO_PAGAMENTO: mes_desp_segc,
      CÓDIGO_DA_FAIXA_VALOR_PAGAMENTO:cod1_faixa ,
      DESCRIÇÃO_DA_FAIXA_VALOR_PAGAMENTO: descr1_faixa,
      VALOR_PAGAMENTO__DE: vlr1_faixa_de,
      VALOR_PAGAMENTO__ATE: vlr1_faixa_ate,
      PERCENTUAL_PAGAMENTO__DE: perc1_faixa_de,
      PERCENTUAL_PAGAMENTO__ATE: perc1_faixa_ate,
      PRAZO_MÉDIO_DE_ATRASO__DE: pma1_faixa_de,
      PRAZO_MÉDIO_DE_ATRASO__PARA: pma1_faixa_ate,
      SEGMENTO_ORIGEM_DA_INFORMAÇÃO: seg_info,
      ÁREA_RESERVADA: reservado_serasa,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021115;
