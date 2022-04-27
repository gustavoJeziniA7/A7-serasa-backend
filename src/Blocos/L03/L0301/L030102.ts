interface L030102 {
  "id": Number,
  "id_mailing": Number,
  "data_cons": String,
  "nm_cons": String,
  "qt_cons": String,
  "cnpj_cons": String,
  "reservado_1": String,
  "reservado_2": String
}


const tratarL030102 = (bloco: any) => {
  const data = bloco[0]['L030102']
  const dadoTratado = data.map((l: L030102) => {
    const {
      data_cons,
      nm_cons,
      qt_cons,
      cnpj_cons,
      reservado_1,
      reservado_2
    } = l;

    const CONSULTAS = {
      DATA_DA_CONSULTA: data_cons,
      NOME_DO_CLIENTE_CONSULTANTE: nm_cons,
      QUANTIDADE_DE_CONSULTAS_NO_DIA_PARA_CLIENTE:qt_cons ,
      CNPJ_DO_CLIENTE_CONSULTANTE: cnpj_cons,
      ÁREA_RESERVADA: reservado_1,
      ÁREA_RESERVADA2: reservado_2,


    }

    return CONSULTAS;
  })

  return (dadoTratado);


}

export default tratarL030102;
