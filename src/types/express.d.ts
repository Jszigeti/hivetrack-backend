import { UserRole } from '@prisma/client';

namespace Express {
  export interface Request {
    user: {
      sub: number;
      role: UserRole;
    };
    token: string;
  }
}
