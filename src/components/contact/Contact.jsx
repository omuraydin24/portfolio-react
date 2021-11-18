import { useState } from 'react';
import './Contact.scss';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img height="100%" width="100%" src="assets/shake.svg" alt="shaking hands" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Mesaj"></textarea>
          <button type="submit">Gönder</button>
          {message && (
            <span>Teşekkürler, en kısa zamanda size dönüş yapacağım...</span>
          )}
        </form>
      </div>
    </div>
  );
}
