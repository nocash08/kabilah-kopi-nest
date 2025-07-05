import { IsNotEmpty, IsString } from "class-validator";

export class createAboutDto {
  @IsString()
  @IsNotEmpty()
  heading: string;

  @IsNotEmpty()
  @IsString()
  subheading: string;
}
