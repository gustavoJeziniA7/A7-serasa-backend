interface L021108 {
  "id": Number,
  "id_mailing": Number,
  "des_his": String,
  "tot_cod_his": String,
  "tot_descr_his": String,
  "tot_qtd_his_de": String,
  "tot_qtd_his_ate": String,
  "perc_his_de": String,
  "perc_his_ate": String,
  "seg_info": String,
  "reservado_serasa": String
}



const tratarL021108 = (bloco: any) => {
  const data = bloco[0]['L021108']
  const dadoTratado = data.map((l: L021108) => {
    const {
      des_his,
      tot_cod_his,
      tot_descr_his,
      tot_qtd_his_de,
      tot_qtd_his_ate,
      perc_his_de,
      perc_his_ate,
      seg_info,
      reservado_serasa
    } = l;

    const FORNECEDORES = {
      DESCRIÇÃO_DO_PERÍODO: des_his,
      CÓDIGO_DA_FAIXA_QUANTIDADE_DO_PERÍODO: tot_cod_his,
      DESCRIÇÃO_DA_FAIXA_QUANTIDADE_DO_PERÍODO: tot_descr_his,
      QUANTIDADE_DO_PERÍODO__DE:tot_qtd_his_de,
      QUANTIDADE_DO_PERÍODO__ATE: tot_qtd_his_ate,
      PERCENTUAL_DO_PERÍODO__DE: perc_his_de,
      PERCENTUAL_DO_PERÍODO__ATE: perc_his_ate,
      SEGMENTO_ORIGEM_DA_INFORMACAO: seg_info,
      ÁREA_RESERVADA: reservado_serasa,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021108;
