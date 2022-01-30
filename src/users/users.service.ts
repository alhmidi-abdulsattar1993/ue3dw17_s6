import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';

@Injectable()
export class UsersService {

constructor(@InjectModel('User') private readonly userModel: Model<Users>){}

  async create(createUserInput: CreateUserInput): Promise<Users> {
    return await this.userModel.save(firstname, lastname, email, createUserInput).exec();
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<Users> {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  async remove(id: string): Promise<Users> {
    return await this.userModel.findByIdAndRemove(id).exec();
  }
}
