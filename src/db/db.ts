import { PrismaClient } from '../generated/prisma';

export const db = new PrismaClient({
  log: ['info', 'warn', 'error'],
  errorFormat: 'pretty',
});
