
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/assets/accueil.jpeg',
    '/assets/accueil2.jpeg',
    '/assets/accueil3.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#bf3435]" style={{ fontFamily: 'Pacifico, serif' }}>
                Energui
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#303031] hover:text-[#bf3435] cursor-pointer">Accueil</a>
              <a href="#about" className="text-[#303031] hover:text-[#bf3435] cursor-pointer">À propos</a>
              <a href="#services" className="text-[#303031] hover:text-[#bf3435] cursor-pointer">Services</a>
              <a href="#offers" className="text-[#303031] hover:text-[#bf3435] cursor-pointer">Offres</a>
              <a href="#contact" className="text-[#303031] hover:text-[#bf3435] cursor-pointer">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            >
              <i className="ri-menu-line text-xl text-[#303031]"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-[#303031] hover:text-[#bf3435] cursor-pointer">Accueil</a>
              <a href="#about" className="block px-3 py-2 text-[#303031] hover:text-[#bf3435] cursor-pointer">À propos</a>
              <a href="#services" className="block px-3 py-2 text-[#303031] hover:text-[#bf3435] cursor-pointer">Services</a>
              <a href="#offers" className="block px-3 py-2 text-[#303031] hover:text-[#bf3435] cursor-pointer">Offres</a>
              <a href="#contact" className="block px-3 py-2 text-[#303031] hover:text-[#bf3435] cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#bf3435] to-[#303031] min-h-screen flex items-center" style={{
        backgroundImage: `url('${heroImages[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        transition: 'background-image 1s ease-in-out'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              L'énergie en mouvement
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Energui, votre partenaire de confiance pour tous vos besoins énergétiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-[#bf3435] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a02d2e] transition-colors cursor-pointer whitespace-nowrap">
                Découvrir nos services
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#bf3435] transition-colors cursor-pointer whitespace-nowrap">
                Prendre rendez-vous
              </a>
            </div>
          </div>

        </div>
        {/* Image indicators */}
        <div className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">À propos de nous</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[#8e8c94] mb-8">
                Energui est leader dans la distribution des produits pétroliers. À consommer la fiabilité, qualité, des services et à répondre aux écoutes énergie.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#303031] mb-4">Notre Vision</h3>
                  <p className="text-[#8e8c94]">
                    Devenir la référence en matière de distribution énergétique en Guinée et en Afrique de l'Ouest, en offrant des solutions innovantes et durables.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#303031] mb-4">Notre Mission</h3>
                  <p className="text-[#8e8c94]">
                    Fournir des produits et services énergétiques de qualité supérieure, tout en contribuant au développement économique et social de nos communautés.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/assets/apropos.jpeg"
                alt="À propos d'Energui"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-96"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Nos Services</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
            <p className="text-lg text-[#8e8c94] max-w-3xl mx-auto">
              Chez Energui, nous offrons une gamme complète de produits et services énergétiques adaptés à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-oil-line",
                title: "Distribution de Carburant",
                description: "Essence, diesel et autres produits pétroliers de haute qualité"
              },
              {
                icon: "ri-car-line",
                title: "Services Automobiles",
                description: "Vidange, alignement, et maintenance complète de votre véhicule"
              },
              {
                icon: "ri-settings-line",
                title: "Maintenance Équipements",
                description: "Entretien et réparation de vos équipements énergétiques"
              },
              {
                icon: "ri-customer-service-line",
                title: "Service Client 24/7",
                description: "Support technique et assistance disponible en permanence"
              },
              {
                icon: "ri-truck-line",
                title: "Livraison",
                description: "Service de livraison rapide et fiable pour vos commandes"
              },
              {
                icon: "ri-shield-check-line",
                title: "Garantie Qualité",
                description: "Tous nos produits sont certifiés et garantis"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-[#bf3435] text-white rounded-lg mb-6">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#303031] mb-4">{service.title}</h3>
                <p className="text-[#8e8c94]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-20 bg-[#bf3435]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Offres Spéciales</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-[#bf3435] text-white rounded-full mr-4">
                  <span className="text-2xl font-bold">20%</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#303031]">Réduction sur Services</h3>
                  <p className="text-[#8e8c94]">Offre limitée</p>
                </div>
              </div>
              <ul className="space-y-3 text-[#8e8c94]">
                <li className="flex items-center">
                  <i className="ri-check-line text-[#bf3435] mr-3"></i>
                  Remplacement d'huile moteur
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#bf3435] mr-3"></i>
                  Alignement des roues
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#bf3435] mr-3"></i>
                  Vidange complète
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#bf3435] mr-3"></i>
                  Gonflage pneus gratuit
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-[#bf3435] text-white rounded-full mr-4">
                  <span className="text-2xl font-bold">50%</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#303031]">Carte Membre</h3>
                  <p className="text-[#8e8c94]">Avantages exclusifs</p>
                </div>
              </div>
              <p className="text-[#8e8c94] mb-6">
                Bénéficiez de 50% de réduction sur l'utilisation de votre carte membre pour tous nos services premium.
              </p>
              <button className="bg-[#bf3435] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a02d2e] transition-colors cursor-pointer whitespace-nowrap">
                Obtenir ma carte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Pourquoi nous choisir</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "ri-award-line",
                title: "Qualité Garantie",
                description: "Produits certifiés et conformes aux normes internationales"
              },
              {
                icon: "ri-time-line",
                title: "Service Rapide",
                description: "Délais de livraison respectés et service client réactif"
              },
              {
                icon: "ri-shield-check-line",
                title: "Fiabilité",
                description: "Plus de 20 ans d'expérience dans le secteur énergétique"
              },
              {
                icon: "ri-heart-line",
                title: "Satisfaction Client",
                description: "98% de clients satisfaits et fidèles à nos services"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#bf3435] text-white rounded-full mx-auto mb-6">
                  <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#303031] mb-4">{item.title}</h3>
                <p className="text-[#8e8c94]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Actualités</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
            <p className="text-lg text-[#8e8c94] max-w-3xl mx-auto">
              Retrouvez ici nos dernières nouvelles et mises à jour sur l'industrie de l'énergie et les activités de notre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "15 Déc 2024",
                title: "Nouvelle station-service inaugurée",
                excerpt: "Ouverture de notre 5ème station dans la zone industrielle de Conakry"
              },
              {
                date: "10 Déc 2024",
                title: "Partenariat stratégique",
                excerpt: "Accord signé avec Total Energies pour améliorer notre offre de services"
              },
              {
                date: "05 Déc 2024",
                title: "Certification ISO obtenue",
                excerpt: "Energui obtient la certification ISO 9001 pour la qualité de ses services"
              }
            ].map((news, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#bf3435] text-sm font-semibold mb-2">{news.date}</div>
                <h3 className="text-xl font-bold text-[#303031] mb-3">{news.title}</h3>
                <p className="text-[#8e8c94] mb-4">{news.excerpt}</p>
                <a href="#" className="text-[#bf3435] font-semibold hover:underline cursor-pointer">
                  Lire la suite →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Témoignages</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mamadou Diallo",
                role: "Directeur Transport",
                content: "Service exceptionnel ! Energui nous fournit des produits de qualité depuis 5 ans. Leur équipe est très professionnelle.",
                rating: 5
              },
              {
                name: "Fatoumata Camara",
                role: "Propriétaire de flotte",
                content: "Livraison rapide et fiable. Les prix sont compétitifs et la qualité est toujours au rendez-vous.",
                rating: 5
              },
              {
                name: "Ibrahim Touré",
                role: "Gérant station-service",
                content: "Partenaire de confiance. Leur support technique est excellent et disponible 24h/24.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#f8f9fa] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#bf3435]"></i>
                  ))}
                </div>
                <p className="text-[#8e8c94] mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#bf3435] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#303031]">{testimonial.name}</div>
                    <div className="text-[#8e8c94] text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Nos Partenaires</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Total Energies",
              "Shell",
              "Oryx Energies",
              "Vivo Energy"
            ].map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                <span className="text-[#303031] font-bold text-lg">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Questions Fréquemment Posées</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quels sont vos horaires d'ouverture ?",
                answer: "Nos stations sont ouvertes 24h/24 et 7j/7 pour vous servir."
              },
              {
                question: "Acceptez-vous les cartes de crédit ?",
                answer: "Oui, nous acceptons toutes les cartes de crédit et les paiements mobiles."
              },
              {
                question: "Proposez-vous des services de livraison ?",
                answer: "Oui, nous offrons des services de livraison pour les commandes en gros."
              },
              {
                question: "Comment obtenir une carte membre ?",
                answer: "Vous pouvez obtenir votre carte membre directement dans nos stations ou en ligne."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#c7c3c4] pb-6">
                <h3 className="text-xl font-bold text-[#303031] mb-3">{faq.question}</h3>
                <p className="text-[#8e8c94]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#303031] mb-4">Contactez-nous</h2>
            <div className="w-24 h-1 bg-[#bf3435] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#303031] mb-6">Nos Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full mr-4 mt-1">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303031]">Adresse</h4>
                    <p className="text-[#8e8c94]">Zone industrielle de Conakry, Guinée</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full mr-4 mt-1">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303031]">Email</h4>
                    <p className="text-[#8e8c94]">contact@energui.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full mr-4 mt-1">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303031]">Téléphone</h4>
                    <p className="text-[#8e8c94]">+224 620 00 00 00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#303031] mb-6">Prendre rendez-vous</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 border border-[#c7c3c4] rounded-lg focus:outline-none focus:border-[#bf3435] text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#c7c3c4] rounded-lg focus:outline-none focus:border-[#bf3435] text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 border border-[#c7c3c4] rounded-lg focus:outline-none focus:border-[#bf3435] text-sm"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-[#c7c3c4] rounded-lg focus:outline-none focus:border-[#bf3435] text-sm pr-8">
                    <option>Choisir un service</option>
                    <option>Vidange</option>
                    <option>Alignement</option>
                    <option>Maintenance</option>
                    <option>Livraison</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-[#c7c3c4] rounded-lg focus:outline-none focus:border-[#bf3435] text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#bf3435] text-white py-3 rounded-lg font-semibold hover:bg-[#a02d2e] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#303031] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#bf3435] mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
                Energui
              </div>
              <p className="text-[#c7c3c4] mb-4">
                L'énergie en mouvement - Votre partenaire de confiance pour tous vos besoins énergétiques.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[#c7c3c4]">
                <li><a href="#" className="hover:text-white cursor-pointer">Distribution Carburant</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Services Automobiles</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Maintenance</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Livraison</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-[#c7c3c4]">
                <li><a href="#about" className="hover:text-white cursor-pointer">À propos</a></li>
                <li><a href="#services" className="hover:text-white cursor-pointer">Services</a></li>
                <li><a href="#offers" className="hover:text-white cursor-pointer">Offres</a></li>
                <li><a href="#contact" className="hover:text-white cursor-pointer">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Restons en contact</h4>
              <p className="text-[#c7c3c4] mb-4">
                Suivez-nous sur les réseaux sociaux pour rester informé de nos actualités.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full hover:bg-[#a02d2e] transition-colors cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full hover:bg-[#a02d2e] transition-colors cursor-pointer">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full hover:bg-[#a02d2e] transition-colors cursor-pointer">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#bf3435] text-white rounded-full hover:bg-[#a02d2e] transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8e8c94] mt-8 pt-8 text-center text-[#c7c3c4]">
            <p>&copy; 2024 Energui. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
