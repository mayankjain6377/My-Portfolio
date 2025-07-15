
const serviceId = 'service_rdu9rno';
const templateId = 'template_wfiv4hd';
const formId = 'form';
const publicKey = '7QDQwlJx6mErA2b6Y';
  //   const SERVICE_ID = 'service_rdu9rno'; 
  // // Replace with your EmailJS service ID
  //   const TEMPLATE_ID = 'template_wfiv4hd'; // Replace with your EmailJS template ID
  //   const PUBLIC_KEY = '7QDQwlJx6mErA2b6Y';
document.getElementById(formId).addEventListener('submit', function (event) {
  event.preventDefault();
  document.getElementById('send2').innerText = 'Message sent successfully! ✅ ';
  // Collect form data
  const formData = new FormData(event.target);
  // Prepare template parameters
  const templateParams = {};
  formData.forEach((value, key) => {
    templateParams[key] = value;
  });
  // Send message using EmailJS
  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(function (response) {
      console.log('Message sent successfully:', response);
      document.getElementById('send2').innerText = 'Send Message';
    }, function (error) {
      console.error('Failed to send message:', error);
      document.getElementById('send').innerText = 'Failed to send message.';
    });
  event.target.reset();
});
