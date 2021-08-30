import {Component, OnInit} from '@angular/core';
import {PersonService} from "../person.service";
import {Person} from "../person";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addressLine1 = '12613 Seattle Slew Dr';
  city = 'Houston';
  state = 'TX';
  zipcode = '77065';
  person?: Person;

  constructor(private personService: PersonService) {
  }

  getPerson(): void {

    this.personService.getPerson().subscribe(person => this.person = person);
  }

  ngOnInit() {
    this.getPerson();

  }

  save(): void {
    let person = Person;
    person.first_name = "firstName";
    person.last_name = "lastName";
    this.personService.addNewPerson(person);

  }
}

