import type { SessionUser } from '@restaurant-crm/types';
import type { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user: SessionUser;
}
