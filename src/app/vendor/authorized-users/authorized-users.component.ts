import { Component, OnInit,Input } from '@angular/core';
import { ContactInformation } from '../../@core/interfaces/common/contactInformation';
import { States } from '../../@core/interfaces/common/states';

@Component({
  selector: 'ngx-authorized-users',
  templateUrl: './authorized-users.component.html',
  styleUrls: ['./authorized-users.component.scss']
})
export class AuthorizedUsersComponent implements OnInit {

  @Input() authorizedUsers: Array<ContactInformation>;

  name: string;
  city: string;
  state: string;
  postalCode: string;

  statesList: Array<any> = States.getStates();

  showAddGuest: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  toggleAddGuest(){
    this.showAddGuest = !this.showAddGuest;
  }

  deleteGuest(idx: number){
    this.authorizedUsers.splice(idx,1);
  }

  addGuest(){
    let guest = <ContactInformation>{};
    guest.firstName = this.name;
    guest.cityName = this.city;
    guest.regionName = this.state;
    guest.postalCode = this.postalCode;
    this.authorizedUsers.push(guest);
    this.clearAddGuest();
    this.showAddGuest = false;
  }

  clearAddGuest(){
    this.name = null;
    this.city = null;
    this.state = null;
    this.postalCode = null;
  }

}
