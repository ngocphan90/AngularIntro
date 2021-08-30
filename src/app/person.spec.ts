import { Person } from './person';
import {PersonService} from "./person.service";

describe('Person', () => {
  it('should create an instance', () => {
    expect(PersonService).toBeTruthy();
  });
});
