'use client';

import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#422006] font-sans scroll-smooth">
      <Header />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="text-center py-24 px-6 bg-gradient-to-b from-amber-100 to-white">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Pure Farm Dung</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
            Premium Cow Dung Products – 100% Organic, Eco-Friendly & Globally Trusted.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#78350f] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#92400e] transition"
          >
            Get Free Quote
          </a>
        </section>

        {/* Products Section */}
        {/* Our Products */}
<section id="products" className="py-16 px-6 bg-white text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">Our Products</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {/* Product 1 */}
      <div className="p-6 bg-amber-50 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">Cow Dung Cakes</h3>
        <p className="text-gray-600 mb-3">Sun-dried, smoke-free, and clean – perfect for rituals and eco-friendly fuel.</p>
        <span className="inline-block bg-[#78350f] text-white px-4 py-1 rounded-full text-sm">100% Natural</span>
      </div>
      {/* Product 2 */}
      <div className="p-6 bg-amber-50 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">Cow Dung Powder</h3>
        <p className="text-gray-600 mb-3">Ideal for compost, fertilizer blending, and enriching soil naturally.</p>
        <span className="inline-block bg-[#78350f] text-white px-4 py-1 rounded-full text-sm">Lab Tested</span>
      </div>
      {/* Product 3 */}
      <div className="p-6 bg-amber-50 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">Composted Cow Dung</h3>
        <p className="text-gray-600 mb-3">Fully aged and nutrient-packed compost for high-yield farming.</p>
        <span className="inline-block bg-[#78350f] text-white px-4 py-1 rounded-full text-sm">Eco-Friendly</span>
      </div>
    </div>
    <p className="mt-8 text-gray-700">Available in bulk packaging – 5kg, 10kg, 25kg, 50kg, and more.</p>
  </div>
</section>

{/* Export & Shipping */}
<section id="export" className="py-16 px-6 bg-amber-50 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">Export & Shipping</h2>
    <p className="text-gray-700 mb-8">
      We currently export to <strong>UAE, Qatar, Kenya, UK, Nepal</strong> and more.  
      Our team handles all export formalities and delivers to your port of choice with complete documentation and logistics support.
    </p>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="p-6 bg-white rounded-xl shadow">
        <h3 className="font-semibold mb-2">🌍 Global Reach</h3>
        <p className="text-gray-600">Supplying premium cow dung products to multiple countries worldwide.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow">
        <h3 className="font-semibold mb-2">📦 Hassle-Free Logistics</h3>
        <p className="text-gray-600">We manage end-to-end logistics, ensuring timely delivery and smooth customs clearance.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow">
        <h3 className="font-semibold mb-2">📜 Complete Documentation</h3>
        <p className="text-gray-600">All export and shipping paperwork handled with full transparency.</p>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us */}
        <section className="py-20 px-6 bg-white text-center" id="why">
          <h2 className="text-4xl font-bold mb-12 text-[#422006]">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-sm text-gray-600">
                Sourced from healthy cows and sun-dried naturally. No chemicals or additives.
              </p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌏</div>
              <h3 className="text-xl font-semibold mb-2">Global Export</h3>
              <p className="text-sm text-gray-600">
                Trusted by buyers in over 10+ countries for reliability and quality.
              </p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Fuel</h3>
              <p className="text-sm text-gray-600">
                Clean alternative to firewood or coal, used in homes, temples, and farms.
              </p>
            </div>
          </div>
        </section>

