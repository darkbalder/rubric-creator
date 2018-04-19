import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GetRubricsDataInterface } from '../interfaces/get-rubrics-data.interface';

@Injectable()
export class LocalStorageService implements GetRubricsDataInterface {
    constructor(private localStorage: LocalStorage) {}

    public getRubrics(): Observable<Array<RubricInterface>> {
        return this.get<Array<RubricInterface>>('rubrics')
            .filter(rubrics => rubrics !== null);
    }

    private get<T>(key: string): Observable<T> {
        return this.localStorage.getItem<T>(key);
    }

}