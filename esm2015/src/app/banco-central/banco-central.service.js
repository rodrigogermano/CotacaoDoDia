/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class BancoCentralService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @param {?} codMoeda
     * @return {?}
     */
    GetCotacao(codMoeda) {
        return this.httpClient.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?%40moeda='${codMoeda}'&%40dataCotacao='10-10-2018'&%24format=json&%24select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim`)
            .pipe(map(res => {
            return res['value'].find(x => x.tipoBoletim == "Abertura");
        }));
    }
}
BancoCentralService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BancoCentralService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ BancoCentralService.ngInjectableDef = i0.defineInjectable({ factory: function BancoCentralService_Factory() { return new BancoCentralService(i0.inject(i1.HttpClient)); }, token: BancoCentralService, providedIn: "root" });
if (false) {
    /** @type {?} */
    BancoCentralService.prototype.httpClient;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuY28tY2VudHJhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY290YWNhby1kby1kaWEvIiwic291cmNlcyI6WyJzcmMvYXBwL2JhbmNvLWNlbnRyYWwvYmFuY28tY2VudHJhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtyQyxNQUFNOzs7O0lBRUosWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtLQUFLOzs7OztJQUUvQyxVQUFVLENBQUMsUUFBZ0I7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGtJQUFrSSxRQUFRLDRJQUE0SSxDQUFDO2FBQ2pULElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLENBQUM7U0FDNUQsQ0FBQyxDQUNILENBQUM7S0FDSDs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhbmNvQ2VudHJhbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgR2V0Q290YWNhbyhjb2RNb2VkYTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9vbGluZGEuYmNiLmdvdi5ici9vbGluZGEvc2Vydmljby9QVEFYL3ZlcnNhby92MS9vZGF0YS9Db3RhY2FvTW9lZGFEaWEobW9lZGE9QG1vZWRhLGRhdGFDb3RhY2FvPUBkYXRhQ290YWNhbyk/JTQwbW9lZGE9JyR7Y29kTW9lZGF9JyYlNDBkYXRhQ290YWNhbz0nMTAtMTAtMjAxOCcmJTI0Zm9ybWF0PWpzb24mJTI0c2VsZWN0PXBhcmlkYWRlQ29tcHJhLHBhcmlkYWRlVmVuZGEsY290YWNhb0NvbXByYSxjb3RhY2FvVmVuZGEsZGF0YUhvcmFDb3RhY2FvLHRpcG9Cb2xldGltYClcbiAgICAucGlwZSggICAgICBcbiAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzWyd2YWx1ZSddLmZpbmQoeCA9PiB4LnRpcG9Cb2xldGltID09IFwiQWJlcnR1cmFcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==