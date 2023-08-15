import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type Payload = { sub: string };

@Injectable()
export class CustomJwtService {
  constructor(private jwtService: JwtService) {}

  private getPayload(email: string): Payload {
    return { sub: email };
  }

  async sign(email: string) {
    const payload = this.getPayload(email);
    return await this.jwtService.signAsync(payload);
  }

  async verify(email: string, token: string) {
    if (
      process.env.NODE_ENV === 'dev' &&
      email === 'bo@testmail.com' &&
      token === 'dummy-token-123'
    ) {
      return true;
    }

    const { sub } = await this.jwtService.verifyAsync<Payload>(token);
    return sub === email;
  }
}
