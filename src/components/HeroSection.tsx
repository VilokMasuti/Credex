
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-0 overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-softsell-800 via-softsell-700 to-softsell-600 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybildIj48L3JlY3Q+PC9zdmc+')]"></div>
        </div>
      </div>

      {/* Decorative circles with subtle animation */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-softsell-300/20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-softsell-200/30 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            {/* Small badge */}
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium text-white mb-6 border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-softsell-300 mr-2"></span>
              Software License Marketplace
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Transform Unused Software into
              <span className="bg-gradient-to-r from-softsell-200 to-white bg-clip-text text-transparent"> Instant Revenue</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              SoftSell helps businesses recover value from their unused software licenses.
              Simple, secure, and profitable resale in just a few clicks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-softsell-800 transition-colors"
              >
                Sell My Licenses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Get a Valuation
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 animate-float shadow-lg">
                <div className="bg-white rounded-xl shadow-xl p-6">
                  <div className="flex flex-col space-y-4">
                    {/* License info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-softsell-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-softsell-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582a1 1 0 01.601.92V16a1 1 0 01-1 1H5.445a1 1 0 01-1-1V6.825a1 1 0 01.601-.92L9 4.323V3a1 1 0 011-1zm4.555 4.844L10 5.175 5.445 6.844V15h9.11V6.844z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Adobe Creative Cloud</p>
                        <p className="text-sm text-gray-500">2-Year Enterprise License</p>
                      </div>
                    </div>

                    {/* Progress bar with animation */}
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-softsell-400 to-softsell-500 rounded-full w-3/4 animate-pulse" style={{ animationDuration: '3s' }}></div>
                    </div>

                    {/* Valuation */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Valuation</span>
                      <span className="font-bold text-lg">$2,450</span>
                    </div>

                    {/* Details list */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Original Cost</span>
                        <span>$3,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Recovery Rate</span>
                        <span className="text-green-500">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Approval badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg border border-gray-100 animate-float" style={{ animationDelay: '0.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Small decorative element with animation */}
              <div className="absolute -top-4 -left-4 bg-softsell-100 p-3 rounded-lg shadow-sm border border-softsell-200 animate-float" style={{ animationDelay: '0.3s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-softsell-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
