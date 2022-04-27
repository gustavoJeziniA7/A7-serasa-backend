interface L021117 {
  "id": Number,
  "id_mailing": Number,
  "potenc_segc": String,
  "aaaammdd_segc": String,
  "cod_fxa_sgc": String,
  "descr_fxa_sgc": String,
  "vlr_fxa_de_sgc": String,
  "vlr_fxa_ate_sgc": String,
  "cod_fxa_med_sgc": String,
  "descr_fxa_med_sgc": String,
  "vlr_fxa_de_med_sgc": String,
  "vlr_fxa_ate_med_sgc": String,
  "seg_info": String,
  "reservado_serasa": String
}



const tratarL021117 = (bloco: any) => {
  const data = bloco[0]['L021117']
  const dadoTratado = data.map((l: L021117) => {
    const {
      potenc_segc,
      aaaammdd_segc,
      cod_fxa_sgc,
      descr_fxa_sgc,
      vlr_fxa_de_sgc,
      vlr_fxa_ate_sgc,
      cod_fxa_med_sgc,
      descr_fxa_med_sgc,
      vlr_fxa_de_med_sgc,
      vlr_fxa_ate_med_sgc,
      seg_info,
      reservado_serasa
    } = l;

    const FORNECEDORES = {
      DESCRIÇÃO_DO_NEGÓCIO: potenc_segc,
      DATA_POTENCIAL: aaaammdd_segc,
      CÓDIGO_DA_FAIXA_VALOR_POTENCIAL: cod_fxa_sgc,
      DESCRIÇÃO_DA_FAIXA_VALOR_POTENCIAL: descr_fxa_sgc,
      VALOR_POTENCIAL__DE: vlr_fxa_de_sgc,
      VALOR_POTENCIAL__ATÉ: vlr_fxa_ate_sgc,
      CÓDIGO_DA_FAIXA_MÉDIA_POTENCIAL: cod_fxa_med_sgc,
      DESCRIÇÃO_DA_FAIXA_MÉDIA_POTENCIAL: descr_fxa_med_sgc,
      VALOR_MÉDIA_POTENCIAL__DE: vlr_fxa_de_med_sgc,
      VALOR_MÉDIA_POTENCIAL__ATÉ: vlr_fxa_ate_med_sgc,
      SEGMENTO_ORIGEM_DA_INFORMAÇÃO: seg_info,
      ÁREA_RESERVADA: reservado_serasa,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021117;
