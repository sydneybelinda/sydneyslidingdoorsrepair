import { z } from "zod";
import { sendMail } from "./send-email";

export async function emailQuote(
    prevState: {
      message: string;
    },
    formData: FormData,
  ) {
    const schema = z.object({
      name:  z.string().min(1),
      email:  z.string().min(1),
      phone:  z.string().min(1),
      message:  z.string().min(1),
    });
    const parse = schema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    });
  
    if (!parse.success) {
      return { message: "Failed to create quote" };
    }
  
    const data = parse.data;
  
   
        const mailText = `Name: ${data.name}\n  Email: ${data.email}\n  Phone: ${data.phone}/n Message: ${data}.message}`;

        const response =  await sendMail({
            email: data.email,
            subject: 'New Contact Us Form',
            text: mailText,
          });

          if (response?.messageId) {
            return { message: `<div class="quptesuccess">Quote has been recieved successfully</div>` };
          } else {
            return { message: '<div class="quptefail">Failed to reciece quote.  Please call us directly </div'};
          }
  

     

  }