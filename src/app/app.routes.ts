import { ExtraOptions, Routes } from '@angular/router';

//components
import { HomeComponent } from '../modules/home/home.component';
import { ScheduleComponent } from '../modules/schedule/schedule.component';
import { ExhibitorsComponent } from '../modules/exhibitors/exhibitors.component';
import { OrganizingGroupComponent } from '../modules/organizing-group/organizing-group.component';
// import { CientificCommitteeComponent } from '../modules/cientific-committee/cientific-committee.component';
import { TheVenueComponent } from '../modules/the-venue/the-venue.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
    { path: 'home', component: HomeComponent},
    { path: 'schedule', component: ScheduleComponent},
    { path: 'speakers', component: ExhibitorsComponent},
    { path: 'organizator-committee', component: OrganizingGroupComponent},
    // { path: 'cientific-committee', component: CientificCommitteeComponent},
    { path: 'venue', component: TheVenueComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}, // any route, default
];

  