{/* Benefits Section */}
{/* Benefits Section */}
<section className="py-20 px-6 bg-amber-50 text-center" id="benefits">
  <h2 className="text-4xl font-bold mb-12 text-[#422006]">Key Benefits</h2>
  <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
    <div className="p-6 rounded-xl border hover:shadow-xl transition bg-white">
      <div className="text-5xl mb-4">🌱</div>
      <h3 className="text-xl font-semibold mb-2">Soil Enhancement</h3>
      <p className="text-sm text-gray-600">
        Boosts soil fertility and microbial activity for healthy, sustainable farming.
      </p>
    </div>
    <div className="p-6 rounded-xl border hover:shadow-xl transition bg-white">
      <div className="text-5xl mb-4">♻️</div>
      <h3 className="text-xl font-semibold mb-2">Zero Waste</h3>
      <p className="text-sm text-gray-600">
        Completely biodegradable, making it an ideal solution for waste-free agriculture.
      </p>
    </div>
    <div className="p-6 rounded-xl border hover:shadow-xl transition bg-white">
      <div className="text-5xl mb-4">💰</div>
      <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
      <p className="text-sm text-gray-600">
        Affordable alternative to chemical fertilizers and synthetic fuels.
      </p>
    </div>
  </div>
</section>

{/* Samples Available */}
<section id="samples" className="py-16 px-6 bg-white text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Samples Available on Request</h2>
    <p className="text-gray-700 max-w-3xl mx-auto mb-10">
      We understand the importance of trust in international trade. That’s why we offer <strong>free product samples</strong> 
      (shipping charges apply) to serious buyers who want to verify quality before placing bulk orders.
    </p>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="p-6 bg-amber-50 rounded-xl shadow">
        <h3 className="font-semibold mb-2">🪵 Cow Dung Cakes</h3>
        <p className="text-gray-600">Sun-dried, smoke-free, clean, and perfect for rituals or fuel.</p>
      </div>
      <div className="p-6 bg-amber-50 rounded-xl shadow">
        <h3 className="font-semibold mb-2">🌾 Cow Dung Powder</h3>
        <p className="text-gray-600">Ideal for compost, fertilizers, and soil enrichment.</p>
      </div>
      <div className="p-6 bg-amber-50 rounded-xl shadow">
        <h3 className="font-semibold mb-2">🌱 Composted Manure</h3>
        <p className="text-gray-600">Fully aged, nutrient-rich, and pest-free for organic farming.</p>
      </div>
    </div>

    <p className="mt-8 text-gray-600">
      Samples are shipped globally via air/express courier.
    </p>
  </div>
</section>

        {/* Gallery Section */}
        {/* About Us */}
<section id="about" className="py-16 px-6 bg-amber-50 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">About Us</h2>
    <p className="text-gray-700 mb-4">
      I’m Avinash, the founder of <strong>PureFarmDung</strong>, a division of Abhi Groups Pvt. Ltd.
      After completing my MSc in Management in the UK, I launched this company to bridge
      India’s rich agricultural resources with global eco-friendly needs.
    </p>
    <p className="text-gray-700 mb-4">
      Headquartered in Warangal, Telangana, we specialize in exporting organic cow dung for
      agriculture, composting, and spiritual use — backed by international standards and transparency.
    </p>
    <p className="text-gray-700">
      Our mission is simple: deliver the purest, most eco-friendly products to customers around the world
      while ensuring quality, trust, and sustainability.
    </p>
  </div>
</section>

        {/* Contact Information */}
<section id="contact" className="py-16 px-6 bg-gradient-to-b from-white to-amber-50 text-center text-[#422006]">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-700">
      Want to import premium Indian cow dung? We’re ready to supply at scale.  
      Get in touch with us for inquiries, orders, or sample requests.
    </p>

    <div className="grid gap-8 md:grid-cols-3 text-left">
      <div className="bg-amber-100/50 p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
        <p className="break-all text-[#78350f]">purefarmdung@gmail.com</p>
      </div>

      <div className="bg-amber-100/50 p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-2">📱 WhatsApp</h3>
        <p className="text-[#78350f]">+91 80747 58938 | +44 75875 43911</p>
      </div>

      <div className="bg-amber-100/50 p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
        <p className="text-[#78350f]">
          32-1-67/1, Pavelipula, Hanamkonda,  
          Warangal – 506015, Telangana, India
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="py-6 bg-[#422006] text-white text-center text-sm">
          &copy; {new Date().getFullYear()} Pure Farm Dung. All rights reserved.
        </footer>
      </div>
    </main>
  );
}