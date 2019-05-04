import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations:[
       AccountComponent
    ],
    imports:[
       BrowserModule,
       FormsModule,
       HttpClientModule
    ],
    exports:[
        AccountComponent
    ],
    bootstrap:[],
    providers:[AccountService]
})
export class AccountModule{

}