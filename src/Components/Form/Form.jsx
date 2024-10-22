import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Form.scss"; // Assuming you're styling this form in Form.scss

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:ri564@nyu.edu?subject=New%20Quote%20Request&body=First Name: ${
      formData.firstName
    }%0ALast Name: ${formData.lastName}%0APhone Number: ${
      formData.phoneNumber
    }%0AEmail: ${formData.email}%0ADescription: ${
      formData.description
    }&attachment=${encodeURIComponent(formData.photo?.name || "")}`;

    window.location.href = mailtoLink;
    alert("Form submitted successfully!");
    e.target.reset();
    navigate("/");
  };

  return (
    <section className="form">
      <h1 className="form__title">Get Your Free Quote</h1>
      <form className="form__body" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form__input"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form__group">
          <label className="form__label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form__input"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form__group">
          <label className="form__label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="form__input"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form__group">
          <label className="form__label">Email</label>
          <input
            type="email"
            name="email"
            className="form__input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form__group">
          <label className="form__label">Description</label>
          <textarea
            name="description"
            className="form__textarea"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form__group">
          <label className="form__label">Upload Photo</label>
          <input type="file" name="photo" className="form__input-file" onChange={handleFileChange} />
        </div>

        <button type="submit" className="form__button form__button--submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
