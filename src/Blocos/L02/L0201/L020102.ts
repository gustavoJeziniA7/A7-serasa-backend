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

const tratarL020102 = (bloco: L020102[]) => {
  bloco.map((v) => console.log(v))
}

export default tratarL020102;