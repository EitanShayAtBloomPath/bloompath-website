export default function AboutPage() {
  const mail = (subject: string) =>
    `mailto:E@BloomPathHealth.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Hi BloomPath team,

I’m reaching out from the About page.

- Name:
- Organization (if any):
- Phone:
- Notes:

Thanks!`
    )}`;

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section (same style as homepage) */}
      <section className="bg-gradient-to-r from-teal-500 to-green-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About BloomPath Health</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          We’re closing the pediatric obesity treatment gap with family-based, guideline-compliant
          care — delivered online and powered by thoughtful technology.
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

      {/* Mission & Why Now */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Empower families and clinicians with accessible, engaging, and outcomes-driven care
              that follows AAP/USPSTF recommendations for Intensive Health Behavior and Lifestyle
              Treatment (IHBLT, ≥26 hours), improving health today and reducing future risk.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Now</h2>
            <p className="text-lg leading-relaxed">
              Fewer than 1% of eligible children receive IHBLT today. Coverage mandates, telehealth
              parity, and AI-enabled care coordination create a unique moment to expand access
              responsibly and at scale—without sacrificing quality or family warmth.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed mb-4">
            BloomPath Health was founded to bridge a simple but stubborn gap: guideline-consistent
            pediatric weight management is proven to work, yet it’s rarely accessible. We pair
            family-centered clinical programs with modern software that lightens clinician workload,
            clarifies goals for families, and keeps everyone aligned on outcomes.
          </p>
          <p className="text-lg leading-relaxed">
            We believe great care feels human, practical, and hopeful. Technology should support
            that—not replace it.
          </p>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Guideline-Compliant</h3>
            <p>
              ≥26 hours IHBLT curriculum aligned with AAP/USPSTF. Family-based, behavior-first,
              nutrition- and activity-forward.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">AI-Assisted, Human-Led</h3>
            <p>
              We streamline intake, triage, education, and follow-ups—so clinicians spend more time
              on relationship-building and personalized coaching.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Outcomes & Reporting</h3>
            <p>
              Transparent progress tracking for families and real-time outcomes dashboards for
              partners—built for quality and reimbursement.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Values</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li className="p-5 bg-white rounded-2xl shadow">
              <span className="font-semibold">Family First:</span> Parents and kids learn together.
            </li>
            <li className="p-5 bg-white rounded-2xl shadow">
              <span className="font-semibold">Evidence Over Hype:</span> We follow the guidelines and publish results.
            </li>
            <li className="p-5 bg-white rounded-2xl shadow">
              <span className="font-semibold">Respect & Inclusion:</span> Culturally sensitive, accessible, compassionate.
            </li>
            <li className="p-5 bg-white rounded-2xl shadow">
              <span className="font-semibold">Privacy by Design:</span> HIPAA-minded, least-privilege access, clear consent.
            </li>
          </ul>
        </div>
      </section>

      {/* Leadership (kept as requested) */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Eitan Shay — Co-founder & CEO</h3>
              <p className="mt-2 text-lg">
                Former Chief Product Officer at <span className="font-semibold">Dario Health (NASDAQ: DRIO)</span> 
                and senior product leader at <span className="font-semibold">Livongo</span> and 
                <span className="font-semibold"> Teladoc Health</span>. 
                Eitan has scaled digital health platforms from early adoption to 
                hundreds of millions in revenue, bringing together AI, product innovation, 
                and clinical rigor.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Lior Harsat — Co-founder & CTO</h3>
              <p className="mt-2 text-lg">
                Spent 11 years at <span className="font-semibold">Meta</span>, where he 
                helped scale core systems to billions of users. An 
                <span className="font-semibold"> AI-native engineer</span>, Lior brings 
                deep expertise in distributed systems, reliability, and machine learning 
                infrastructure—building technology that is robust, secure, and future-facing.
              </p>
            </div>
          </div>

          {/* Advisors/Clinical Board placeholder */}
          <div className="mt-10 p-6 bg-white rounded-2xl border">
            <h3 className="text-xl font-semibold mb-2">Clinical Advisors</h3>
            <p className="text-lg">
              We’re assembling a pediatric, nutrition, and behavioral health advisory group to guide
              protocols, training, and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Coverage */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Compliance</h3>
            <p className="mt-2">
              HIPAA-aligned operations, least-privilege access, encryption in transit and at rest.
              SOC 2 readiness in progress.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Coverage</h3>
            <p className="mt-2">
              CPT/MNT-aligned pathways designed for payer reimbursement and employer offerings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-400 to-teal-500 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Connect with BloomPath</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href={mail("Book a Demo - BloomPath Health")}
            className="bg-white text-teal-700 font-semibold py-3 px-6 rounded-2xl shadow hover:bg-gray-100 transition"
          >
            Book a Demo
          </a>
          <a
            href={mail("Request a Demo - BloomPath Health")}
            className="bg-transparent border border-white py-3 px-6 rounded-2xl font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Request a Demo
          </a>
          <a
            href={mail("Get Started Today - BloomPath Health")}
            className="bg-transparent border border-white py-3 px-6 rounded-2xl font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Get Started Today
          </a>
          <a
            href={mail("Partner With Us - BloomPath Health")}
            className="bg-transparent border border-white py-3 px-6 rounded-2xl font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Partner with Us
          </a>
        </div>
      </section>

      {/* Footer (same as homepage, with About link active) */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center">
        <p className="mb-4">BloomPath Health © {new Date().getFullYear()}</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Program</a>
          <a href="#" className="hover:text-white">Partners</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <p className="mt-6 text-xs">HIPAA Compliant • SOC2 Certified • Privacy Policy</p>
      </footer>
    </div>
  );
}

