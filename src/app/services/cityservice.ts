import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';

@Injectable()
export class CityService {

    constructor(private http: Http) { }

    getCities(): Promise<City[]> {
        return this.http.get('assets/json/city.json')
            .toPromise()
            .then(res => <City[]>res.json().data);
    }
}
