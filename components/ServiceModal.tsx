import React from "react";
import Link from "next/link";


interface Service {
  title: string;
  icon: string;
  description: string[]; // since you're mapping over description
  subscriptionStartingFrom?: string;
}

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="relative w-[90%] max-w-xl bg-white dark:bg-gray-900 rounded-xl p-6 shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 text-3xl font-bold hover:text-red-500 transition"
        >
          &times;
        </button>

        {/* Image */}
        <div className="w-full  h-20 flex items-center justify-center mb-4">
          <img
            src={service.icon}
            alt={service.title}
            className="max-h-full object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">
          {service.title}
        </h2>

        {/* Description List */}
        <ul className="text-gray-700 dark:text-gray-300 mb-4 list-none list-inside space-y-2 text-center">
          {service.description.map((point, index) => (
            <li className="text-align-center" key={index}>{point}</li>
          ))}
        </ul>

        {/* Pricing */}
        {service.subscriptionStartingFrom && (
          <p className="text-green-600 font-semibold mb-6 text-center">
            Subscription starting from {service.subscriptionStartingFrom}
          </p>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/meeting"
            className="inline-block py-3 px-6 text-white bg-black dark:bg-white dark:text-black rounded-lg font-semibold transition hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
