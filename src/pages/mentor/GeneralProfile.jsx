import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select';
import MentorSidebar from '../../components/MentorSideBar';
import moment from 'moment-timezone';
import 'react-toastify/dist/ReactToastify.css';
import countryList from 'react-select-country-list';
import iso6391 from 'iso-639-1';
import axios from 'axios';

const GeneralProfile = ({ email }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    profession: '',
    country: '',
    timezone: '',
    language: '',
    profileImage: null,
    email,
  });

  const [errors, setErrors] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      const countries = await countryList().getData();
      setCountryOptions(countries);
    };

    const fetchLanguageOptions = async () => {
      const languages = await iso6391.getAllNames();
      const options = languages.map(lang => ({ value: lang, label: lang }));
      setLanguageOptions(options);
    };

    fetchCountryList();
    fetchLanguageOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === 'profileImage' ? files[0] : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
    validateField(name, newValue);
  };
  


  const handleChangeLanguage = (selectedOption) => {
    setFormData(prevState => ({
      ...prevState,
      language: selectedOption.value
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData(prevState => ({
      ...prevState,
      country: selectedOption.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    console.log("inside handle");
    validateAllFields();

    const hasErrors = Object.values(errors).some(error => error);

    if (!hasErrors) {
      
      console.log(formData); 
      
      try {
        console.log("inside try");
        console.log(formData)
        const res = await axios.post("http://127.0.0.1:8000/api/mentors/create_general_user_profile/", formData); 
        console.log(res)
        if (res.status === 201) {
          console.log("201")
          navigate("/mentor-dashboard");
          toast.success(res.data.message);
          // Reset error state
          setErrors({});
        }
      } catch (error) {
        console.error("Error:", error);
        // Display error message to the user
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      toast.error("All Fields required.");
    }
};


  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'first_name':
        if (!value.trim()) {
          error = 'First name is required';
        }
        break;
      case 'last_name':
        if (!value.trim()) {
          error = 'Last name is required';
        }
        break;
      // Add validation for other fields if needed
      default:
        break;
    }
    setErrors(prevState => ({
      ...prevState,
      [name]: error
    }));
  };

  const validateAllFields = () => {
    for (const [key, value] of Object.entries(formData)) {
      validateField(key, value);
    }
  };

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <MentorSidebar />
        </div>
        <div className='col'>
          <br /><br /><br /><br /><br />
          <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required
                    />
                    {errors.first_name && (
                      <span className="error">{errors.first_name}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      required
                    />
                    {errors.last_name && (
                      <span className="error">{errors.last_name}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="profession">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      placeholder="Enter profession"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Select
                      name="country"
                      value={countryOptions.find(option => option.value === formData.country)}
                      onChange={handleCountryChange}
                      options={countryOptions}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="timezone">
                    <Form.Label>Timezone</Form.Label>
                    <Form.Control
                      as="select"
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Timezone</option>
                      {moment.tz.names().map((timezone, index) => (
                        <option key={index} value={timezone}>{timezone}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="language">
                    <Form.Label>Language</Form.Label>
                    {/* <Select
                      name="language"
                      value={formData.language}
                      onChange={handleChangeLanguage}
                      options={languageOptions}
                      required
                    /> */}
                  <Select
              name="language"
              value={languageOptions.find(option => option.value === formData.language)}
              onChange={handleChangeLanguage}
              options={languageOptions}
              required
            />


                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="profileImage">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="profileImage"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <Button type="submit">Save</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralProfile;
