
import { Card, CardContent } from '../components/ui/card';
import { QuoteIcon } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'Tech Innovations Ltd',
    quote: 'SoftSell recovered over $25,000 from our unused Adobe and Microsoft licenses. The process was incredibly simple, and the valuation was higher than we expected.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CFO',
    company: 'Quantum Solutions',
    quote: 'As we migrated to cloud services, SoftSell helped us recoup costs from our legacy software investments. Their security protocols gave us peace of mind throughout the process.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-softsell-50/50 to-white z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAyMGMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMFMwIDMxLjA0NiAwIDIwIDguOTU0IDAgMjAgMHMyMCA4Ljk1NCAyMCAyMHptLTIgMGMwLTkuOTQxLTguMDU5LTE4LTE4LTE4UzIgMTAuMDU5IDIgMjBzOC4wNTkgMTggMTggMTggMTgtOC4wNTkgMTgtMTh6IiBmaWxsPSIjMDM2OWExIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-softsell-700 to-softsell-500 bg-clip-text text-transparent">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it. Here's what businesses that have used SoftSell have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="overflow-hidden bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-softsell-400 to-softsell-600"></div>

                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-softsell-100 mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <QuoteIcon className="w-8 h-8 text-softsell-200 absolute -top-2 -left-2 opacity-50" />
                      <p className="text-lg pl-6">{testimonial.quote}</p>
                    </div>

                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
