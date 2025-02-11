"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The platform transformed our business completely. The results were beyond our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    metric: "5x",
    metricLabel: "Faster Conversion",
    signature: "Sarah Johnson"
  },
  {
    id: 2,
    quote: "Our customer engagement skyrocketed within months of implementation. Absolutely game-changing.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    metric: "250+",
    metricLabel: "New Reviews",
    signature: "Michael Chen"
  },
  {
    id: 3,
    quote: "The ROI we've seen is incredible. This solution paid for itself within the first quarter.",
    author: "Emma Davis",
    role: "COO, InnovateNow",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop",
    metric: "3.2x",
    metricLabel: "Revenue Growth",
    signature: "Emma Davis"
  }
];

export default function Home() {
  const [positions, setPositions] = useState([0, 1, 2]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayTimer, setAutoplayTimer] = useState<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayTimer) clearInterval(autoplayTimer);
    const timer = setInterval(() => {
      rotateCards();
    }, 7000);
    setAutoplayTimer(timer);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };
  }, [positions, startAutoplay]);

  const rotateCards = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPositions(prev => [(prev[1]), (prev[2]), (prev[0])]);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const navigateToCard = (targetIndex: number) => {
    if (isTransitioning) return;

    const currentTopIndex = positions.indexOf(0);
    const targetPosition = positions.indexOf(targetIndex);
    
    if (currentTopIndex === targetPosition) return;

    setIsTransitioning(true);

    const newPositions = [...positions];
    [newPositions[currentTopIndex], newPositions[targetPosition]] = 
      [newPositions[targetPosition], newPositions[currentTopIndex]];

    setPositions(newPositions);
    startAutoplay();

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const getCardPosition = (index: number) => {
    const position = positions.indexOf(index);
    switch (position) {
      case 0:
        return "top";
      case 1:
        return "middle";
      case 2:
        return "bottom";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>

        <div className="carousel-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-card ${getCardPosition(index)} ${
                isTransitioning ? "transitioning" : ""
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <Quote className="w-12 h-12 text-primary mb-6 opacity-20" />
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {testimonial.metric}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                      {testimonial.metricLabel}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <p className="font-signature text-xl text-gray-600">
                    {testimonial.signature}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-nav-button ${positions.indexOf(index) === 0 ? 'active' : ''}`}
              onClick={() => navigateToCard(index)}
              aria-label={`Navigate to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}