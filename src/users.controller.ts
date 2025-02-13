import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/profile')
  getProfile(@Req() req: Request, @Res() res: Response) {
    const rn = ~~(Math.random() * 10 + 1);
    if (rn < 5) {
      return res.redirect('/users/account'); // ✅ Redirect to account
    } else {
      return res.redirect('/users/wallet'); // ✅ Redirect to wallet
    }
  }

  @Get('/account')
  redirectRouter() {
    return 'working account';
  }

  @Get('/wallet')
  redirectWallet() {
    return 'working wallet';
  }
}
