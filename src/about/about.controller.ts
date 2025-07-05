import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  NotFoundException,
} from "@nestjs/common";
import { About } from "./entities/about.entity";
import { AboutService } from "./about.service";
import { createAboutDto } from "./dto/create-about.dto";
import { updateAboutDto } from "./dto/update-about.dto";
import { FindOneParams } from "./dto/find-one-params";
import { AboutResponseDto } from "./dto/about-response.dto";
import { plainToInstance } from "class-transformer";

@Controller("abouts")
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  // @Get()
  // findAll(): Promise<About[]> {
  //   return this.aboutService.findAllAbout();
  // }

  @Get(":id")
  async findOneById(@Param("id") id: string): Promise<AboutResponseDto> {
    const about = await this.findOneOrFail(id);
    return plainToInstance(AboutResponseDto, about);
  }

  @Post()
  async createAbout(
    @Body() createAboutDto: createAboutDto,
  ): Promise<AboutResponseDto> {
    const about = await this.aboutService.createAbout(createAboutDto);
    return plainToInstance(AboutResponseDto, about);
  }

  @Put(":id")
  async updateAboutById(
    @Param() params: FindOneParams,
    @Body() updateAboutDto: updateAboutDto,
  ): Promise<AboutResponseDto> {
    const about = await this.findOneOrFail(params.id);
    const updated = await this.aboutService.updateAboutById(
      about,
      updateAboutDto,
    );
    return plainToInstance(AboutResponseDto, updated);
  }

  // @Delete(":id")
  // @HttpCode(HttpStatus.NO_CONTENT)
  // async deleteAboutById(@Param() params: FindOneParams): Promise<void> {
  //   const about = await this.findOneById(params.id);
  //   await this.aboutService.deleteAboutById(about);
  // }

  private async findOneOrFail(id: string): Promise<About> {
    const about = await this.aboutService.findOneById(id);
    if (!about) {
      throw new NotFoundException(`About with ID "${id}" not found`);
    }
    return about;
  }
}
