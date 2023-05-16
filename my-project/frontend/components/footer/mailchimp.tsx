import React, { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
// import MailchimpForm from "react-mailchimp-form"

// export default function Mailchimp() {
//   return (
//     <MailchimpForm
//       action={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
//       fields={[
//         {
//           name: "EMAIL",
//           placeholder: "Email",
//           type: "email",
//           //   className: styles.email,
//           required: true,
//         },
//       ]}
//       // className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       styles={{
//         sendingMsg: {
//           color: "#0652DD",
//         },
//         successMsg: {
//           color: "#009432",
//         },
//         duplicateMsg: {
//           color: "#EE5A24",
//         },
//         errorMsg: {
//           color: "red",
//         },
//       }}
//       messages={{
//         sending: "Sending...",
//         success: "Thank you for subscribing!",
//         error: "An unexpected internal error has occurred.",
//         empty: "You must write an e-mail.",
//         duplicate: "Already subscribed",
//         button: "Subscribe!",
//       }}
//       //className={styles.form}
//     />
//   )
// }

import MailchimpSubscribe from "react-mailchimp-subscribe"
import toast from "react-hot-toast"

const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL

function CustomForm({ status, message, onSubmitted }: any) {
  const [email, setemail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    toast.promise(
      onSubmitted({
        EMAIL: email,
      }),
      {
        loading: "Subscribing...",
        success: <b>Thank you for subscribing!</b>,
        error: <b>{message}</b>,
      }
    )

    // onSubmitted({
    //   EMAIL: email,
    // })
    //   .then(() => {
    //     setemail("")
    //     toast.success("Thank you for subscribing!")
    //   })
    //   .catch(() => {
    //     toast.error("An unexpected internal error has occurred.")
    //   })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="Email"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}

// @ts-ignore
export default function Mailchimp() {
  return (
    <>
      <CustomForm
        status={""}
        message={""}
        onSubmitted={() => console.log("hi")}
      />
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onSubmitted={(formData: any) => subscribe(formData)}
          />
        )}
      />
    </>
  )
}
