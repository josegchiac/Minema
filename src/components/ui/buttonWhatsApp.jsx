export function Button({ children, className = '', ...props }) {
    const handleClick = () => {
      const phone = '1234567890'; // Reemplaza con el número de teléfono con código de país (sin +)
      const imageUrl = 'https://tu-dominio.com/ruta-a-la-imagen.jpg'; // URL de la imagen que quieres mostrar
      const message = encodeURIComponent(
        `Estoy interesado en la propiedad.\nRevisa la imagen: ${imageUrl}`
      );
      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
      window.open(url, '_blank');
    };
  
    return (
      <button
        onClick={handleClick}
        className={`bg-transparent border border-white text-white hover:bg-white hover:text-[#1F1F1F] hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-md ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  