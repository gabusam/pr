"use client";

import { Check, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const reviewPlatforms = [
  { 
    name: "Google", 
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
  },
  { 
    name: "Facebook", 
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%231877F2' d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E%3C/svg%3E"
  },
  { 
    name: "Yelp", 
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF1A1A' d='M20.16 12.73c-.12-.37-.43-.54-.74-.61l-4.56-.67c-.3-.04-.57.15-.72.42-.15.27-.15.59.01.85l3.43 5.64c.15.25.42.39.7.37.28-.02.53-.21.64-.48l1.07-2.73c.21-.5.33-1.06.33-1.62 0-.42-.06-.84-.16-1.17zM12.83 16c-.27.17-.42.47-.39.79l.56 4.48c.03.25.17.47.38.59.21.12.46.13.68.02 1.93-.95 3.44-2.63 4.14-4.71.09-.26.03-.55-.15-.75-.18-.2-.46-.28-.71-.2l-4.51 1.78zm-1.46-.4c-.24.16-.38.43-.38.72s.15.56.38.71l4.43 2.86c.23.15.52.16.76.03.24-.13.39-.37.39-.64v-2.86c0-.85-.18-1.72-.53-2.51-.15-.34-.54-.48-.88-.33l-4.17 2.02zM6.4 14.8c.2.2.49.26.75.15 2.06-.81 3.67-2.41 4.51-4.39.1-.25.07-.53-.09-.75-.16-.22-.42-.34-.69-.31l-4.46.58c-.31.04-.57.25-.67.54-.1.29-.04.6.17.82l.48.52v2.84zm-.56-5.67c.09.29.33.5.63.54l4.55.61c.27.04.54-.07.7-.28.16-.21.2-.49.1-.74L9.84 4.45c-.14-.34-.47-.55-.84-.52-.36.03-.67.29-.76.64l-.44 1.73c-.17.69-.25 1.4-.25 2.11 0 .26.02.51.05.76l.24.96z'/%3E%3C/svg%3E"
  },
  { 
    name: "BBB", 
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230B5ED7' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3Cpath fill='%230B5ED7' d='M11 7h2v10h-2zm-4 0h2v10H7zm8 0h2v10h-2z'/%3E%3C/svg%3E"
  },
  {
    name: "Angi",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2322B35E' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.21c-.41.77-1.2 1.29-2.1 1.29s-1.69-.52-2.1-1.29L8.74 8.7h2.29l2.86 5.35 2.86-5.35h2.29l-3.4 6.51z'/%3E%3C/svg%3E"
  },
  {
    name: "OpenTable",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23DA3743' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E"
  }
];

const PriceTag = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-1 inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
    {children}
  </span>
);

const plans = [
  {
    name: "Local Starter",
    description: "For Small Shops and Local Service Providers",
    monthlyPrice: "79",
    yearlyPrice: "66",
    features: {
      usage: [
        "Free 14-day trial",
        "Cancel at anytime",
        "1 Location",
        "250 monthly email invitations",
        "100 SMS monthly invitations",
        "3 users",
        "6 widgets to display your rating and review count",
      ],
      keyFeatures: [
        "Prevent Negative Reviews",
        "Import/Export Reviews",
        "Hide Reviews",
        "Tag Reviews",
        "Sentiment analysis",
        "Social Share",
        "Language Detection",
        "Minimum Rating Filter",
      ],
    },
    highlight: false,
  },
  {
    name: "Regional Growth",
    description: "Perfect for Multi-Location Business in a City or a Region",
    monthlyPrice: "119",
    yearlyPrice: "99",
    features: {
      usage: [
        "Free 14-day trial",
        "Cancel at anytime",
        ["5 Locations", "+$39/locations"],
        "1,000 monthly email invitations",
        "300 SMS monthly invitations",
        ["5 users", "+$39/users"],
        "8 widget to display reviews, your rating, and review count",
      ],
      keyFeatures: [
        "All Local Starter Features PLUS",
        "Respond with AI ✨",
        "Video review request",
        "Reporting & Automation",
        "Automate Review Requests via BCC",
        "SEO Review Snippets",
        "Powered by URL",
        "Only Verified Reviews",
      ],
    },
    highlight: true,
  },
  {
    name: "National Expansion",
    description: "Tailored for Large Companies with Locations Across the Country",
    monthlyPrice: "179",
    yearlyPrice: "149",
    features: {
      usage: [
        "Free 14-day trial",
        "Cancel at anytime",
        ["10 Locations", "+$39/locations"],
        "5000 monthly email invitations",
        "2000 SMS monthly invitations",
        ["10 users", "+$39/users"],
        "Full widget library to display reviews, your rating and review count",
      ],
      keyFeatures: [
        "All Regional Growth features PLUS",
        "Enterprise customizations",
        "Custom CSS",
        "Create QR Code",
        "Advanced reporting & analytics",
        "Custom SMS Provider",
        "Custom email Provider",
        "Dedicated onboarding & customer success manager",
      ],
    },
    highlight: false,
    showFullLibrary: true,
  },
];

