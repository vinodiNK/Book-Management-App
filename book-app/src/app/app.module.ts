import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- add
    FormsModule       // <-- add
  ],
  ...
})
export class AppModule { }
