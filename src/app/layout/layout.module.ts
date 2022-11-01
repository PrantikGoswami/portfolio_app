import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "../ng-zorro-module";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout.component";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    NgZorroAntdModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
