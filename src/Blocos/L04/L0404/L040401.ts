interface L040401 {
  "id": Number,
  "id_mailing": Number,
  "ocor_acao": String,
  "data_acao": String,
  "natu": String,
  "aval_acao": String,
  "moed_acao": String,
  "valo_acao": String,
  "dist": String,
  "vara_acao": String,
  "cida_acao": String,
  "uf_acao": String,
  "msgsubjudice": String,
  "praca_aco": String,
  "distr_div": String,
  "vara_aco": String,
  "data_aco": String,
  "proc_aco": String,
  "cdnatu_aco": String,
  "reservado_serasa": String,
  "msg_subjud": String
}


const tratarL040401 = (bloco: any) => {
  const data = bloco[0]['L040401']
  const dadoTratado = data.map((l: L040401) => {
    const {
      ocor_acao,
      data_acao,
      natu,
      aval_acao,
      moed_acao,
      valo_acao,
      dist,
      vara_acao,
      cida_acao,
      uf_acao,
      msgsubjudice,
      praca_aco,
      distr_div,
      vara_aco,
      data_aco,
      proc_aco,
      cdnatu_aco,
      reservado_serasa,
      msg_subjud
    } = l;

    const APONTAMENTOS = {
      QUANTIDADE_OCORRÊNCIAS: ocor_acao,
      DATA_AÇÃO_JUDICIAL: data_acao,
      NATUREZA_DA_AÇÃO: natu,
      AVALISTA: aval_acao,
      MOEDA: moed_acao,
      VALOR_DA_AÇÃO: valo_acao,
      DISTRITO:dist,
      VARA_CIVEL: vara_acao,
      CIDADE_DA_AÇÃO: cida_acao,
      UNIDADE_DA_FEDERAÇÃO: uf_acao,
      SUBJUDICE__PRAÇA: praca_aco,
      SUBJUDICE__DISTRITO: distr_div,
      SUBJUDICE__VARA: vara_aco,
      SUBJUDICE__DATA: data_aco,
      SUBJUDICE__PROCESSO: proc_aco,
      CÓDIGO_DA_NATUREZA: cdnatu_aco,
      MENSAGEM_SUBJUDICE: msg_subjud,
      AREA_RESERVADA: reservado_serasa,
      legenda_mensagem: 'C-carta_anuência_entregue_pelo_credor E-carta_anuência_eletrônica_entregue_pelo_credor D-carta_anuência_entregue_pelo_devedor'
      // QUANDO NÃO EXISTIR A PRACA ESTA MENSAGEM FORMATADA É MOSTRADA EM
      // SUBSTITUIÇÃO AOS CAMPOS ABAIXO PRACA-ACO, DISTR-ACO, VARA-ACO, DATAACO E PROC-ACO.
      // CONFORME EXEMPLO: DIVIDA SUB JUDICE -
    }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040401;
