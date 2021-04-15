import React from "react"
import { useForm } from "react-hook-form"
import Mailchimp from "react-mailchimp-form"
import "./contact.css"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="section-wrapper contact-wrapper">
      <h2>Contact Me</h2>
      This is the best way to get in touch with me, and will alert you whenever
      I am on the market! If you want to email me about anything else, you can
      reach me here.
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <Mailchimp
        action="https://reikon95.us18.list-manage.com/subscribe/post?u=30e725db9a4374200ca835c2b&amp;id=ae05b717ca"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
        ]}
      />
    </div>
  )
}
