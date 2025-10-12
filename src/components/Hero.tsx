import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  variant?: 'home' | 'inner';
}

const Hero = ({
  title,
  subtitle,
  showCta = false,
  ctaText = "Apply for Membership",
  ctaLink = "/contact",
  backgroundImage,
  variant = 'home',
}: HeroProps) => {
  // Set default background image based on variant
  const defaultBackgroundImage = variant === 'inner' ? '/images/hero-bg-inner.webp' : '/images/hero-bg.webp';
  const finalBackgroundImage = backgroundImage || defaultBackgroundImage;
  
  // Set height based on variant
  const heightClass = variant === 'inner' ? 'min-h-[300px] md:min-h-[400px]' : 'min-h-[600px] md:min-h-[700px]';
  return (
    <div 
      className={`relative ${heightClass} flex items-center`}
      style={{
        backgroundImage: `url(${finalBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto">{subtitle}</p>
        )}
        {showCta && (
          <Link 
            href={ctaLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg transition duration-300 transform hover:scale-105 text-base md:text-lg"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero; 