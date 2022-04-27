interface L021107 {
  "id": Number,
  "id_mailing": Number,
  "potenc": String,
  "aaaamm": String,
  "cod_faixa_pot": String,
  "descr_faixa_pot": String,
  "vlr_faixa_de_pot": String,
  "vlr_faixa_ate_pot": String,
  "cod_faixa_med": String,
  "descr_faixa_med": String,
  "vlr_faixa_de_med": String,
  "vlr_faixa_ate_med": String,
  "seg0info": String,
  "reservado_serasa": String
}



const tratarL021107 = (bloco: any) => {
  const data = bloco[0]['L021107']
  const dadoTratado = data.map((l: L021107) => {
    const {
      potenc,
      aaaamm,
      cod_faixa_pot,
      descr_faixa_pot,
      vlr_faixa_de_pot,
      vlr_faixa_ate_pot,
      cod_faixa_med,
      descr_faixa_med,
      vlr_faixa_de_med,
      vlr_faixa_ate_med,
      seg0info,
      reservado_serasa
    } = l;

    const FORNECEDORES = {
      DESCRIÇÃO_DO_NEGÓCIO: potenc,
      DATA_POTENCIAL: aaaamm,
      CÓDIGO_DA_FAIXA_VALOR_POTENCIAL: cod_faixa_pot,
      DESCRIÇÃO_DA_FAIXA_VALOR_POTENCIAL: descr_faixa_pot ,
      VALOR_POTENCIAL__DE: vlr_faixa_de_pot,
      VALOR_POTENCIAL__ATÉ: vlr_faixa_ate_pot,
      CÓDIGO_DA_FAIXA_MÉDIA_POTENCIAL: cod_faixa_med,
      DESCRIÇÃO_DA_FAIXA_MÉDIA_POTENCIAL: descr_faixa_med,
      VALOR_DA_FAIXA_MÉDIA_POTENCIAL__DE: vlr_faixa_de_med,
      VALOR_DA_FAIXA_MÉDIA_POTENCIAL__ATÉ: vlr_faixa_ate_med,
      SEGMENTO_ORIGEM_DA_INFORMAÇÃO: seg0info,
      ÁREA_RESERVADA: reservado_serasa,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021107;
