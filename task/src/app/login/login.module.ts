import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule } from './login-routing.moudle';
import {ShardModule} from '../shard/shard.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    ShardModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
