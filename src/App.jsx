import React from "react";

const services = [
  {
    title: "Content Creation",
    icon: "✨",
    description:
      "Captivating visual storytelling that brings your vision to life. Creating memories through stunning photography and engaging social media content.",
    points: [
      "Photography",
      "Social Media Content",
      "Video Production",
      "Creative Direction",
    ],
  },
  {
    title: "Event Planning",
    icon: "📅",
    description:
      "Transforming your vision into unforgettable experiences. From concept to execution, we handle every detail.",
    points: [
      "Birthday Planning",
      "Corporate Events",
      "Private Celebrations",
      "Theme Development",
    ],
  },
  {
    title: "Event Management & Co-ordination",
    icon: "👥",
    description:
      "Seamless execution on your special day. We ensure everything runs perfectly while you enjoy the moment.",
    points: [
      "Day-of Coordination",
      "Vendor Management",
      "Timeline Creation",
      "On-site Supervision",
    ],
    featured: true,
  },
];

const storyImages = [
  { url: "DMC/new photos/IMG_3921.JPG", alt: "Event details" },
  { url: "DMC/new photos/IMG_4616.JPG", alt: "Styled event table" },
  { url: "DMC/new photos/IMG_0094.JPG", alt: "Business feature" },
  { url: "DMC/new photos/IMG_4581.JPG", alt: "Additional moment" },
  { url: "DMC/IMG_0681.JPG", alt: "Celebration moment" },
];

const gallery = [
  { url: "DMC/new photos/IMG_4598.JPG", alt: "Event gallery image 1" },
  { url: "DMC/new photos/IMG_4444.JPG", alt: "Event gallery image 2" },
  { url: "DMC/new photos/IMG_4466.JPG", alt: "Event gallery image 3" },
];

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="site-header">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-7 md:py-8">
            <div className="flex items-center gap-5">
            <img
              src={`${import.meta.env.BASE_URL}DMC/IMG_7841.JPG`}
              alt="Diamond Management Co logo"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold tracking-wide text-lg md:text-2xl">
                Diamond Management Co
              </p>
              <p className="text-sm text-gray-500">Melbourne, AU</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-base font-medium">
            <a href="#services" className="hover:text-gray-600">
              Services
            </a>
            <a href="#gallery" className="hover:text-gray-600">
              Gallery
            </a>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Make an Enquiry
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="space-y-6 text-center">
            {/* Hero Image */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-4 rounded-3xl bg-gray-100 blur-xl" />
                <img
                  src={`${import.meta.env.BASE_URL}DMC/IMG_0101.JPG`}
                  alt="Diamond Management Co feature"
                  className="relative rounded-3xl shadow-xl w-full max-w-3xl object-cover"
                />
              </div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="hero-title">
                Where Your Vision
                <span className="block">
                  Becomes Our Mission <span className="text-6xl md:text-7xl">✨</span>
                </span>
              </h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="#contact" className="btn-primary">
                  Make an Enquiry <span>→</span>
                </a>
                <a href="#gallery" className="btn-outline">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-700 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 text-sm text-gray-800">
                  {service.points.map((point, idx) => (
                    <li key={point} className="flex gap-2 items-start">
                      <span className="text-gray-400 font-semibold mt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto mb-4">
              Diamond Management Co is a legacy which aims to bring your vision to life!
            </p>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto mb-4">
              We specialise in making your vision into a reality through event planning,
              event management and content creation. From capturing your core
              memories through high quality and visually captivating content, to seamless
              event planning and coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {storyImages.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.url}`}
                  alt={item.alt}
                  className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto">
            {storyImages.slice(3).map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.url}`}
                  alt={item.alt}
                  className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Moments we&apos;ve curated
              </h2>
              <p className="text-gray-600 text-base max-w-xl">
                A glimpse into the events and content we've created with our
                incredible clients.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.url}
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.url}`}
                  alt={item.alt}
                  className="h-80 w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 text-base mb-4">
              Based in Melbourne, Diamond Management Co specializes in
              bringing visions to life through expert content creation, meticulous
              event planning, and seamless management services.
            </p>
            <p className="text-gray-600 text-base mb-6">
              We believe that every project deserves dedicated attention to detail
              and creative excellence. Whether you're planning an event, need
              compelling content, or require professional coordination, we're here
              to make it happen.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-center">
                <span className="text-lg">✓</span>
                <span className="text-gray-700">Melbourne-based professionals</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-lg">✓</span>
                <span className="text-gray-700">Personalized service</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-lg">✓</span>
                <span className="text-gray-700">Attention to every detail</span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/DMC/new photos/IMG_3929.JPG"
                alt="Diamond Management Co team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gray-900 text-white py-12 md:py-20 px-4"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make an Enquiry
            </h2>
            <p className="text-gray-300 text-base mb-4">
              Share your vision, and we'll take care of the details. For event
              planning, management or content creation, we'd love to hear from
              you.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Click below to fill out our enquiry form and we'll be in touch.
            </p>

            <a
              href="https://form.jotform.com/252712374954866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition"
            >
              Open enquiry form
            </a>

            <div className="mt-10 space-y-3 text-sm text-gray-300">
              <p>
                Email:{" "}
                <a
                  href="mailto:diamond.managementco@outlook.com"
                  className="text-white underline hover:no-underline"
                >
                  diamond.managementco@outlook.com
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/diamond.mco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:no-underline"
                >
                  @diamond.mco
                </a>
              </p>
              <p>Location: Melbourne, Australia</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
            <h3 className="text-lg font-bold mb-4">
              What to include in your enquiry
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>• Type of event or content you're planning</li>
              <li>• Preferred date(s) & location</li>
              <li>• Approximate guest count or scope</li>
              <li>• Any themes, colours or inspiration you already have</li>
              {/* <li>• Your ideal budget range</li> */}
            </ul>
            <p className="mt-6 text-xs text-gray-400">
              Providing these details helps us respond with the most tailored
              options for you.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-xs py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Diamond Management Co. All rights
            reserved.
          </p>
          <p>
            Where your vision becomes our mission <span className="text-sm">✨</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
