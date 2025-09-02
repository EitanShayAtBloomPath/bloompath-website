export default function Page() {
  const mail = (subject: string) =>
    `mailto:E@BloomPathHealth.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Hi BloomPath team,

I’d like to connect about this request.

- Name:
- Organization (if any):
- Phone:
- Notes:

Thanks!`
    )}`;

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-green-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Closing the Pediatric Obesity Treatment Gap
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          BloomPath Health delivers scalable, AI-powered programs that meet AAP/USPSTF
          recommendations and payer coverage mandates — while empowering families to live healthier lives.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href={mail("Get Started Today - BloomPath Health")}
            className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href={mail("Partner With Us - BloomPath Health")}
            className="bg-transparent border border-white py-3 px-6 rounded-2xl font-semibold hover:bg-white hover:text-teal-600 transition"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Less than 1% of eligible children get access to the care they need. Childhood obesity
          continues to rise, creating long-term health and economic consequences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">42M+</h3>
            <p>Children worldwide face obesity risk.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">&lt;1%</h3>
            <p>Have access to IHBLT treatment programs.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">3X</h3>
            <p>Increased risk of adult obesity and chronic illness.</p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Family-Based Curriculum</h3>
            <p>26+ hours of AAP/USPSTF-aligned care designed for parents and children together.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Care Delivery</h3>
            <p>Streamlined intake, scalable provider/RD support, and hybrid async + live sessions.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Measurable Outcomes</h3>
            <p>Real-time dashboards for families, providers, and payers to track progress and ROI.</p>
          </div>
        </div>
      </section>

      {/* For Families */}
      <section className="py-16 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-center mb-8">For Families</h2>
        <div className="max-w-3xl mx-auto text-lg space-y-4">
          <p>Flexible telehealth sessions (live + self-paced)</p>
          <p>Traffic Light Diet + MyPlate framework made simple</p>
          <p>Parent and child-focused modules</p>
          <p>Ongoing progress tracking and rewards</p>
        </div>
        <div className="text-center mt-6">
          <a
            href={mail("Get Started Today - BloomPath Health")}
            className="bg-teal-600 text-white py-3 px-6 rounded-2xl font-semibold shadow hover:bg-teal-700 transition"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* For Partners */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">For Partners</h2>
        <div className="max-w-3xl mx-auto text-lg space-y-4 text-center">
          <p>CPT and MNT-reimbursable care pathways</p>
          <p>Proven engagement and retention strategies</p>
          <p>White-label provider network options</p>
          <p>Real-time outcomes dashboards</p>
        </div>
        <div className="text-center mt-6">
          <a
            href={mail("Request a Demo - BloomPath Health")}
            className="bg-teal-600 text-white py-3 px-6 rounded-2xl font-semibold shadow hover:bg-teal-700 transition"
          >
            Request a Demo
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-r from-green-400 to-teal-500 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build a Healthier Future for Kids — Together
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href={mail("Get Started Today - BloomPath Health")}
            className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
          >
            Get Started Today
          </a>
          <a
            href={mail("Book a Demo - BloomPath Health")}
            className="bg-transparent border border-white py-3 px-6 rounded-2xl font-semibold hover:bg-white hover:text-teal-600 transition"
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center">
        <p className="mb-4">BloomPath Health © {new Date().getFullYear()}</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Program</a>
          <a href="#" className="hover:text-white">Partners</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <p className="mt-6 text-xs">HIPAA Compliant • SOC2 Certified • Privacy Policy</p>
      </footer>
    </div>
  );
}

