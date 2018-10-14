/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var BancoCentralService = /** @class */ (function () {
    function BancoCentralService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @param {?} codMoeda
     * @return {?}
     */
    BancoCentralService.prototype.GetCotacao = /**
     * @param {?} codMoeda
     * @return {?}
     */
    function (codMoeda) {
        return this.httpClient.get("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?%40moeda='" + codMoeda + "'&%40dataCotacao='10-10-2018'&%24format=json&%24select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim")
            .pipe(map(function (res) {
            return res['value'].find(function (x) { return x.tipoBoletim == "Abertura"; });
        }));
    };
    BancoCentralService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BancoCentralService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ BancoCentralService.ngInjectableDef = i0.defineInjectable({ factory: function BancoCentralService_Factory() { return new BancoCentralService(i0.inject(i1.HttpClient)); }, token: BancoCentralService, providedIn: "root" });
    return BancoCentralService;
}());
export { BancoCentralService };
if (false) {
    /** @type {?} */
    BancoCentralService.prototype.httpClient;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuY28tY2VudHJhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY290YWNhby1kby1kaWEvIiwic291cmNlcyI6WyJzcmMvYXBwL2JhbmNvLWNlbnRyYWwvYmFuY28tY2VudHJhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUFPbkMsNkJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7S0FBSzs7Ozs7SUFFL0Msd0NBQVU7Ozs7SUFBVixVQUFXLFFBQWdCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxvSUFBa0ksUUFBUSwrSUFBNEksQ0FBQzthQUNqVCxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsSUFBSSxVQUFVLEVBQTNCLENBQTJCLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQ0gsQ0FBQztLQUNIOztnQkFkRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFVBQVU7Ozs4QkFEbkI7O1NBUWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFuY29DZW50cmFsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cblxuICBHZXRDb3RhY2FvKGNvZE1vZWRhOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL29saW5kYS5iY2IuZ292LmJyL29saW5kYS9zZXJ2aWNvL1BUQVgvdmVyc2FvL3YxL29kYXRhL0NvdGFjYW9Nb2VkYURpYShtb2VkYT1AbW9lZGEsZGF0YUNvdGFjYW89QGRhdGFDb3RhY2FvKT8lNDBtb2VkYT0nJHtjb2RNb2VkYX0nJiU0MGRhdGFDb3RhY2FvPScxMC0xMC0yMDE4JyYlMjRmb3JtYXQ9anNvbiYlMjRzZWxlY3Q9cGFyaWRhZGVDb21wcmEscGFyaWRhZGVWZW5kYSxjb3RhY2FvQ29tcHJhLGNvdGFjYW9WZW5kYSxkYXRhSG9yYUNvdGFjYW8sdGlwb0JvbGV0aW1gKVxuICAgIC5waXBlKCAgICAgIFxuICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXNbJ3ZhbHVlJ10uZmluZCh4ID0+IHgudGlwb0JvbGV0aW0gPT0gXCJBYmVydHVyYVwiKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19