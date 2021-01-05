import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import axios from 'axios';
import { toggleModal } from '../helpers/general';
import closeIcon from '../svg/closeIcon.svg';
import InfoIcon from '@material-ui/icons/Info';

interface IFormData {
  name: string;
  email: string;
  contactReason: string;
  message: string;
}

interface IValidation {
  message: string;
  error: boolean;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    contactReason: '',
    message: ''
  })
  const [successfulSubmission, setSuccessfulSubmission] = useState<boolean>(false)
  const [validation, setValidation] = useState<IValidation>({
    message: '',
    error: false
  })
  const sendDataToFormCarry = async () => {
    try {
      const response = await axios.post(
        "https://formcarry.com/s/VNfo-ckn6K",
        formData,
        { headers: { "Accept": "application/json" } }
      )

      return response.data.status === "success" ? true : false;
    } catch (e) {
      console.error(e);
    }
  }

  const validateForm = () => {
    if (!formData.name) {
      setValidation({ error: true, message: "Please enter your name." })
      return true
    } else if (!formData.email || !formData.email.includes("@")) {
      setValidation({ error: true, message: "Please enter your email in the correct format." })
      return true
    } else if (!formData.message) {
      setValidation({ error: true, message: "Please enter a message" })
      return true
    } else {
      return false
    }
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm()

    if (!validationResult) {
      const result = await sendDataToFormCarry()

      if (result) {
        setSuccessfulSubmission(true)
      } else[
        setValidation({ error: true, message: "Error with form submission" })
      ]
    }

  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  if (successfulSubmission) {
    return (
      <div className="form-modal" id="form-modal" style={{ display: "none" }}>
        <div className="form-modal__background" onClick={() => toggleModal("form-modal")} ></div>
        <div className="form-modal__wrapper">
          <button className="form-modal__close-button" onClick={() => toggleModal('form-modal')}><img src={closeIcon} alt="close-button" /></button>
          <p style={{ textAlign: "center" }}>
            Thankyou for your submission, I will be in contact shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-modal" id="form-modal" style={{ display: "none" }}>
      <div className="form-modal__background" onClick={() => toggleModal("form-modal")} ></div>
      <div className="form-modal__wrapper">
        <button className="form-modal__close-button" onClick={() => toggleModal('form-modal')}><img src={closeIcon} alt="close-button" /></button>
        {
          validation.error ?
            <div className="form-modal__validation">
              <p><InfoIcon /> &nbsp;&nbsp;{validation.message}</p>
            </div>
            : null
        }
        <form onSubmit={submitForm}>
          <label className="form-modal__label" htmlFor="name">Hi, my name is </label>
          <input
            className="form-modal__input"
            id="name" type="text"
            name="name" maxLength={30}
            placeholder="John Smith"
            onChange={handleChange}
          />
          <label className="form-modal__label" htmlFor="email"> My email is </label>
          <input
            className="form-modal__input"
            id="email"
            type="email"
            name="email"
            placeholder="johnsmith@gmail.com"
            onChange={handleChange}
          />
          <label className="form-modal__label" htmlFor="contact-reason">The reason i'm getting in touch is </label>
          <select
            className="form-modal__select"
            name="contactReason"
            id="contactReason"
            onChange={handleChange}
          >
            <option className="form-modal__option" value="General">General</option>
            <option className="form-modal__option" value="I want to Hire You"> I want to hire you</option>
            <option className="form-modal__option" value="I'm interested in your services"> I'm interested in your services</option>
            <option className="form-modal__option" value="I would like to request a quote">I would like to request a quote</option>
            <option className="form-modal__option" value="Other">Other</option>
          </select>
          <label className="form-modal__label" htmlFor="message"> Message</label>
          <textarea
            className="form-modal__text-area"
            id="message"
            name="message"
            onChange={handleChange}
          />
          <button className="button-general" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
