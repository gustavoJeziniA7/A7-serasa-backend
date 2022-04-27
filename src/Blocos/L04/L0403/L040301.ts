interface L040301 {
  "id": Number,
  "id_mailing": Number,
  "ocor_prot": String,
  "data_prot": String,
  "moed_prot": String,
  "valo_prot": String,
  "cart": String,
  "cida_prot": String,
  "uf_prot": String,
  "msgsubjudice": String,
  "praca_pro": String,
  "distr_pro": String,
  "vara_pro": String,
  "data_pro": String,
  "proc_pro": String,
  "cdnatu_pro": String,
  "reservado_serasa": String,
  "tpanue_prot": String,
  "dtanue_prot": String,
  "msg_subjud": String
}


const tratarL040301 = (bloco: any) => {
  const data = bloco[0]['L040301']
  const dadoTratado = data.map((l: L040301) => {
    const {
      ocor_prot,
      data_prot,
      moed_prot,
      valo_prot,
      cart,
      cida_prot,
      uf_prot,
      msgsubjudice,
      praca_pro,
      distr_pro,
      vara_pro,
      data_pro,
      proc_pro,
      cdnatu_pro,
      reservado_serasa,
      tpanue_prot,
      dtanue_prot,
      msg_subjud
    } = l;

    const APONTAMENTOS = {
      QUANTIDADE_OCORRÊNCIAS: ocor_prot,
      DATA_DO_PROTESTO: data_prot,
      MOEDA: moed_prot,
      VALOR_DO_PROTESTO: valo_prot,
      CARTÓRIO: cart,
      CIDADE_OCORRÊNCIA: cida_prot,
      UNIDADE_DA_FEDERAÇÃO: uf_prot,
      SUBJUDICE__PRAÇA: praca_pro,
      SUBJUDICE__DISTRITO: distr_pro,
      SUBJUDICE__VARA: vara_pro,
      SUBJUDICE__DATA: data_pro,
      SUBJUDICE__PROCESSO: proc_pro,
      CÓDIGO_DA_NATUREZA: cdnatu_pro,
      ÁREA_RESERVADA: reservado_serasa,
      TIPO_CARTA_ANUÊNCIA: tpanue_prot,
      DATA_DE_RECEBIMENTO_DA_CARTA_DE_ANUÊNCIA: dtanue_prot,
      MENSAGEM_SUBJUDICE: msg_subjud,
      legenda_mensagem: 'C-carta_anuência_entregue_pelo_credor E-carta_anuência_eletrônica_entregue_pelo_credor D-carta_anuência_entregue_pelo_devedor'
    }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040301;
