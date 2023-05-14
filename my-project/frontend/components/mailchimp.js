import React from "react"
import MailchimpForm from "react-mailchimp-form"

export default function Mailchimp() {
    return (
        <MailchimpForm
            action={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
            fields={[
                {
                    name: "EMAIL",
                    placeholder: "Email",
                    type: "email",
                    //   className: styles.email,
                    required: true,
                },
            ]}
            //buttonClassName={styles.button}
            styles={{
                sendingMsg: {
                    color: "#0652DD",
                },
                successMsg: {
                    color: "#009432",
                },
                duplicateMsg: {
                    color: "#EE5A24",
                },
                errorMsg: {
                    color: "red",
                },
            }}
            messages={{
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Already subscribed",
                button: "Subscribe!",
            }}
        //className={styles.form}
        />
    )
}
