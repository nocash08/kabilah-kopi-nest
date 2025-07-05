import { Injectable } from "@nestjs/common";
import { About } from "./entities/about.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createAboutDto } from "./dto/create-about.dto";
import { updateAboutDto } from "./dto/update-about.dto";

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  async createAbout(createAboutDto: createAboutDto): Promise<About> {
    const newAbout = await this.aboutRepository.save(createAboutDto);
    return newAbout;
  }

  //   async findAllAbout(): Promise<About[]> {
  //     return await this.aboutRepository.find();
  //   }

  async findOneById(id: string): Promise<About | null> {
    return await this.aboutRepository.findOneBy({ id });
  }

  async updateAboutById(
    about: About,
    updateAboutDto: updateAboutDto,
  ): Promise<About> {
    Object.assign(about, updateAboutDto);
    return await this.aboutRepository.save(about);
  }

  //   async deleteAboutById(about: About): Promise<void> {
  //     await this.aboutRepository.delete(about.id);
  //   }
}
