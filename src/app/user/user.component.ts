import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string
//   avatar: string
//   name: string
// }

interface User {
  id: string
  avatar: string
  name: string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  // With signals
  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => 'assets/users/' + this.avatar())

  onSelectUser() {
    //Emits the event to the parent component, along with the current user id
    this.select.emit(this.user.id)
  }
}
