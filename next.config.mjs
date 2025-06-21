/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      //  Root-level images
      {
        source: '/Interview.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/Interview.png',
      },
      {
        source: '/Medconnect.jpeg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/Medconnect.jpeg',
      },
      {
        source: '/Portfolio.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/Portfolio.png',
      },
      {
        source: '/path.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/path.png',
      },
      {
        source: '/placeholder-logo.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/placeholder-logo.png',
      },
      {
        source: '/placeholder-logo.svg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/placeholder-logo.svg',
      },
      {
        source: '/placeholder-user.jpg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/placeholder-user.jpg',
      },
      {
        source: '/placeholder-user.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/placeholder-user.png',
      },
      {
        source: '/placeholder.jpg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/placeholder.jpg',
      },
      {
        source: '/placeholder.svg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/placeholder.svg',
      },
      {
        source: '/profile.jpg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/profile.jpg',
      },

      //  Resume folder
      {
        source: '/resume/CV.pdf',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/resume/CV.pdf',
      },

      //  Certificates folder
      {
        source: '/certificates/CyberSecurity.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/CyberSecurity.png',
      },
      {
        source: '/certificates/FED.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/FED.png',
      },
      {
        source: '/certificates/Internship.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/Internship.png',
      },
      {
        source: '/certificates/JS%20Bootcamp.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/JS%20Bootcamp.png',
      },
      {
        source: '/certificates/React.png',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/React.png',
      },
      {
        source: '/certificates/c-Op.jpg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/c-Op.jpg',
      },
      {
        source: '/certificates/c-basics.jpg',
        destination: 'https://raw.githubusercontent.com/Dacchu2004/My_Portfolio/main/public/certificates/c-basics.jpg',
      },
    ];
  },
};

export default nextConfig;
