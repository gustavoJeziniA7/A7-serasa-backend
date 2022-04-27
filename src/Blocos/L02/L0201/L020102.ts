interface L020102 {
  "id": Number,
  "id_mailing": Number,
  "ft_consult": String,
  "ft_consult_perf": String,
  "ft_consult_evol": String,
  "ft_consul_potn": String,
  "ft_consul_potv": String,
  "reservado_serasa": String,
  "ft_consult_hist": String
}


const tratarL020102 = (bloco: any) => {
  const data = bloco[0]['L020102']
  const dadoTratado = data.map((l: L020102) => {
    const {
      ft_consult,
      ft_consult_perf,
      ft_consult_evol,
      ft_consul_potn,
      ft_consul_potv,
      reservado_serasa,
      ft_consult_hist
    } = l;

    const FORNECEDORES = {
      QTDE_DE_FONTES_DE_INFORMAÇÕES: ft_consult,
      HISTÓRICO_DE_PAGTOS: ft_consult_perf,
      EVOLUÇÃO_DE_COMPROMISSO: ft_consult_evol,
      REFERENCIAIS_DE_NEGÓCIOS: ft_consul_potn,
      REFERENCIAIS_DE_NEGÓCIOS_COM_PAGAMENTO_A_VISTA: ft_consul_potv,
      ÁREA_RESERVADA: reservado_serasa,
      HISTÓRICO_DE_PAGAMENTOS: ft_consult_hist
    }

    return FORNECEDORES;
  })

  return (dadoTratado);


}

export default tratarL020102;
