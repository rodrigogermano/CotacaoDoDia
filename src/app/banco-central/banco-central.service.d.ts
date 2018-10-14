import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class BancoCentralService {
    private httpClient;
    constructor(httpClient: HttpClient);
    GetCotacao(codMoeda: string): Observable<any>;
}
