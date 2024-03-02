export type DeputadosData = {
  dados: DeputadosType[];
};

export type DeputadosType = {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
};

export type ItemSelectedList = {
  selected: DeputadosType;
  isSelected: boolean;
};

export type ParamsPagina = {
  id: string;
};

export type DeputadoType = {
  dados: {
    id: number;
    uri: string;
    nomeCivil: string;
    ultimoStatus: {
      id: number;
      uri: string;
      nome: string;
      siglaPartido: string;
      uriPartido: string;
      siglaUf: string;
      idLegislatura: number;
      urlFoto: string;
      email: string;
      data: string;
      nomeEleitoral: string;
      gabinete: {
        nome: string;
        predio: string;
        sala: string;
        andar: string;
        telefone: string;
        email: string;
      };
      situacao: string;
      condicaoEleitoral: string;
      descricaoStatus: null | string;
    };
    cpf: string;
    sexo: string;
    urlWebsite: null | string;
    redeSocial: string[];
    dataNascimento: string;
    dataFalecimento: null | string;
    ufNascimento: string;
    municipioNascimento: string;
    escolaridade: string;
  };
  links: {
    rel: string;
    href: string;
  }[];
}
