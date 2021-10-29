import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  // typically would be hashed in the database but for this I figured it would be sufficient
  private readonly auth = { answer: 'NOW!' };

  async findOne(auth: LoginDto): Promise<boolean> {
    return this.auth.answer === auth.answer;
  }
}
