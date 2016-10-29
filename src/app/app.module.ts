import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TestUtilizedService} from './test-utilized.service';
import { TestUnutilizedService } from './test-unutilized.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    providers: [TestUtilizedService, TestUnutilizedService],
    bootstrap: [AppComponent]
})

export class AppModule { }