const comparisonData = {
  locations: {
    starter: "1 Location",
    business: "3 Locations",
    premium: "5 Locations"
  },
  reviewGeneration: {
    emailRequests: {
      starter: "250",
      business: "1,500\nShared between all locations",
      premium: "2,500\nShared between all locations"
    },
    smsRequests: {
      starter: "100",
      business: "1,500\nShared between all locations",
      premium: "2,500\nShared between all locations"
    }
  },
  requestMethods: ["Email Review Request", "SMS Review Request"],
  features: [
    "Email Review Request",
    "Customer CSV Import",
    "Reply to Reviews",
    "Send Bulk Review Requests",
    "Embed Reviews on Your Website"
  ]
};

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Free TRIAL for 14 days.{" "}
            <span className="text-blue-500">Powerful Upgrade Options.</span>
          </h1>
          
          <div className="mt-8 flex justify-center gap-4">
            <button 
              className={`rounded-full px-8 py-3 text-white transition ${
                !isYearly ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-400'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`rounded-full px-8 py-3 text-white transition ${
                isYearly ? 'bg-pink-500 hover:bg-pink-600' : 'bg-pink-400'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transform transition-all duration-300 hover:translate-y-[-4px] ${
                plan.highlight
                  ? "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white ring-blue-500 hover:shadow-xl hover:shadow-blue-200"
                  : "bg-white ring-gray-200 hover:shadow-xl hover:shadow-gray-200"
              } ring-1`}
            >
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-2 text-sm">{plan.description}</p>
              
              <div className="mt-8 flex items-baseline">
                <span className="text-5xl font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="ml-2 text-base opacity-80">
                  per month{isYearly ? " billed yearly" : ""}
                </span>
              </div>

              <button
                className={`mt-8 w-full rounded-lg py-3 px-4 text-center font-semibold ${
                  plan.highlight
                    ? "bg-white text-blue-500 hover:bg-gray-50"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                } transition`}
              >
                Start trial
              </button>

              <div className="mt-8">
                <h3 className="font-semibold">Usage</h3>
                <ul className="mt-4 space-y-3">
                  {plan.features.usage.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">
                        {Array.isArray(feature) ? (
                          <>
                            {feature[0]}
                            <PriceTag>{feature[1]}</PriceTag>
                          </>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold">Key Features</h3>
                <ul className="mt-4 space-y-3">
                  {plan.features.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Review Platforms</h3>
                {plan.showFullLibrary ? (
                  <p className="text-sm">Full library of 70+ integrations and review platforms</p>
                ) : (
                  <div className="flex flex-wrap gap-6">
                    {reviewPlatforms.map((platform) => (
                      <img
                        key={platform.name}
                        src={platform.icon}
                        alt={platform.name}
                        className={`h-8 w-8 ${!plan.highlight ? 'opacity-70' : ''}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg">
            Got custom needs for your Enterprise business?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
              Let's talk.
            </a>
          </p>
          <p className="mt-2 text-pink-500">Upgrade or downgrade anytime.</p>
        </div>

        <div className="mt-24">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-6 rounded-t-2xl text-white grid grid-cols-4 gap-4">
            <div></div>
            {["Starter", "Small Business", "Premium"].map((plan) => (
              <div key={plan} className="text-center">
                <h3 className="font-semibold text-lg">{plan}</h3>
                <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors">
                  Start free trial
                </button>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 p-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Locations</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-sm text-gray-600">Number Of Locations (Businesses)</div>
              {Object.values(comparisonData.locations).map((value, index) => (
                <div key={index} className="text-center">{value}</div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Review Generation</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-600">Number Of Monthly Review Requests</div>
                {Object.values(comparisonData.reviewGeneration.emailRequests).map((value, index) => (
                  <div key={index} className="text-center whitespace-pre-line">{value}</div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-600">Number Of Monthly SMS Requests</div>
                {Object.values(comparisonData.reviewGeneration.smsRequests).map((value, index) => (
                  <div key={index} className="text-center whitespace-pre-line">{value}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Request Method</h3>
            <div className="space-y-4">
              {comparisonData.requestMethods.map((method) => (
                <div key={method} className="grid grid-cols-4 gap-4">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    {method.includes("Email") ? <Mail className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                    {method}
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-b-2xl">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Features</h3>
            <div className="space-y-4">
              {comparisonData.features.map((feature) => (
                <div key={feature} className="grid grid-cols-4 gap-4">
                  <div className="text-sm text-gray-600">{feature}</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}