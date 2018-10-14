/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BancoCentralService } from './banco-central.service';
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
export { BancoCentralComponent };
if (false) {
    /** @type {?} */
    BancoCentralComponent.prototype.Dolar;
    /** @type {?} */
    BancoCentralComponent.prototype.Euro;
    /** @type {?} */
    BancoCentralComponent.prototype.Libra;
    /** @type {?} */
    BancoCentralComponent.prototype.Iene;
    /** @type {?} */
    BancoCentralComponent.prototype.API;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuY28tY2VudHJhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3RhY2FvLWRvLWRpYS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuY28tY2VudHJhbC9iYW5jby1jZW50cmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFlNUQsK0JBQW9CLEdBQXdCO1FBQXhCLFFBQUcsR0FBSCxHQUFHLENBQXFCO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7S0FFQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixzckNBQTZDOztpQkFFOUM7Ozs7Z0JBUFEsbUJBQW1COztnQ0FENUI7O1NBU2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhbmNvQ2VudHJhbFNlcnZpY2UgfSBmcm9tICcuL2JhbmNvLWNlbnRyYWwuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1iYW5jby1jZW50cmFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhbmNvLWNlbnRyYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYW5jby1jZW50cmFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYW5jb0NlbnRyYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIERvbGFyOiBPYnNlcnZhYmxlPGFueT47XG4gIEV1cm86IE9ic2VydmFibGU8YW55PjtcbiAgTGlicmE6IE9ic2VydmFibGU8YW55PjtcbiAgSWVuZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgQVBJOiBCYW5jb0NlbnRyYWxTZXJ2aWNlKSB7IFxuICAgIHRoaXMuRG9sYXIgPSB0aGlzLkFQSS5HZXRDb3RhY2FvKCdVU0QnKTtcbiAgICB0aGlzLkV1cm8gPSB0aGlzLkFQSS5HZXRDb3RhY2FvKCdFVVInKTtcbiAgICB0aGlzLkxpYnJhID0gdGhpcy5BUEkuR2V0Q290YWNhbygnR0JQJyk7XG4gICAgdGhpcy5JZW5lID0gdGhpcy5BUEkuR2V0Q290YWNhbygnSlBZJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgfVxuXG59XG4iXX0=