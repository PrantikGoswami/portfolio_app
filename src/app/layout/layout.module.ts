import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgZorroAntdModule } from "../ng-zorro-module";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout.component";
import { ContentLinkComponent } from './content-link/content-link.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContentLinkComponent
  ],
  imports: [
    NgZorroAntdModule,
    BrowserModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
