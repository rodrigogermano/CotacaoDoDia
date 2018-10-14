(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('cotacao-do-dia', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global['cotacao-do-dia'] = {}),global.ng.core,global.ng.common.http,global.rxjs.operators,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,i0,i1,operators,common,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AppComponent = (function () {
        function AppComponent() {
            this.title = 'CotacaoDoDia';
        }
        AppComponent.decorators = [
            { type: i0.Component, args: [{
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
    var BancoCentralService = (function () {
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
                    .pipe(operators.map(function (res) {
                    return res['value'].find(function (x) { return x.tipoBoletim == "Abertura"; });
                }));
            };
        BancoCentralService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BancoCentralService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ BancoCentralService.ngInjectableDef = i0.defineInjectable({ factory: function BancoCentralService_Factory() { return new BancoCentralService(i0.inject(i1.HttpClient)); }, token: BancoCentralService, providedIn: "root" });
        return BancoCentralService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BancoCentralComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'app-banco-central',
                        template: "<div class=\"card\">\n  <div class=\"card-header\">\n    Cota\u00E7\u00E3o do Dia\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Dolar</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Dolar | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Euro</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Euro | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Libra</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Libra | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Iene</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Iene | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n  </ul>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BancoCentralComponent.ctorParameters = function () {
            return [
                { type: BancoCentralService }
            ];
        };
        return BancoCentralComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BancoCentralModule = (function () {
        function BancoCentralModule() {
        }
        BancoCentralModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1.HttpClientModule
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
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            AppComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
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

    exports.BancoCentralModule = BancoCentralModule;
    exports.BancoCentralComponent = BancoCentralComponent;
    exports.BancoCentralService = BancoCentralService;
    exports.AppModule = AppModule;
    exports.ɵa = AppComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY290YWNhby1kby1kaWEudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb3RhY2FvLWRvLWRpYS9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJuZzovL2NvdGFjYW8tZG8tZGlhL3NyYy9hcHAvYmFuY28tY2VudHJhbC9iYW5jby1jZW50cmFsLnNlcnZpY2UudHMiLCJuZzovL2NvdGFjYW8tZG8tZGlhL3NyYy9hcHAvYmFuY28tY2VudHJhbC9iYW5jby1jZW50cmFsLmNvbXBvbmVudC50cyIsIm5nOi8vY290YWNhby1kby1kaWEvc3JjL2FwcC9iYW5jby1jZW50cmFsL2JhbmNvLWNlbnRyYWwubW9kdWxlLnRzIiwibmc6Ly9jb3RhY2FvLWRvLWRpYS9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnQ290YWNhb0RvRGlhJztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhbmNvQ2VudHJhbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgR2V0Q290YWNhbyhjb2RNb2VkYTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9vbGluZGEuYmNiLmdvdi5ici9vbGluZGEvc2Vydmljby9QVEFYL3ZlcnNhby92MS9vZGF0YS9Db3RhY2FvTW9lZGFEaWEobW9lZGE9QG1vZWRhLGRhdGFDb3RhY2FvPUBkYXRhQ290YWNhbyk/JTQwbW9lZGE9JyR7Y29kTW9lZGF9JyYlNDBkYXRhQ290YWNhbz0nMTAtMTAtMjAxOCcmJTI0Zm9ybWF0PWpzb24mJTI0c2VsZWN0PXBhcmlkYWRlQ29tcHJhLHBhcmlkYWRlVmVuZGEsY290YWNhb0NvbXByYSxjb3RhY2FvVmVuZGEsZGF0YUhvcmFDb3RhY2FvLHRpcG9Cb2xldGltYClcbiAgICAucGlwZSggICAgICBcbiAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzWyd2YWx1ZSddLmZpbmQoeCA9PiB4LnRpcG9Cb2xldGltID09IFwiQWJlcnR1cmFcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYW5jb0NlbnRyYWxTZXJ2aWNlIH0gZnJvbSAnLi9iYW5jby1jZW50cmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYmFuY28tY2VudHJhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYW5jby1jZW50cmFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFuY28tY2VudHJhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFuY29DZW50cmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBEb2xhcjogT2JzZXJ2YWJsZTxhbnk+O1xuICBFdXJvOiBPYnNlcnZhYmxlPGFueT47XG4gIExpYnJhOiBPYnNlcnZhYmxlPGFueT47XG4gIEllbmU6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFQSTogQmFuY29DZW50cmFsU2VydmljZSkgeyBcbiAgICB0aGlzLkRvbGFyID0gdGhpcy5BUEkuR2V0Q290YWNhbygnVVNEJyk7XG4gICAgdGhpcy5FdXJvID0gdGhpcy5BUEkuR2V0Q290YWNhbygnRVVSJyk7XG4gICAgdGhpcy5MaWJyYSA9IHRoaXMuQVBJLkdldENvdGFjYW8oJ0dCUCcpO1xuICAgIHRoaXMuSWVuZSA9IHRoaXMuQVBJLkdldENvdGFjYW8oJ0pQWScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBCYW5jb0NlbnRyYWxDb21wb25lbnQgfSBmcm9tICcuL2JhbmNvLWNlbnRyYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJhbmNvQ2VudHJhbENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQmFuY29DZW50cmFsQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmFuY29DZW50cmFsTW9kdWxlIHsgfVxuXG5cbiIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYW5jb0NlbnRyYWxNb2R1bGUgfSBmcm9tICcuL2JhbmNvLWNlbnRyYWwvYmFuY28tY2VudHJhbC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQmFuY29DZW50cmFsTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm1hcCIsIkluamVjdGFibGUiLCJIdHRwQ2xpZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiQnJvd3Nlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzt5QkFRVSxjQUFjOzs7b0JBTnZCQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLHVEQUFtQzs7cUJBRXBDOzsyQkFORDs7Ozs7OztBQ0FBO1FBVUUsNkJBQW9CLFVBQXNCO1lBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7U0FBSzs7Ozs7UUFFL0Msd0NBQVU7Ozs7WUFBVixVQUFXLFFBQWdCO2dCQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLG9JQUFrSSxRQUFRLCtJQUE0SSxDQUFDO3FCQUNqVCxJQUFJLENBQ0hDLGFBQUcsQ0FBQyxVQUFBLEdBQUc7b0JBQ0wsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsSUFBSSxVQUFVLEdBQUEsQ0FBQyxDQUFDO2lCQUM1RCxDQUFDLENBQ0gsQ0FBQzthQUNIOztvQkFkRkMsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBTlFDLGFBQVU7Ozs7a0NBRG5COzs7Ozs7O0FDQUE7UUFnQkUsK0JBQW9CLEdBQXdCO1lBQXhCLFFBQUcsR0FBSCxHQUFHLENBQXFCO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7Ozs7UUFFRCx3Q0FBUTs7O1lBQVI7YUFFQzs7b0JBckJGSCxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0Isc3JDQUE2Qzs7cUJBRTlDOzs7Ozt3QkFQUSxtQkFBbUI7OztvQ0FENUI7Ozs7Ozs7QUNBQTs7OztvQkFLQ0ksV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLG1CQUFnQjt5QkFDakI7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLHFCQUFxQjt5QkFDdEI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLHFCQUFxQjt5QkFDdEI7cUJBQ0Y7O2lDQWhCRDs7Ozs7OztBQ0FBOzs7O29CQU1DRixXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFOzRCQUNaLFlBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQRyw2QkFBYTs0QkFDYixrQkFBa0I7eUJBQ25CO3dCQUNELFNBQVMsRUFBRSxFQUFFO3dCQUNiLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDMUI7O3dCQWhCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9