import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.route';
import { AccountsListComponent } from './account-list.component';
@NgModule({
    declarations:[
       AccountComponent, AccountsListComponent
    ],
    imports:[
       BrowserModule,
       FormsModule,
       HttpClientModule, 
       RouterModule.forChild(accountRoutes)
    ],
    exports:[
        AccountComponent, AccountsListComponent, RouterModule
    ],
    bootstrap:[],
    providers:[AccountService]
})
export class AccountModule{

}