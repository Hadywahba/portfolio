import { z } from "zod";

export const FormSchema = z.object({
  FirstName: z
    .string()
    .nonempty("please enter your FirstName ")
    .min(3, "Min length is 3")
    .max(8, "Max length is 8"),
  LastName: z
    .string()
    .nonempty("please enter your LastName ")
    .min(3, "Min length is 3")
    .max(9, "Max length is 9"),
  email: z.email("Invalid Email ").nonempty("please enter your Email"),
  phone: z
    .string()
    .nonempty("please enter your Phone")
    .regex(/^01[0125][0-9]{8}$/, "Invalid phone"),
  TextArea: z.string().nonempty("please enter your Message "),
});
