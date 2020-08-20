import { UserEntity } from './users/user.entity';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SingInDTO } from './singIn.dto';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SignInPayload } from './users/models/SignInPayload';
import { ErrorMessage } from './users/enums/ErrorMessage';
import { NotificationsService } from '../notifications/notifications.service';
import {UsersRepository} from "./users/user.repository"
import {MessageTypes} from "../notifications/notifications.service"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private notificationsService: NotificationsService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository
  ) {}

  async signIn(sigInDTO: SingInDTO) {
    const user = await this.usersService.findByEmail(sigInDTO.email);

    if (!user)
      throw new HttpException(
        ErrorMessage.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );

    if (await bcrypt.compare(sigInDTO.password, user.password)) {
      const sterilizedUserData = this.usersService.sanitizeUser(user);
      const payload = { id: user.id, email: user.email };

      const jwtToken = sign(payload, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRESIN_JWT,
      });

      const notificationToken = await this.notificationsService.findNotificationToken(
        sigInDTO.notificationToken,
      );
        

      if (!notificationToken) {
        this.notificationsService.saveNotificationToken(
          sigInDTO.notificationToken,
          user
        );
      }

      return {
        user: sterilizedUserData,
        token: jwtToken,
      };
    } else {
      throw new HttpException(
        ErrorMessage.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async validateUser(payload: SignInPayload) {
    return await this.usersService.findByPayload(payload);
  }
}
