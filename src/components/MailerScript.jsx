import { useEffect } from 'react';
const MailerScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    script.onload = () => {
      window.ml = function () {
        (window.ml.q = window.ml.q || []).push(arguments);
      };
      ml('account', '1160546');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
};
export default MailerLiteScript;