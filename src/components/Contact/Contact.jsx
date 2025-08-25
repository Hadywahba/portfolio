import { useForm } from "react-hook-form";
import TextInput from "../ui/Forms/TextInput";
import TextArea from "../ui/Forms/TextArea";
import SubmitButton from "../ui/Forms/SubmitButton";
import { FormSchema } from "../../validation/formvalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
export default function Contact() {
  const submitData = (data) => {
    const formData = new FormData();
    formData.append("FirstName", data.FirstName);
    formData.append("LastName", data.LastName);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    return axios.post("https://formspree.io/f/meoljwoq", formData, {
      headers: {
        Accept: "application/json",
      },
    });
  };
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: submitData,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all", resolver: zodResolver(FormSchema) });

  const onsubmit = (data) => {
    console.log(data);
    mutate(data);
    reset();
  };

  return (
    <>
     
      <div className="container  px-4 mt-20 mb-0  " id="contact">
        <div className=" top-title mb-24 ">
          <h2 className="text-4xl text-center w-fit font-bold cursor-pointer mx-auto  text-primary dark:text-[#ADFF2F]">
            Contact
          </h2>

          <form
            // action="https://formspree.io/f/meoljwoq"
            // method="POST"
            onSubmit={handleSubmit(onsubmit)}
            className="max-w-2xl mx-auto mt-16"
          >
            <div className="flex-col gap-4 sm:flex sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 mb-5">
                <TextInput
                  register={register}
                  errors={errors}
                  name="FirstName"
                  label="First Name"
                  type="text"
                  id="First Name"
                  placeholder="Please enter your First Name..."
                />
              </div>
              <div className="flex-1 mb-5">
                <TextInput
                  register={register}
                  errors={errors}
                  name="LastName"
                  label="Last Name"
                  type="text"
                  id="Last Name"
                  placeholder="Please enter your Last Name..."
                />
              </div>
            </div>

            <div className="mb-5">
              <TextInput
                register={register}
                errors={errors}
                name="email"
                label="Email"
                type="email"
                id="email"
                placeholder="Please enter your email..."
              />
            </div>
            <div className="mb-5">
              <TextInput
                register={register}
                errors={errors}
                name="phone"
                label="Phone"
                type="tel"
                id="phone"
                placeholder="Please enter your phone..."
              />
            </div>

            <div className="mb-5">
              <TextArea
                label="  Your message"
                name="TextArea"
                placeholder="Write your thoughts here..."
                id="message"
                register={register}
                errors={errors}
                rows={4}
              />
            </div>

            <SubmitButton
              label="submit"
              error={error}
              isError={isError}
              isPending={isPending}
            />
          </form>
        </div>
      </div>
    </>
  );
}
