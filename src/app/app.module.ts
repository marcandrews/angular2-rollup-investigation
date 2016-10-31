import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TestUtilizedService} from './test-utilized.service';
import { TestUnutilizedService } from './test-unutilized.service';


import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [AppComponent],
    providers: [TestUtilizedService, TestUnutilizedService],
    bootstrap: [AppComponent]
})

export class AppModule { }
