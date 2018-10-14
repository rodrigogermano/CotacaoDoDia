import { Component, Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CotacaoDoDia';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-root',
                    template: "<app-banco-central></app-banco-central>\n\n",
                    styles: [""]
                }] }
    ];
    return AppComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ BancoCentralService.ngInjectableDef = defineInjectable({ factory: function BancoCentralService_Factory() { return new BancoCentralService(inject(HttpClient)); }, token: BancoCentralService, providedIn: "root" });
    return BancoCentralService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BancoCentralComponent = /** @class */ (function () {
    function BancoCentralComponent(API) {
        this.API = API;
        this.Dolar = this.API.GetCotacao('USD');
        this.Euro = this.API.GetCotacao('EUR');
        this.Libra = this.API.GetCotacao('GBP');
        this.Iene = this.API.GetCotacao('JPY');
    }
    /**
     * @return {?}
     */
    BancoCentralComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BancoCentralComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-banco-central',
                    template: "<div class=\"card\">\n  <div class=\"card-header\">\n    Cota\u00E7\u00E3o do Dia\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Dolar</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Dolar | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Euro</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Euro | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Libra</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Libra | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Iene</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Iene | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n  </ul>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BancoCentralComponent.ctorParameters = function () { return [
        { type: BancoCentralService }
    ]; };
    return BancoCentralComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BancoCentralModule = /** @class */ (function () {
    function BancoCentralModule() {
    }
    BancoCentralModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    declarations: [
                        BancoCentralComponent
                    ],
                    exports: [
                        BancoCentralComponent
                    ]
                },] }
    ];
    return BancoCentralModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent
                    ],
                    imports: [
                        BrowserModule,
                        BancoCentralModule
                    ],
                    providers: [],
                    bootstrap: [AppComponent]
                },] }
    ];
    return AppModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BancoCentralModule, BancoCentralComponent, BancoCentralService, AppModule, AppComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY290YWNhby1kby1kaWEuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvdGFjYW8tZG8tZGlhL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm5nOi8vY290YWNhby1kby1kaWEvc3JjL2FwcC9iYW5jby1jZW50cmFsL2JhbmNvLWNlbnRyYWwuc2VydmljZS50cyIsIm5nOi8vY290YWNhby1kby1kaWEvc3JjL2FwcC9iYW5jby1jZW50cmFsL2JhbmNvLWNlbnRyYWwuY29tcG9uZW50LnRzIiwibmc6Ly9jb3RhY2FvLWRvLWRpYS9zcmMvYXBwL2JhbmNvLWNlbnRyYWwvYmFuY28tY2VudHJhbC5tb2R1bGUudHMiLCJuZzovL2NvdGFjYW8tZG8tZGlhL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdDb3RhY2FvRG9EaWEnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFuY29DZW50cmFsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cblxuICBHZXRDb3RhY2FvKGNvZE1vZWRhOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL29saW5kYS5iY2IuZ292LmJyL29saW5kYS9zZXJ2aWNvL1BUQVgvdmVyc2FvL3YxL29kYXRhL0NvdGFjYW9Nb2VkYURpYShtb2VkYT1AbW9lZGEsZGF0YUNvdGFjYW89QGRhdGFDb3RhY2FvKT8lNDBtb2VkYT0nJHtjb2RNb2VkYX0nJiU0MGRhdGFDb3RhY2FvPScxMC0xMC0yMDE4JyYlMjRmb3JtYXQ9anNvbiYlMjRzZWxlY3Q9cGFyaWRhZGVDb21wcmEscGFyaWRhZGVWZW5kYSxjb3RhY2FvQ29tcHJhLGNvdGFjYW9WZW5kYSxkYXRhSG9yYUNvdGFjYW8sdGlwb0JvbGV0aW1gKVxuICAgIC5waXBlKCAgICAgIFxuICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXNbJ3ZhbHVlJ10uZmluZCh4ID0+IHgudGlwb0JvbGV0aW0gPT0gXCJBYmVydHVyYVwiKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhbmNvQ2VudHJhbFNlcnZpY2UgfSBmcm9tICcuL2JhbmNvLWNlbnRyYWwuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1iYW5jby1jZW50cmFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhbmNvLWNlbnRyYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYW5jby1jZW50cmFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYW5jb0NlbnRyYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIERvbGFyOiBPYnNlcnZhYmxlPGFueT47XG4gIEV1cm86IE9ic2VydmFibGU8YW55PjtcbiAgTGlicmE6IE9ic2VydmFibGU8YW55PjtcbiAgSWVuZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgQVBJOiBCYW5jb0NlbnRyYWxTZXJ2aWNlKSB7IFxuICAgIHRoaXMuRG9sYXIgPSB0aGlzLkFQSS5HZXRDb3RhY2FvKCdVU0QnKTtcbiAgICB0aGlzLkV1cm8gPSB0aGlzLkFQSS5HZXRDb3RhY2FvKCdFVVInKTtcbiAgICB0aGlzLkxpYnJhID0gdGhpcy5BUEkuR2V0Q290YWNhbygnR0JQJyk7XG4gICAgdGhpcy5JZW5lID0gdGhpcy5BUEkuR2V0Q290YWNhbygnSlBZJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IEJhbmNvQ2VudHJhbENvbXBvbmVudCB9IGZyb20gJy4vYmFuY28tY2VudHJhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmFuY29DZW50cmFsQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCYW5jb0NlbnRyYWxDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYW5jb0NlbnRyYWxNb2R1bGUgeyB9XG5cblxuIiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEJhbmNvQ2VudHJhbE1vZHVsZSB9IGZyb20gJy4vYmFuY28tY2VudHJhbC9iYW5jby1jZW50cmFsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCYW5jb0NlbnRyYWxNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztxQkFRVSxjQUFjOzs7Z0JBTnZCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsdURBQW1DOztpQkFFcEM7O3VCQU5EOzs7Ozs7O0FDQUE7SUFVRSw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtLQUFLOzs7OztJQUUvQyx3Q0FBVTs7OztJQUFWLFVBQVcsUUFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxvSUFBa0ksUUFBUSwrSUFBNEksQ0FBQzthQUNqVCxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNMLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLElBQUksVUFBVSxHQUFBLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQ0gsQ0FBQztLQUNIOztnQkFkRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFVBQVU7Ozs4QkFEbkI7Ozs7Ozs7QUNBQTtJQWdCRSwrQkFBb0IsR0FBd0I7UUFBeEIsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qzs7OztJQUVELHdDQUFROzs7SUFBUjtLQUVDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNyQ0FBNkM7O2lCQUU5Qzs7OztnQkFQUSxtQkFBbUI7O2dDQUQ1Qjs7Ozs7OztBQ0FBOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGOzs2QkFoQkQ7Ozs7Ozs7QUNBQTs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCOztvQkFoQkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==