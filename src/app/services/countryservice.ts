import { Country } from './../models/country';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CountryService {

    constructor(private http: Http) { }

    getCountries(): Promise<Country[]> {
        return this.http.get('assets/json/country.json')
            .toPromise()
            .then(res => <Country[]>res.json().countries);
    }
}
