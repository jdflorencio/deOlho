import { Pipe, PipeTransform } from '@angular/core';
import { DeputadosType } from '../../../../models/deputadosData';
import { deputadosDataList } from '../../../../services/deputadosDataList';
@Pipe({
  name: 'searchFilterPipe',
})
export class SearchFilterPipe implements PipeTransform {
  transform(deputados: DeputadosType[], searchText: string): DeputadosType[] {
    searchText = searchText.toLowerCase();

    if (searchText.length >= 3) {
      return deputadosDataList.dados.filter((deputado) =>
        deputado.nome.toLowerCase().includes(searchText)
      );
    }

    return []
  }
}
