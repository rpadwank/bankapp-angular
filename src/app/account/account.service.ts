import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BankAccount } from './account';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService{
   
    baseUrl = "http://localhost:4200";

    constructor( private http:HttpClient){}

    addNewAccount(account:BankAccount):Observable<BankAccount>{
        return this.http.post<BankAccount>(this.baseUrl+"/account",account);
    }
}