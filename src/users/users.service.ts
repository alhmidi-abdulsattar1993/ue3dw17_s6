import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Users } from './schemas/users.schema';

@Injectable()
export class UsersService {

constructor(@InjectModel('User') private readonly userModel: Model<Users>){}

 // Works and tested
  async  create(createUserInput: CreateUserInput): Promise<Users>{
    return await this.userModel.create(createUserInput);
  }
  //works and tested
  async findAll(): Promise<Users[]> {
    return await this.userModel.find().lean();
  }

 /*works and tested */
  async findOne(id : string): Promise<Users> {
    return this.userModel.findById(id).lean();
  }
  // works and tested
  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }
  // works and tested
  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
 
}
