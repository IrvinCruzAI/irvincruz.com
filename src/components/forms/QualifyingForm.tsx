import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
}

export function QualifyingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<FormData>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FormData]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setFieldErrors({});

    // Validate all fields
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.role.trim()) errors.role = 'Role is required';
    if (!formData.challenge || formData.challenge === '') errors.challenge = 'Please select a challenge';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://hook.us2.make.com/e8wop1bgci021mvbb4spbjl2xvzn6qjo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          challenge: formData.challenge,
          source: 'AI Readiness Guide - Full Page',
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError('Something went wrong. Please try again or email irvin@futurecrafters.ai directly.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-teal-900/30 to-indigo-900/30 border-2 border-teal-500/50 rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
        >
          <CheckCircle className="text-white" size={40} />
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Thanks, {formData.name.split(' ')[0]}!
        </h3>

        <p className="text-teal-100 text-lg mb-6">
          I'll reach out within 24 hours with personalized insights for {formData.company} and a link to book your strategy call.
        </p>

        <p className="text-teal-200/70 text-sm">
          Check your inbox (and spam folder). Email from: <strong>irvin@futurecrafters.ai</strong>
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/90 via-slate-800/90 to-gray-900/90 backdrop-blur-sm border-2 border-teal-500/30 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Personalized Guidance?
        </h2>
        <p className="text-teal-100/90">
          Tell me about your situation and I'll reach out with specific next steps for your business
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-teal-100 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="John Smith"
          />
          {fieldErrors.name && (
            <p className="text-red-400 text-sm mt-1">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-teal-100 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="john@company.com"
          />
          {fieldErrors.email && (
            <p className="text-red-400 text-sm mt-1">{fieldErrors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-teal-100 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="Acme Corp"
          />
          {fieldErrors.company && (
            <p className="text-red-400 text-sm mt-1">{fieldErrors.company}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-teal-100 mb-2">
            Your Role *
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="CEO, CTO, Operations Director, etc."
          />
          {fieldErrors.role && (
            <p className="text-red-400 text-sm mt-1">{fieldErrors.role}</p>
          )}
        </div>

        {/* Challenge */}
        <div>
          <label htmlFor="challenge" className="block text-sm font-medium text-teal-100 mb-2">
            Biggest AI Challenge *
          </label>
          <select
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
          >
            <option value="" className="bg-gray-900">Select one...</option>
            <option value="dont-know-where-to-start" className="bg-gray-900">Don't know where to start</option>
            <option value="team-overwhelmed" className="bg-gray-900">Team is overwhelmed with manual work</option>
            <option value="tried-ai-failed" className="bg-gray-900">Tried AI tools but they didn't work</option>
            <option value="security-compliance" className="bg-gray-900">Security and compliance concerns</option>
            <option value="measuring-roi" className="bg-gray-900">Can't measure ROI on AI investments</option>
            <option value="governance-needed" className="bg-gray-900">Need governance framework</option>
            <option value="other" className="bg-gray-900">Something else</option>
          </select>
          {fieldErrors.challenge && (
            <p className="text-red-400 text-sm mt-1">{fieldErrors.challenge}</p>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white text-lg font-bold py-4 shadow-2xl hover:shadow-teal-500/25 border-0"
        >
          {isLoading ? 'Sending...' : 'Get Personalized Guidance'}
        </Button>

        <p className="text-teal-200/60 text-sm text-center">
          I'll email you within 24 hours with specific next steps + calendar link
        </p>
      </form>
    </div>
  );
}
