import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}

  getUsers(): any {
    return this.prisma.user.findMany();
  }

  createUser(data: { name?: string; email: string }): any {
    return this.prisma.user.create({ data })
  }

  getUserDetail(id: number): any {
    return this.prisma.user.findUnique({ where : { id } })
  }

  updateUser(id: number, data: { name?: string, email: string }): any {
    return this.prisma.user.update({
      where: { id: id },
      data: data
    })
  }

  deleteUser(id: number): any {
    return this.prisma.user.delete({ where: { id } })
  }

}
