import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  findOne(@Body() auth: LoginDto): Promise<boolean> {
    return this.loginService.findOne(auth);
  }
}
