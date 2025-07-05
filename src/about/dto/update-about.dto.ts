import { PartialType } from "@nestjs/mapped-types";
import { createAboutDto } from "./create-about.dto";

export class updateAboutDto extends PartialType(createAboutDto) {}
