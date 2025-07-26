import { Mail, MessageSquare, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss your vision
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="text-purple-400" />
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  rows={6}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-purple-400">nhloniphodonsa23@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-blue-400">0817390292</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="p-3 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-green-400">Orange Farm, Johannesburg, Gauteng</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-4 bg-gray-700/50 hover:bg-purple-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-4 bg-gray-700/50 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-4 bg-gray-700/50 hover:bg-cyan-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
