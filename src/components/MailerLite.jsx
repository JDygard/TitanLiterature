import { useState } from 'react';
import './MailerLite.css';

const MailerLite = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const subscribeUser = async (email) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjg4NGVlZTBlMzkxMTNiN2ExYmE1NjMwMjY3NTQyYTY5OWFkOWEwMmU5OGRmY2I4NjI1NDY5NWNhZDM2YWI1MTcwZDMyYTQzOWFiZTVlMjEiLCJpYXQiOjE3Mjk4NzYzMTguODQyMzI5LCJuYmYiOjE3Mjk4NzYzMTguODQyMzMxLCJleHAiOjQ4ODU1NDk5MTguODM5OTUyLCJzdWIiOiIxMTcxMTE2Iiwic2NvcGVzIjpbXX0.EKtHtrlBEmpXkh1m4xbkXZOOOinnN2unb45WKsidmI8TYm4tTARLhYTqdsJxgWT7ecJ0nemNNTr_91hTW8r1ui8ep_EsPCk3UBmWyy7gh2cR3Hs2KRsNC_MhfaWMyUaBTsNg0OlBOGa35KU8MGpbWArweZRjvTImolmDh2t82XnVPpUjdmQD5Nco6iifAg24IgKIvkCvsHhNqr-l5xc8XhggaUlA7ALxD7LHYQtYfWa0KFK5FeRNAtnzh9OB2ScrhZpqAzVbGj6fohdV4hLn5uJnb7T0t3y5JNStZMlM5dboIyuhkAyw3nOkZbwha2eG15RvzAzpT1NG3lI4ohWFjWtCbJUSztNEe3T96ZHgqH4FBTSrOk0AsInHhxGayav3rYu6tISAJrkkdbMjoPcxWMh6ibXWIDEMeK8LYkQXxOzaG-HALq8n1F6cL1MWAtAJ_vNuJ0V4Nx8fzYP9w3I1NuobYW4GHdz64Iyc4mmHeGvPLTj1R9AW-5e9fyrh3jIvbyNBMVM_ZnQT4dkmKPxmMhujdwvNh-VjWEEwk8IUmvslgnxD73M19z8O2xOAHbBxt8yXkTe9Mv_X6cvi1e6bsPN3x5K-SoLxM7MscKUYzT5EBtfVQ_jTRzQnlpZwiN89gokFjTuta98BRWbXg-bawGPE9199nI8E_OkcinRK_bg'}`
        },
        body: JSON.stringify({
          email: email.get('email'),
          status: "unconfirmed",
          groups: ["136114632182990219"], // Correct format for groups
        })
      });

      const data = await response.json();
      if (response.ok) {
        setSubscriptionStatus('Successfully subscribed!');
        // Clear the form
        document.getElementById('subscription-form').reset();
      } else {
        setSubscriptionStatus(`Error: ${data.message || 'Failed to subscribe'}`);
      }
    } catch (error) {
      setSubscriptionStatus('Error subscribing user');
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="where-are-you-now">
      <div class="newsletter-text">Join our mailing list today for an exclusive look at the first chapter of the newest entry in the series. 
      Be the first to hear about all new releases, special offers, and upcoming events.</div>
      <form
        id="subscription-form"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          console.log(data);
          subscribeUser(data);
        }}
        className="subscription-form"
      >
        <div className="form-div">

          <label htmlFor="email" className="subscription-form__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="subscription-form__input"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`subscription-form__button ${isLoading ? 'disabled' : ''}`}
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
          <input type="hidden" name="status" value="unconfirmed" />
        </button>
      </form>
      {subscriptionStatus && (
        <p
          className={`subscription-form__status ${subscriptionStatus.includes('Error') ? 'error' : 'success'
            }`}
        >
          {subscriptionStatus}
        </p>
      )}
      
    </div>
    
  );
};

export default MailerLite;