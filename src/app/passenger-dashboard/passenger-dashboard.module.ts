import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers - Smart components
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//Dumb/Statless/Presentaional compnents
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }
