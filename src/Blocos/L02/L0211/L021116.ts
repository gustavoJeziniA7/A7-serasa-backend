interface L021116 {
  "id": Number,
  "id_mailing": Number,
  "ano_sev_segc": String
  "mes_evo_segc": String,
  "mes_dese_segc": String,
  "cod_faixa_sven": "   ",
  "descr_faixa_sven": String,
  "vlr_faixa_de_sven": String,
  "vlr_faixa_ate_sven": String,
  "cod_faixa_save": String,
  "descr_faixa_save": String,
  "vlr_faixa_de_save": String,
  "vlr_faixa_ate_save": String,
  "reservado_serasa": String,
  "seg_info": String,
  "reservado_serasa_2": String
}



const tratarL021116 = (bloco: any) => {
  const data = bloco[0]['L021116']
  const dadoTratado = data.map((l: L021116) => {
    const {
      ano_sev_segc,
      mes_evo_segc,
      mes_dese_segc,
      cod_faixa_sven,
      descr_faixa_sven,
      vlr_faixa_de_sven,
      vlr_faixa_ate_sven,
      cod_faixa_save,
      descr_faixa_save,
      vlr_faixa_de_save,
      vlr_faixa_ate_save,
      reservado_serasa,
      seg_info,
      reservado_serasa_2
    } = l;

    const FORNECEDORES = {
      ANO_DO_COMPROMISSO: ano_sev_segc,
      MÊS_DO_COMPROMISSO: mes_evo_segc,
      DESCRIÇÃO_MÊS_DO_COMPROMISSO: mes_dese_segc,
      CÓDIGO_DA_FAIXA_VALOR_DOS_COMPROMISSOS_VENCIDOS: cod_faixa_sven,
      DESCRIÇÃO_DA_FAIXA_VALOR_DOS_COMPROMISSOS_VENCIDOS: descr_faixa_sven,
      VALOR_DOS_COMPROMISSOS_VENCIDOS__DE: vlr_faixa_de_sven,
      VALOR_DOS_COMPROMISSOS_VENCIDOS__ATÉ: vlr_faixa_ate_sven,
      CÓDIGO_DA_FAIXA_VALOR_DOS_COMPROMISSOS_A_VENCER: cod_faixa_save,
      DESCRIÇÃO_DA_FAIXA_VALOR_DOS_COMPROMISSOS_A_VENCER: descr_faixa_save,
      VALOR_DOS_COMPROMISSOS_A_VENCER__DE: vlr_faixa_de_save,
      VALOR_DOS_COMPROMISSOS_A_VENCER__ATE: vlr_faixa_ate_save,
      AREA_RESERVADA: reservado_serasa,
      ORIGEM_DA_INFORMAÇÃO: seg_info,
      AREA_RESERVADA2: reservado_serasa_2,
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL021116;
