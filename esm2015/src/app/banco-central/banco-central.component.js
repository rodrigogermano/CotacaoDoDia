/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BancoCentralService } from './banco-central.service';
export class BancoCentralComponent {
    /**
     * @param {?} API
     */
    constructor(API) {
        this.API = API;
        this.Dolar = this.API.GetCotacao('USD');
        this.Euro = this.API.GetCotacao('EUR');
        this.Libra = this.API.GetCotacao('GBP');
        this.Iene = this.API.GetCotacao('JPY');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BancoCentralComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-banco-central',
                template: "<div class=\"card\">\n  <div class=\"card-header\">\n    Cota\u00E7\u00E3o do Dia\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Dolar</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Dolar | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Euro</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Euro | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Libra</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Libra | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"d-flex bd-highlight\">\n        <div class=\"p-2 w-100 bd-highlight\">Iene</div>\n        <div class=\"p-2 flex-shrink-1 bd-highlight\">{{ (Iene | async)?.cotacaoCompra }}</div>\n      </div>\n    </li>\n  </ul>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
BancoCentralComponent.ctorParameters = () => [
    { type: BancoCentralService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuY28tY2VudHJhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3RhY2FvLWRvLWRpYS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuY28tY2VudHJhbC9iYW5jby1jZW50cmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVE5RCxNQUFNOzs7O0lBT0osWUFBb0IsR0FBd0I7UUFBeEIsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qzs7OztJQUVELFFBQVE7S0FFUDs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzckNBQTZDOzthQUU5Qzs7OztZQVBRLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYW5jb0NlbnRyYWxTZXJ2aWNlIH0gZnJvbSAnLi9iYW5jby1jZW50cmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYmFuY28tY2VudHJhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYW5jby1jZW50cmFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFuY28tY2VudHJhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFuY29DZW50cmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBEb2xhcjogT2JzZXJ2YWJsZTxhbnk+O1xuICBFdXJvOiBPYnNlcnZhYmxlPGFueT47XG4gIExpYnJhOiBPYnNlcnZhYmxlPGFueT47XG4gIEllbmU6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFQSTogQmFuY29DZW50cmFsU2VydmljZSkgeyBcbiAgICB0aGlzLkRvbGFyID0gdGhpcy5BUEkuR2V0Q290YWNhbygnVVNEJyk7XG4gICAgdGhpcy5FdXJvID0gdGhpcy5BUEkuR2V0Q290YWNhbygnRVVSJyk7XG4gICAgdGhpcy5MaWJyYSA9IHRoaXMuQVBJLkdldENvdGFjYW8oJ0dCUCcpO1xuICAgIHRoaXMuSWVuZSA9IHRoaXMuQVBJLkdldENvdGFjYW8oJ0pQWScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxufVxuIl19