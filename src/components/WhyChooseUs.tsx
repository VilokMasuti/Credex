
import { Card, CardContent } from '../components/ui/card';
const features = [
  {
    id: 1,
    title: 'Maximize License Value',
    description: 'Get up to 70% of the original price for your unused licenses, far more than traditional buyback programs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-softsell-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Secure & Compliant',
    description: 'Our platform ensures all transfers are legally compliant with software licensing agreements and data protection regulations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-softsell-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Instant Valuations',
    description: 'Our AI-powered platform provides immediate valuations based on real-time market data and demand analysis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-softsell-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Fast Payment',
    description: 'Receive funds within 48 hours of accepting an offer, with flexible payment options including direct deposit and crypto.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-softsell-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-softsell-50/50 via-white to-white z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjNGE2ZSIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-1.5 px-3 mb-6 rounded-full bg-gradient-to-r from-softsell-100 to-softsell-200 text-softsell-800 font-medium text-sm">
            Why Choose SoftSell
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-softsell-700 to-softsell-500 bg-clip-text text-transparent">
            The Smart Way to Recoup Software Investments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're revolutionizing software license resale with technology, transparency, and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-softsell-100/50 hover:border-softsell-300/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="relative">
                  {/* Feature number indicator */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-softsell-100 flex items-center justify-center text-xs font-semibold text-softsell-700">
                    {feature.id}
                  </div>

                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-softsell-100 to-softsell-200 rounded-lg mb-4">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
