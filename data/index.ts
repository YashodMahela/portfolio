export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' }
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: ''
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: ''
  },
  {
    id: 4,
    title: 'Building fast and elegant experiences.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg'
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg'
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: ''
  }
];

export const projects = [
  {
    id: 1,
    title: 'DIRAS - Election Monitoring System',
    des: 'Real-time reporting system managing 2000+ incidents per cycle with geospatial mapping and WebSocket streams.',
    img: '/diras.png',
    iconLists: ['/laravel.svg', '/php.svg', '/mysql.svg', '/redis.svg', '/tail.svg'], // Based on Laravel, PHP, MySQL, Redis, Tailwind [cite: 39]
    link: 'https://github.com/YashodMahela'
  },
  {
    id: 2,
    title: 'Chanda Salli Meeter - Finance Tracker',
    des: 'Secure data collection and real-time expense tracking system built for election candidates using FilamentV3.',
    img: '/chandasalli.png',
    iconLists: ['/laravel.svg', '/php.svg', '/tail.svg', '/filament.png', '/sqlite.svg'], // Based on Laravel, PHP, Tailwind, Filament, SQLite [cite: 43]
    link: 'https://github.com/YashodMahela'
  },
  {
    id: 3,
    title: 'JothishyaLK - Astrological Market',
    des: 'Dual-dashboard marketplace with role-based access control, enabling scheduling, pricing, and booking tracking.',
    img: '/jothishya.png',
    iconLists: ['/laravel.svg', '/mysql.svg', '/stripe.svg', '/filament.png', '/chart.svg'], // Based on Laravel, MySQL, Stripe, Filament, Chart.js [cite: 29]
    link: 'https://github.com/YashodMahela'
  },
  {
    id: 4,
    title: 'Trend Tide - E-Commerce Platform',
    des: 'Modern full-stack e-commerce platform with secure authentication, dynamic product catalog, and Stripe payments.',
    img: '/trendtide.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/mongo.svg', '/clerk.svg'], // Based on React, Tailwind, TS, MongoDB, Clerk [cite: 34]
    link: 'https://github.com/YashodMahela'
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  }
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg'
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg'
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg'
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg'
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg'
  }
];

export const workExperience = [
  {
    id: 1,
    title: 'Software Engineer',
    desc: 'Architected scalable enterprise systems like DIRAS and optimized RESTful APIs for high-volume traffic.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg'
  },
  {
    id: 2,
    title: 'Visiting Lecturer - UCSC',
    desc: 'Instructing undergraduates on System & Network Administration, focusing on Linux systems and virtualization.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg'
  },
  {
    id: 3,
    title: 'Scrum Master',
    desc: 'Led 3 product teams using Agile methodologies, improving team velocity by 25% and mentoring juniors.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg'
  },
  {
    id: 4,
    title: 'Programs Organizer',
    desc: 'Organized startup events and mentorship programs to support emerging entrepreneurs at Uva Startup Hub.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg'
  }
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg'
  },
  {
    id: 2,
    img: '/twit.svg'
  },
  {
    id: 3,
    img: '/link.svg'
  }
];
