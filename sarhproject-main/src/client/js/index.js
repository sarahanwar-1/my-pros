// Importing the main handler and validation function
import { handleFormSubmit } from './js/serverCommunicator';
// import { isValidLink } from './js/inputValidator';

// Import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Adding event listeners for form submission
document.getElementById('urlForm').addEventListener('submit', handleFormSubmit);
