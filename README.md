# CotacaoDoDia

Projeto com foco no estudo de reaproveitamento de módulos feitos em [Angular](https://angular.io);
Criei um serviço para consultar as cotações das principais moedas usando API do [Banco Central](https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/swagger-ui3#/).

## Development server

Para rodar o projeto basta executar o comando `ng serve`. Depois acesse o endereço `http://localhost:4200`

## Build

O projeto possui uma interface simples que exibe as cotações. Caso atenda use o comando `ng build` que será gerado uma pasta `dist\` com build do projeto.
Se sua intenção é disponibilizar o módulo para reaproveitar em algum momento. Use o comando `npm run packagr`  que será gerado uma pasta `dist\` com código compilado no formato de uma pacote do [Angular](https://angular.io).

