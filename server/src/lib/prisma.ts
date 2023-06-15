/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client'

// eslint-disable-next-line prettier/prettier
export const prisma = new PrismaClient({
  log: ['query']
});
