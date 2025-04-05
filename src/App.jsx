import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogInmobiliario() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToUbicacion = () => {
    const section = document.getElementById("ubicacion");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFormulario = () => {
    const section = document.getElementById("contacto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    const phone = '573148771924'; // Reemplaza con el número de teléfono con código de país (sin +)
    const imageUrl = 'https://tu-dominio.com/ruta-a-la-imagen.jpg'; // URL de la imagen que quieres mostrar
    const message = encodeURIComponent(
      `Estoy interesado en la propiedad.\nRevisa la imagen: ${imageUrl}`
    );
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="font-sans bg-[#F9F6F2] text-[#1F1F1F] scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center justify-center">
        <img
          src="/fondo-madera.jpg"
          alt="fondo"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.9) blur(4px)' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center text-center gap-y-6 px-4" data-aos="fade-up">
          <h1 className="text-[60px] sm:text-[64px] md:text-[80px] font-serif font-extrabold text-white italic drop-shadow-2xl leading-tight">
            Apartamento Duplex
          </h1>
          <p className="text-[28px] sm:text-2xl md:text-3xl text-white italic drop-shadow-md">
            Donde el diseño se encuentra con el confort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToUbicacion}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1F1F1F] hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-md"
            >
              Ver ubicación
            </Button>

            <Button
              onClick={handleClick}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1F1F1F] hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-md"
            >
              Hablar por WhatsAPPP
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre el proyecto */}
      <section className="bg-[#FFFDF9] border-t-4 border-[#D6BFA3] px-4 sm:px-6 py-14 sm:py-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6">Sobre el proyecto</h2>
        <p className="max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">Proyecto residencial con acabados de lujo, espacios diseñados para el bienestar y una ubicación privilegiada cerca de todo.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: '/ubicacion.svg', text: 'Ubicación estratégica' },
            { icon: '/parqueadero.svg', text: 'Parqueadero privado' },
            { icon: '/acabados.svg', text: 'Acabados de alta gama' },
            { icon: '/verdes.svg', text: 'Espacios verdes' },
          ].map((item, idx) => (
            <Card key={idx} className="text-center hover:shadow-xl transition-shadow rounded-xl">
              <CardContent className="flex flex-col items-center gap-2 py-6">
                <div className="bg-[#f5eadd] p-3 rounded-full shadow">
                  <img src={item.icon} alt="icono" className="w-6 h-6" />
                </div>
                <p className="font-medium text-[#1F1F1F]">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="px-4 sm:px-6 py-14 sm:py-20" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-10">Galería</h2>
        <Swiper
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination, Autoplay]}
          className="rounded-xl max-w-4xl mx-auto"
        >
          {['cocina', 'sala', 'habitacion-principal', 'toilet', 'entrada'].map((area, index) => (
            <SwiperSlide key={index}>
              <img src={`/${area}.jpg`} alt={area} className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-md" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 max-w-4xl mx-auto">
          <video controls className="w-full rounded-xl shadow-lg">
            <source src="/video-testimonial.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Ubicación */}

      <section className="bg-[#fefaf3] px-4 sm:px-6 py-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
    
        {/* Texto descriptivo */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1F1F] leading-snug">
          Ubicación
        </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#444]">
            Vive cerca de todo lo que necesitas. Nuestro proyecto se encuentra a minutos de centros comerciales, colegios, restaurantes y zonas verdes, con fácil acceso a vías principales.
          </p>
          <ul className="mt-4 space-y-2 text-[#1f1f1f] text-sm sm:text-base">
            <li>📍 Calle 6 #36-21, Duitama, Boyacá</li>
            <li>🛣️ Acceso desde Carrera 28B y Avenida de las Américas</li>
            <li>🛍️ A 5 minutos de centro comercial Innovo Plaza</li>
          </ul>
        </div>

        {/* Mapa estilizado */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#ddd]">
            <iframe
              className="w-full h-72 sm:h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727.7694649134984!2d-73.03158946782298!3d5.808995723606637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f7cf5a8ebc9%3A0xef440b7b891edc4a!2sCl.%206%20%2336-21%2C%20Duitama%2C%20Boyac%C3%A1!5e1!3m2!1ses!2sco!4v1743811001449!5m2!1ses!2sco"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[#D6BFA3] px-6 py-20 text-center text-[#1F1F1F]" data-aos="fade-up">
        <h2 className="text-3xl font-serif mb-6">Agenda una visita y vive la experiencia desde ahora</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-[#1F1F1F] text-white px-6 py-3 rounded-xl hover:bg-[#333] transition">Agendar visita</Button>
          <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2 px-6 py-3 rounded-xl transition">
            <img src="/whatsapp.svg" className="w-4 h-4" alt="whatsapp" /> Hablar por WhatsApp
          </Button>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="px-6 py-20 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-serif text-center mb-8">Preguntas frecuentes</h2>
        <Accordion>
          <AccordionItem title="¿Qué incluye el precio?">
            Incluye acabados de lujo, parqueadero privado y acceso a zonas comunes.
          </AccordionItem>
          <AccordionItem title="¿Hay modelos disponibles para entrega inmediata?">
            Sí, contamos con unidades listas para entrega inmediata. Agenda tu visita.
          </AccordionItem>
          <AccordionItem title="¿Se puede separar con financiación?">
            Sí, trabajamos con múltiples entidades para facilitar el proceso.
          </AccordionItem>
        </Accordion>
      </section>


      {/* Footer */}
      <footer className="bg-[#f0ece6] border-t px-6 py-10 text-sm text-center">
        <div className="flex flex-col items-center gap-2">
          <p><Phone className="inline mr-2" />+57 123 456 7890</p>
          <p><MapPin className="inline mr-2" />Calle 123 #45-67, Ciudad</p>
          <p><MessageCircle className="inline mr-2" />WhatsApp: +57 321 654 9870</p>
          <p><Mail className="inline mr-2" />correo@proyecto.com</p>
          <div className="flex gap-4 mt-4">
            <img src="/facebook.svg" alt="Facebook" className="w-6 hover:scale-110 transition" />
            <img src="/instagram.svg" className="w-6 transition-transform transform hover:scale-110 hover:opacity-80" />
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 hover:scale-110 transition" />
          </div>
        </div>
      </footer>
    </div>
  );
}