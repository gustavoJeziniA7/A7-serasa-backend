interface L030101 {
  "id": Number,
  "id_mailing": Number,
  "ano_cons": String,
  "mes_cons": String,
  "mes_des_com": String,
  "qtd_cons": String,
  "qtd_bco_cons": String,
  "ind_bco_emp": String,
  "reservado": String
}


const tratarL030101 = (bloco: any) => {
  const data = bloco[0]['L030101']
  const dadoTratado = data.map((l: L030101) => {
    const {
      ano_cons,
      mes_cons,
      mes_des_com,
      qtd_cons,
      qtd_bco_cons,
      ind_bco_emp,
      reservado
    } = l;

    const CONSULTAS = {
      ANO_DA_CONSULTA: ano_cons,
      MÊS_DA_CONSULTA: mes_cons,
      DESCRIÇÃO_DO_MÊS_DA_CONSULTA: mes_des_com,
      QUANTIDADE_DE_CONSULTAS_POR_EMPRESA: qtd_cons,
      QUANTIDADE_DE_CONSULTAS_POR_FINANCEIRA: qtd_bco_cons,
      INDICADOR_BANCO_OU_EMPRESA: ind_bco_emp,
      ÁREA_RESERVADA: reservado,
      legenda: 'F=BANCO, C=EMPRESA, A=BANCO+EMPRESA'

    }

    return CONSULTAS;
  })

  return (dadoTratado);


}

export default tratarL030101;
