import { Expose, Transform } from "class-transformer";

export class AboutResponseDto {
  @Expose()
  id: string;

  @Expose()
  heading: string;

  @Expose()
  subheading: string;

  @Expose()
  @Transform(({ value }) =>
    new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(value)),
  )
  createdAt: Date;

  @Expose()
  @Transform(({ value }) =>
    new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(value)),
  )
  updatedAt: Date;
}
