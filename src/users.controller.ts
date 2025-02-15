import { Controller, Inject } from '@nestjs/common';
import { Subject } from 'rxjs';

@Controller('/users') // external cors check 'app.localhost'
export class UsersController {
  constructor(@Inject('EVENT_STORE') private evenBus$: Subject<any>) {
    console.log(this.evenBus$);
  }
}
