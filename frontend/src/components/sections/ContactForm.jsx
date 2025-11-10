import React, { useState } from 'react';
import axios from 'axios';
import { Phone, Mail, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    supermarket_name: '',
    message: '',
    preferred_contact: 'email'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email) {
      toast.error('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${API}/form-submissions`, formData);
      toast.success('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        supermarket_name: '',
        message: '',
        preferred_contact: 'email'
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl mb-16 text-center font-poppins"
          data-testid="contact-headline"
        >
          Kontakt aufnehmen
        </h2>

        <p className="text-[#B8BCC4] text-base lg:text-lg text-center mb-16 max-w-2xl mx-auto">
          Vereinbaren Sie Ihr kostenloses Beratungsgespräch
        </p>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#3A3F47] p-8 lg:p-12 rounded-2xl shadow-2xl" data-testid="contact-form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#B8BCC4] text-sm font-medium">
                  Ihr Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Max Mustermann"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#2D3137] border-none text-[#FFFFFF] placeholder:text-[#8A8E96] h-12 rounded-lg focus:ring-2 focus:ring-[#F4CA45]"
                  data-testid="contact-input-name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#B8BCC4] text-sm font-medium">
                  Ihre E-Mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="max.mustermann@supermarkt.de"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#2D3137] border-none text-[#FFFFFF] placeholder:text-[#8A8E96] h-12 rounded-lg focus:ring-2 focus:ring-[#F4CA45]"
                  data-testid="contact-input-email"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#B8BCC4] text-sm font-medium">
                  Telefonnummer
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+49 171 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#2D3137] border-none text-[#FFFFFF] placeholder:text-[#8A8E96] h-12 rounded-lg focus:ring-2 focus:ring-[#F4CA45]"
                  data-testid="contact-input-phone"
                />
              </div>

              {/* Supermarket Name */}
              <div className="space-y-2">
                <Label htmlFor="supermarket_name" className="text-[#B8BCC4] text-sm font-medium">
                  Name Ihres Supermarkts
                </Label>
                <Input
                  id="supermarket_name"
                  name="supermarket_name"
                  type="text"
                  placeholder="EDEKA Mustermann"
                  value={formData.supermarket_name}
                  onChange={handleChange}
                  className="bg-[#2D3137] border-none text-[#FFFFFF] placeholder:text-[#8A8E96] h-12 rounded-lg focus:ring-2 focus:ring-[#F4CA45]"
                  data-testid="contact-input-supermarket"
                />
              </div>

              {/* Preferred Contact */}
              <div className="space-y-3">
                <Label className="text-[#B8BCC4] text-sm font-medium">
                  Wie möchten Sie kontaktiert werden?
                </Label>
                <RadioGroup
                  value={formData.preferred_contact}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, preferred_contact: value }))}
                  className="flex gap-6"
                  data-testid="contact-radio-group"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" className="border-[#F4CA45] text-[#F4CA45]" />
                    <Label htmlFor="email-contact" className="text-[#B8BCC4] cursor-pointer">
                      Per E-Mail
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-contact" className="border-[#F4CA45] text-[#F4CA45]" />
                    <Label htmlFor="phone-contact" className="text-[#B8BCC4] cursor-pointer">
                      Telefonisch
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#B8BCC4] text-sm font-medium">
                  Ihre Nachricht (optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Teilen Sie uns gerne mit, was Sie interessiert..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-[#2D3137] border-none text-[#FFFFFF] placeholder:text-[#8A8E96] rounded-lg focus:ring-2 focus:ring-[#F4CA45] resize-none"
                  data-testid="contact-input-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F4CA45] text-[#2D3137] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#FDD563] hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                data-testid="contact-submit-button"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  'Kostenloses Erstgespräch vereinbaren'
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-[#8A8E96] text-xs italic text-center">
                Hinweis: Ihre Daten werden vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-16" data-testid="alternative-contact">
            <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl text-center mb-8 font-poppins">
              Alternativ erreichen Sie uns direkt:
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone Card */}
              <a
                href="tel:01713484003"
                className="bg-[#3A3F47] p-8 rounded-xl hover:shadow-xl transition-shadow cursor-pointer group"
                data-testid="alternative-phone-card"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-[#F4CA45] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-[#2D3137]" />
                  </div>
                  <div>
                    <h4 className="text-[#FFFFFF] font-semibold text-xl font-poppins mb-2">Telefon</h4>
                    <p className="text-[#F4CA45] text-lg">0171-3484003</p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:H.Ott@ai-solution-ott.de"
                className="bg-[#3A3F47] p-8 rounded-xl hover:shadow-xl transition-shadow cursor-pointer group"
                data-testid="alternative-email-card"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-[#F4CA45] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-[#2D3137]" />
                  </div>
                  <div>
                    <h4 className="text-[#FFFFFF] font-semibold text-xl font-poppins mb-2">E-Mail</h4>
                    <p className="text-[#F4CA45] text-lg break-all">H.Ott@ai-solution-ott.de</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;