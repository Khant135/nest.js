import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Making PrismaService globally available
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporting PrismaService to be used in other modules
})
export class PrismaModule {}
