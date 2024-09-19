# Formik Form with Validation
This is a simple form built with React and Formik that implements basic form validation using Yup. The form allows users to enter their name, email, password, and confirm password. It also features floating labels and real-time validation feedback inside the input fields.

## Table of Contents
* Demo
* Features
* Technologies Used
* Getting Started
* Usage
* Contributing
* License

### Demo 
[Hosted Link](https://66ec2103d11320aa778e05e0--tangerine-zuccutto-aae913.netlify.app/)

### Features
* Real-time validation feedback inside input fields.
* Floating labels for each form field.
* Responsive form layout with error messages positioned neatly inside input fields.
* Validation schema using Yup.
* Image integration for enhanced form UI.

### Technologies Used
* React: Frontend framework for building UI components.
* Formik: Library for building forms with easy validation integration.
* Yup: Schema-based form validation.
* CSS (Flexbox): For layout and styling, including floating labels and error message handling.

### Getting Started
To get a local copy up and running, follow the steps below.

1. Clone the repository:
   `git clone https://github.com/your-abhikainthla/formic-yup.git`
2. Navigate into the project directory:
   `cd form-validation`
3. Install dependencies:
   `npm install`
4. Start the development server:
   `npm start`

### Usage
The form includes four input fields: Name, Email, Password, and Confirm Password. The form validates the input values in real-time and provides error feedback inside the input fields. Once the form is correctly filled, users can submit the form, and the entered values will be logged in the console.

1. Validation Rules:
   * Name: Required.
   * Email: Must be a valid email format.
   * Password: Minimum of 8 characters.
   * Confirm Password: Must match the password field.

2. CSS Highlights:
   * Floating Labels: Labels float above the input field when the user starts typing or the field is focused.
   * Error Messages: Error messages appear directly inside the input fields when validation fails, highlighted in red.

### Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch `(git checkout -b feature-branch)`.
3. Make your changes and commit `(git commit -m 'Add feature')`.
4. Push to the branch `(git push origin feature-branch)`.
5. Create a new Pull Request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
