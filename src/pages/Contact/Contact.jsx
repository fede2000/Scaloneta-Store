import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ButtonContact, ContactContainer, ContactDetails, ContactSection, DivIcons, FormContact, FormContainer, TitleContactSection } from "./ContactStyles";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_7xyhwen",
        form.current,
        "user_hKs2aRfLoozcqA28UpUyz"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactSection>
      <TitleContactSection>Contactanos</TitleContactSection>
      <ContactContainer>
        <FormContainer>
          <FormContact ref={form} onSubmit={sendEmail}>
              <label>Nombre</label>
              <input
                type="text"
                name="user_name"
                placeholder="Nombre Completo"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email activo"
                required
              />
              <label>Asunto</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Mensaje</label>
              <textarea name="message" cols="15" rows="5"></textarea>
              <ButtonContact>Send Message</ButtonContact>
          </FormContact>

          <ContactDetails>
              <h3>Informacion de contacto</h3>
              <p>Completa el formulario o contáctanos a través de los siguientes medios de contacto</p>
              <DivIcons>
                <span>
                  <FaPhoneAlt />
                  <p>+0800 78 86 22</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@scalonetaStore.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Buenos Aires, Argentina</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@Scaloneta</p>
                </span>
              </DivIcons>
          </ContactDetails>
        </FormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;