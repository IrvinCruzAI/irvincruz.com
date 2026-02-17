import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, CheckCircle, Sparkles, Users, TrendingUp, X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface LeadMagnetProps {
  leadMagnet: {
    title: string;
    description: string;
    cta: string;
    type: 'newsletter' | 'checklist' | 'call';
  };
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
}

export function LeadMagnet({ leadMagnet, isOpen, onClose }: LeadMagnetProps) {
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
    // Clear field error when user starts typing
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
      // Send to Make.com webhook
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
          source: 'AI Readiness Guide',
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      setSubmitted(true);
      // Auto-close after 6 seconds
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', role: '', challenge: '' });
      }, 6000);
    } catch (err) {
      setError('Something went wrong. Please try again or email irvin@futurecrafters.ai directly.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative overflow-hidden">
        {!submitted ? (
          <>
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,47,138,0.2)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,179,166,0.2)_0%,transparent_50%)]" />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, -3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-4 right-8 w-16 h-16 bg-gradient-to-r from-teal-400/30 to-indigo-400/30 rounded-full blur-2xl"
            />

            <div className="relative z-10 text-center p-6 max-w-2xl mx-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200 z-20 backdrop-blur-sm"
              >
                <X size={18} />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="relative w-12 h-12 mx-auto mb-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-xl blur-lg opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-r from-teal-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <Download className="text-white" size={16} />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-bold mb-2"
              >
                <span className="bg-gradient-to-r from-white via-teal-100 to-indigo-200 bg-clip-text text-transparent">
                  Get Your AI Readiness Guide
                </span>
              </motion.h3>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-teal-100 mb-6 leading-relaxed text-sm"
              >
                Plus, get a personalized strategy session to discuss your specific AI challenges
              </motion.p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-teal-100 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="John Smith"
                  />
                  {fieldErrors.name && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-teal-100 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="john@company.com"
                  />
                  {fieldErrors.email && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-teal-100 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Acme Corp"
                  />
                  {fieldErrors.company && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.company}</p>
                  )}
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-teal-100 mb-1">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="CEO, CTO, Operations Director, etc."
                  />
                  {fieldErrors.role && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.role}</p>
                  )}
                </div>

                {/* Challenge */}
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-teal-100 mb-1">
                    Biggest AI Challenge *
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm"
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
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.challenge}</p>
                  )}
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold shadow-2xl hover:shadow-teal-500/25 border-0"
                >
                  {isLoading ? 'Sending...' : 'Get Guide + Book Strategy Call'}
                </Button>
              </form>

              <p className="text-teal-200/60 text-xs mt-4">
                We'll send you the guide and a link to book a free 15-min strategy session
              </p>
            </div>
          </>
        ) : (
          // Success state
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 text-center p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <CheckCircle className="text-white" size={32} />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-3"
              >
                <span className="bg-gradient-to-r from-white via-teal-100 to-indigo-200 bg-clip-text text-transparent">
                  Check Your Inbox!
                </span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-teal-100 leading-relaxed mb-4"
              >
                We've sent you the AI Readiness Guide and a link to book your strategy session.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-teal-200/70 text-sm"
              >
                Don't see it? Check your spam folder or email{' '}
                <a href="mailto:irvin@futurecrafters.ai" className="text-teal-400 hover:text-teal-300 underline">
                  irvin@futurecrafters.ai
                </a>
              </motion.p>
            </div>
          </motion.div>
        )}
      </div>
    </Modal>
  );
}
