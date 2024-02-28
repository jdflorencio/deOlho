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
