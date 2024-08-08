# Password-Generator-and-Encrypter-Decrypter
Password Generator and Encrypter/Decrypter by the Twofish Algorithm

Purpose  :
The application is designed to facilitate secure password management through password generation, encryption, decryption, and sharing capabilities. It integrates advanced cryptographic techniques and provides an efficient means for users to handle sensitive information securely.

  Key Features  :

1.   Password Generation  :
   -   Function  : Users can generate random passwords of specified lengths.
   -   Objective  : To produce strong, unpredictable passwords that enhance security.

2.   Password Encryption and Decryption  :
   -   Function  : Supports encryption and decryption of passwords using the Twofish algorithm.
     - Encrypt generated passwords.
     - Decrypt encrypted passwords to retrieve the original text.
     - Manually input and process custom passwords for encryption and decryption.
   -   Objective  : To protect password data through encryption, ensuring that passwords are stored and shared in a secure format.

3.   Email Integration  :
   -   Function  : Enables users to send an email containing the generated, encrypted, and decrypted passwords.
   -   Objective  : To allow secure sharing of password information via email, using EmailJS for delivery.

4.   Page Initialization and Reset  :
   -   Function  : Initializes the page with default values and provides a reset option.
   -   Objective  : To ensure the application starts in a clean state and allows users to easily clear all fields and start anew.

  Components  :

1.   HTML Interface  :
   -   Description  : Includes input fields for password length, text areas for password and encryption details, and buttons for generating, encrypting, decrypting, copying, emailing, and resetting data.
   -   Purpose  : To provide a user-friendly interface for interacting with the application’s features.

2.   CSS Styling  :
   -   Description  : Defines the visual appearance of the application, including layout, color schemes, and typography.
   -   Purpose  : To enhance usability and ensure a visually appealing user experience.

3.   JavaScript Functionality  :
   -   Encryption  : Utilizes the Stanford JavaScript Crypto Library (SJCL) to implement Twofish encryption and decryption.
   -   Email Sending  : Leverages EmailJS to handle email dispatch with the relevant password information.
   -   Page Logic  : Manages user interactions such as password generation, encryption, decryption, email sending, and page reset.

  Workflow  :

1.   Password Generation  :
   - Users specify the desired length and generate a random password.

2.   Encryption and Decryption  :
   - Users can encrypt the generated password and view the encrypted result.
   - Users can input an encrypted password to decrypt and reveal the original text.
   - Users can manually enter a password to encrypt or decrypt as needed.

3.   Email Functionality  :
   - Users enter a recipient email address to send an email containing all relevant password details.

4.   Reset Function  :
   - Users can reset the application to clear all inputs and return to default settings.

  Use Case  :

-   Security Enhancement  : Provides a robust solution for managing and sharing passwords securely.
-   Convenience  : Simplifies the process of handling encrypted data and facilitates secure communication via email.
