import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: `<H1>Nadeems Company</H1>
                <app-list></app-list>
                <app-details></app-details>`,
  styleUrls: [ './app.component.css' ],
  providers: [ EmployeeService ]
})
export class AppComponent  {
  name = 'Angular';
}
