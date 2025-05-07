import { Card, CardContent } from '../components/ui/card';

const steps = [
  {
    id: 1,
    title: 'Upload License',
    description: 'Upload your unused or excess software license details to our secure platform.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Get Valuation',
    description: 'Our AI algorithm instantly assesses your license and provides a competitive market valuation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Get Paid',
    description: 'Accept the offer and receive payment within 48 hours. No hassle, no waiting.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-softsell-700 to-softsell-900 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFMwIDguMDYgMCAxOGMwIDkuOTQgOC4wNiAxOCAxOCAxOHMxOC04LjA2IDE4LTE4em0yNCAwYzAtOS45NC04LjA2LTE4LTE4LTE4cy0xOCA4LjA2LTE4IDE4YzAgOS45NCA4LjA2IDE4IDE4IDE4czE4LTguMDYgMTgtMTh6TTM2IDQyYzAtOS45NC04LjA2LTE4LTE4LTE4UzAgMzIuMDYgMCA0MmMwIDkuOTQgOC4wNiAxOCAxOCAxOHMxOC04LjA2IDE4LTE4em0yNCAwYzAtOS45NC04LjA2LTE4LTE4LTE4cy0xOCA4LjA2LTE4IDE4YzAgOS45NCA4LjA2IDE4IDE4IDE4czE4LTguMDYgMTgtMTh6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our streamlined process makes selling unused software licenses simple, secure, and profitable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className={`w-full md:w-1/3 backdrop-blur-xl bg-white/10 border border-white/20 overflow-hidden text-white hover:transform hover:scale-105 transition-all duration-300 animate-fade-in rounded-xl`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="relative p-8 flex flex-col items-center text-center">
                  {/* Number indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>

                  {/* Icon with gradient background */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>

                  {index < steps.length - 1 && (
                    <svg className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
