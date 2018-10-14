import { OnInit } from '@angular/core';
import { BancoCentralService } from './banco-central.service';
import { Observable } from 'rxjs';
export declare class BancoCentralComponent implements OnInit {
    private API;
    Dolar: Observable<any>;
    Euro: Observable<any>;
    Libra: Observable<any>;
    Iene: Observable<any>;
    constructor(API: BancoCentralService);
    ngOnInit(): void;
}
