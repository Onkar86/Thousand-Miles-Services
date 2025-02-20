import React, { useState, FormEvent } from 'react';
import {
  Globe2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Ship,
  Factory,
  Wheat,
  Cpu,
  Building2,
  ShoppingBag,
  Hammer,
  Beaker,
  Building,
  Clock,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before sending the message.');
      return;
    }

    window.location.href = `mailto:thousandmilesservices@gmail.com?subject=Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/918692803848`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/4RNSySTK/10001.png"
                alt="Thousand Miles Services Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-800">
                Thousand Miles Services
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={scrollToTop}
                className="text-gray-600 hover:text-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-600 hover:text-blue-600"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </button>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="hidden md:flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </button>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/Z5JnBQF/ship-port-4519811-1280-1.jpg"
            alt="Container port at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Global Trade Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Connecting businesses worldwide through reliable import and export
              solutions. Expert logistics, customs clearance, and international
              trade services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition flex items-center"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition flex items-center"
              >
                Chat on WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Product Categories
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We specialize in importing and exporting a wide range of products
            across various industries, connecting manufacturers with global
            markets.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Agriculture Products */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3"
                  alt="Agriculture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Wheat className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Agriculture</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Grains & Cereals</li>
                  <li>• Fresh Produce</li>
                  <li>• Processed Foods</li>
                  <li>• Agricultural Machinery</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Technology Products */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
                  alt="Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Technology</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Computer Hardware</li>
                  <li>• Electronic Components</li>
                  <li>• Telecommunications Equipment</li>
                  <li>• Smart Devices</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Industrial Products */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
                  alt="Industrial"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Factory className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Industrial</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Manufacturing Equipment</li>
                  <li>• Industrial Machinery</li>
                  <li>• Raw Materials</li>
                  <li>• Construction Equipment</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Consumer Goods */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3"
                  alt="Consumer Goods"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Consumer Goods</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Textiles & Apparel</li>
                  <li>• Home & Living</li>
                  <li>• Personal Care Products</li>
                  <li>• Sports Equipment</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Construction Materials */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3"
                  alt="Construction"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Hammer className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Construction</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Building Materials</li>
                  <li>• Steel & Metals</li>
                  <li>• Electrical Supplies</li>
                  <li>• Safety Equipment</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chemical & Pharmaceutical */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3"
                  alt="Chemical"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Beaker className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Chemical & Pharma</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Industrial Chemicals</li>
                  <li>• Pharmaceutical Products</li>
                  <li>• Laboratory Equipment</li>
                  <li>• Medical Supplies</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Us</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            With years of experience in international trade, we connect
            businesses worldwide through reliable import and export solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Established Company
              </h3>
              <p className="text-gray-600">
                A trusted name in global trade with years of industry experience
                and expertise.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Strict quality control measures ensuring only the best products
                reach our clients.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                Efficient logistics ensuring your products reach their
                destination on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Get in touch with our team for inquiries about our services or to
            request information.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Corporate Address</h4>
                    <p className="text-gray-600">
                      Ulwe Sector 17, Near Ramsheth Thakur International Sports
                      Complex.
                      <br />
                      Navi Mumbai, Maharashtra 410206 - India
                    </p>
                    <h4 className="font-semibold mt-4">Warehouse Address</h4>
                    <p className="text-gray-600">
                      Kolhapur - Maharashtra 416003 - India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+91 86928 03848</p>
                    <p className="text-gray-600">+91 98236 75048</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Official Email</h4>
                    <p className="text-gray-600">
                      info@thousandmilesservices.com
                    </p>
                    <h4 className="font-semibold mt-4">Email</h4>
                    <p className="text-gray-600">
                      thousandmilesservices@gmail.com
                    </p>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://i.ibb.co/rfFhvmzG/1000-removebg-preview1.png"
                  alt="Thousand Miles Services Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">Thousand Miles</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in global trade and logistics solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={scrollToTop} className="hover:text-blue-400">
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="hover:text-blue-400"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-blue-400"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-blue-400"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Import/Export</li>
                <li>Logistics</li>
                <li>Customs Clearance</li>
                <li>Trade Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 86928 03848</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>thousandmilesservices@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Thousand Miles Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
