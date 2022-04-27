interface L021125 {
  "id": Number,
  "id_mailing": Number,
  "des_per": String,
  "ano1_prf": String,
  "mes1_prf": String,
  "mes_desp": String,
  "cod_faixa": String,
  "descr_faixa": String,
  "vlr_faixa_de": String,
  "vlr_faixa_ate": String,
  "perc_faixa_de": String,
  "perc_faixa_ate": String,
  "pma_faixa_de": String,
  "pma_faixa_ate": String,
  "reservado_serasa": String
}



const tratarL021125 = (bloco: any) => {
  const data = bloco[0]['L021125']
  const dadoTratado = data.map((l: L021125) => {
    const {
      des_per,
      ano1_prf,
      mes1_prf,
      mes_desp,
      cod_faixa,
      descr_faixa,
      vlr_faixa_de,
      vlr_faixa_ate,
      perc_faixa_de,
      perc_faixa_ate,
      pma_faixa_de,
      pma_faixa_ate,
      reservado_serasa
    } = l;

    const FORNECEDORES = {
      DESCRIÇÃO_DO_PERÍODO_DO_HISTÓRICO_DE_PAGAMENTOS: des_per,
      ANO_DO_PAGAMENTO: ano1_prf,
      MÊS_DO_PAGAMENTO: mes1_prf,
      DESCRIÇÃO_DO_MÊS_DO_PAGAMENTO: mes_desp,
      CÓDIGO_DA_FAIXA: cod_faixa,
      DESCRIÇÃO_DA_FAIXA: descr_faixa,
      VALOR_PAGAMENTO__DE: vlr_faixa_de,
      VALOR_PAGAMENTO__ATE: vlr_faixa_ate,
      PERCENTUAL_DE_PAGAMENTO__DE: perc_faixa_de,
      PERCENTUAL_PAGAMENTO__ATE: perc_faixa_ate,
      PRAZO_MEDIO_DE_ATRASO__DE: pma_faixa_de,
      PRAZO_MEDIO_DE_ATRASO__PARA: pma_faixa_ate,
      ÁREA_RESERVADA: reservado_serasa,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021125;
