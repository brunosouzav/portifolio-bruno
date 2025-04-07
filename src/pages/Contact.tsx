import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSendStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-black/[0.96] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-12 text-white">Contact</h1>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white/70">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/70">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-white/70">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all"
              placeholder="What's this about?"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          
          <div className="space-y-4">
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 px-4 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {sendStatus === 'success' && (
              <p className="text-center text-green-500 text-sm">
                Message sent successfully!
              </p>
            )}

            {sendStatus === 'error' && (
              <p className="text-center text-red-500 text-sm">
                Error sending message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
