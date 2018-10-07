import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/primeng';


@Injectable()
export class CarService {

    constructor(private http: Http) { }

    getCars(): Promise<SelectItem[]> {
        return this.http.get('assets/json/cars.json')
            .toPromise()
            .then(res => <SelectItem[]>res.json().data);
    }
}
