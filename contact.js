
const serviceId = 'service_47xmxzh';
const templateId = 'template_wfiv4hd';
const formId = 'form';
const publicKey = 'fnEQiF1n8FNQEgZgt';
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
