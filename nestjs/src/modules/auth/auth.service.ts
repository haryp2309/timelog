import { passwordHashConstants } from '@/modules/auth/constants';
import { CustomJwtService } from '@/modules/auth/customJwt.service';
import { PrismaService } from '@/modules/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: CustomJwtService,
  ) {}

  async signIn(email?: string, password?: string) {
    if (!email || !password) {
      throw new BadRequestException();
    }
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        name: true,
        email: true,
        password: true,
      },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const { password: encryptedPass, ...userFields } = user;
    const validPassword = await compare(password, encryptedPass);

    if (!validPassword) {
      throw new UnauthorizedException();
    }

    return {
      ...userFields,
      accessToken: await this.jwtService.sign(user.email),
    };
  }

  async signUp(name?: string, email?: string, password?: string) {
    if (!email || !password || !name) {
      throw new BadRequestException();
    }

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await hash(password, passwordHashConstants.salt);

    await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }
}
