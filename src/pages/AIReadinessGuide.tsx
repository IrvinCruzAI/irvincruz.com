import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

export function AIReadinessGuide() {
  const [checklist, setChecklist] = useState({
    repetitiveWork: false,
    bottlenecks: false,
    competitive: false,
    growth: false,
  });

  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const checkedCount = Object.values(checklist).filter(Boolean).length;

  const handleChecklistChange = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAnswerChange = (question: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  return (
    <>
      <Helmet>
        <title>AI Readiness Checklist + 5 Questions Guide | Irvin Cruz</title>
        <meta 
          name="description" 
          content="Figure out if AI makes sense for your business with this practical checklist and 5 essential questions. By Irvin Cruz, Certified Chief AI Officer." 
        />
        <meta name="keywords" content="AI readiness, AI checklist, AI implementation, AI consultant, service business AI, CAIO" />
        <meta property="og:title" content="AI Readiness Checklist + 5 Questions Guide" />
        <meta property="og:description" content="Figure out if AI makes sense for your business—and exactly where to start." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.irvincruz.com/ai-readiness-guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,179,166,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(67,56,202,0.15)_0%,transparent_50%)]" />
        </div>

        {/* Header */}
        <div className="relative z-10 border-b border-white/10 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <a 
              href="/" 
              className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              ← Back to IrvinCruz.com
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 sm:py-16">
          
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium mb-6">
              Free Guide
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-teal-100 to-indigo-200 bg-clip-text text-transparent">
                AI Readiness Checklist
              </span>
              <br />
              <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                + 5 Questions to Ask Before Investing in AI
              </span>
            </h1>
            
            <p className="text-xl text-teal-100/80 mb-4">
              A Practical Guide for Service-Based Businesses
            </p>
            
            <p className="text-white/60 text-sm">
              By <span className="text-white font-medium">Irvin Cruz</span>, Certified Chief AI Officer | FutureCrafters
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Everyone's talking about AI. Nobody's showing you what to do.
            </h2>
            
            <p className="text-teal-100/90 mb-4 leading-relaxed">
              Most service businesses know AI matters, but they're stuck:
            </p>
            
            <ul className="space-y-2 text-teal-100/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-teal-400 mt-1">•</span>
                <span>"I don't want to waste money on something that doesn't work"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400 mt-1">•</span>
                <span>"My team is drowning in repetitive work, but I don't know where to start"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400 mt-1">•</span>
                <span>"I need help figuring this out, not another think piece about AI"</span>
              </li>
            </ul>
            
            <p className="text-white font-medium">
              This guide helps you figure out if AI makes sense for your business—and exactly where to start if it does.
            </p>
          </div>

          {/* Checklist Section */}
          <div className="bg-gradient-to-br from-teal-900/20 to-indigo-900/20 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Your AI Readiness Checklist
            </h2>
            
            <p className="text-teal-100/90 mb-8">
              Check the boxes that apply to your business:
            </p>

            {/* Checklist items */}
            <div className="space-y-6">
              {/* Item 1 */}
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checklist.repetitiveWork}
                  onChange={() => handleChecklistChange('repetitiveWork')}
                  className="mt-1 w-6 h-6 rounded border-2 border-teal-500/50 bg-white/10 checked:bg-teal-500 checked:border-teal-500 cursor-pointer transition-all"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-300 transition-colors">
                    REPETITIVE WORK OVERWHELM
                  </h3>
                  <p className="text-teal-100/80 text-sm mb-2">
                    Your team spends hours each week on tasks like:
                  </p>
                  <ul className="text-teal-100/70 text-sm space-y-1 ml-4">
                    <li>• Data entry or copy-pasting between systems</li>
                    <li>• Writing similar emails/documents over and over</li>
                    <li>• Manual follow-ups and reminders</li>
                    <li>• Document processing or summarization</li>
                    <li>• Scheduling and calendar management</li>
                  </ul>
                </div>
              </label>

              {/* Item 2 */}
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checklist.bottlenecks}
                  onChange={() => handleChecklistChange('bottlenecks')}
                  className="mt-1 w-6 h-6 rounded border-2 border-teal-500/50 bg-white/10 checked:bg-teal-500 checked:border-teal-500 cursor-pointer transition-all"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-300 transition-colors">
                    OPERATIONAL BOTTLENECKS
                  </h3>
                  <p className="text-teal-100/80 text-sm mb-2">
                    You're losing time or money because:
                  </p>
                  <ul className="text-teal-100/70 text-sm space-y-1 ml-4">
                    <li>• Client requests sit unanswered for hours/days</li>
                    <li>• Projects get delayed waiting for administrative tasks</li>
                    <li>• Your team can't scale without hiring more people</li>
                    <li>• You personally work 60+ hours/week just to keep up</li>
                  </ul>
                </div>
              </label>

              {/* Item 3 */}
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checklist.competitive}
                  onChange={() => handleChecklistChange('competitive')}
                  className="mt-1 w-6 h-6 rounded border-2 border-teal-500/50 bg-white/10 checked:bg-teal-500 checked:border-teal-500 cursor-pointer transition-all"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-300 transition-colors">
                    COMPETITIVE PRESSURE
                  </h3>
                  <p className="text-teal-100/80 text-sm mb-2">
                    You're worried about falling behind because:
                  </p>
                  <ul className="text-teal-100/70 text-sm space-y-1 ml-4">
                    <li>• Competitors seem more responsive or efficient</li>
                    <li>• Clients expect instant responses you can't provide</li>
                    <li>• You're losing deals to companies with better systems</li>
                    <li>• Your tools feel outdated compared to what's possible</li>
                  </ul>
                </div>
              </label>

              {/* Item 4 */}
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checklist.growth}
                  onChange={() => handleChecklistChange('growth')}
                  className="mt-1 w-6 h-6 rounded border-2 border-teal-500/50 bg-white/10 checked:bg-teal-500 checked:border-teal-500 cursor-pointer transition-all"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-300 transition-colors">
                    GROWTH CEILING
                  </h3>
                  <p className="text-teal-100/80 text-sm mb-2">
                    You want to grow but feel stuck:
                  </p>
                  <ul className="text-teal-100/70 text-sm space-y-1 ml-4">
                    <li>• Revenue is flat despite demand</li>
                    <li>• Hiring more people doesn't solve the problem</li>
                    <li>• Your margins are shrinking</li>
                    <li>• You're drowning in tools that don't talk to each other</li>
                  </ul>
                </div>
              </label>
            </div>

            {/* Checklist result */}
            <div className="mt-8 p-6 bg-white/5 border border-white/20 rounded-xl">
              <p className="text-white font-medium mb-2">
                You checked {checkedCount} out of 4 boxes
              </p>
              
              {checkedCount >= 2 ? (
                <p className="text-teal-300">
                  ✅ AI can probably help. The 5 questions below will help you figure out where.
                </p>
              ) : (
                <p className="text-yellow-300">
                  ⚠️ You might not need AI yet—and that's okay. Focus on the fundamentals first.
                </p>
              )}
            </div>
          </div>

          {/* 5 Questions Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                5 Questions to Ask Before Investing in AI
              </h2>
              <p className="text-teal-100/80">
                Take a few minutes to think through these—your answers will guide your next steps
              </p>
            </div>

            <div className="space-y-8">
              {/* Question 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">
                      What process is costing us the most time?
                    </h3>
                    <textarea
                      value={answers.q1}
                      onChange={(e) => handleAnswerChange('q1', e.target.value)}
                      placeholder="Write your answer here..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-teal-200/50 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all min-h-[100px] resize-none"
                    />
                    <div className="mt-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
                      <p className="text-sm text-teal-100/90 font-medium mb-2">
                        Why this matters:
                      </p>
                      <p className="text-sm text-teal-100/70">
                        AI works best on high-volume, repetitive tasks. If you can't identify a clear bottleneck, you're not ready to implement AI—you need to map your processes first.
                      </p>
                      <p className="text-xs text-teal-200/60 mt-2">
                        Examples: Client intake, proposal generation, email follow-ups, document review, scheduling, data entry
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Is this a workflow problem or a people problem?
                    </h3>
                    <textarea
                      value={answers.q2}
                      onChange={(e) => handleAnswerChange('q2', e.target.value)}
                      placeholder="Write your answer here..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-teal-200/50 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all min-h-[100px] resize-none"
                    />
                    <div className="mt-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
                      <p className="text-sm text-teal-100/90 font-medium mb-2">
                        Why this matters:
                      </p>
                      <p className="text-sm text-teal-100/70">
                        AI can't fix broken processes or unmotivated teams. If your problem is "people don't follow our process," fix that first. AI amplifies what you already do—good or bad.
                      </p>
                      <p className="text-xs text-red-300/80 mt-2">
                        ⚠️ Red flag: If you don't have a documented process, AI won't help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">
                      What happens if we do nothing for 6 months?
                    </h3>
                    <textarea
                      value={answers.q3}
                      onChange={(e) => handleAnswerChange('q3', e.target.value)}
                      placeholder="Write your answer here..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-teal-200/50 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all min-h-[100px] resize-none"
                    />
                    <div className="mt-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
                      <p className="text-sm text-teal-100/90 font-medium mb-2">
                        Why this matters:
                      </p>
                      <p className="text-sm text-teal-100/70">
                        This reveals the true cost of inaction. If the answer is "nothing changes," AI isn't urgent. If the answer is "we lose clients, staff quits, or competitors pull ahead," you have real urgency.
                      </p>
                      <p className="text-xs text-teal-200/60 mt-2">
                        Real urgency drives real change. Without it, AI projects stall.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Do we have data/documentation for this process?
                    </h3>
                    <textarea
                      value={answers.q4}
                      onChange={(e) => handleAnswerChange('q4', e.target.value)}
                      placeholder="Write your answer here..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-teal-200/50 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all min-h-[100px] resize-none"
                    />
                    <div className="mt-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
                      <p className="text-sm text-teal-100/90 font-medium mb-2">
                        Why this matters:
                      </p>
                      <p className="text-sm text-teal-100/70">
                        AI needs data to learn patterns. If your process exists only in people's heads, you'll need to document it before automating it. This isn't a dealbreaker—but it adds time.
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-green-300">
                          ✅ Good sign: You have templates, SOPs, or examples
                        </p>
                        <p className="text-xs text-red-300">
                          ⚠️ Warning: "It depends who's doing it" or "we just know how"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Who will own this system once it's built?
                    </h3>
                    <textarea
                      value={answers.q5}
                      onChange={(e) => handleAnswerChange('q5', e.target.value)}
                      placeholder="Write your answer here..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-teal-200/50 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all min-h-[100px] resize-none"
                    />
                    <div className="mt-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
                      <p className="text-sm text-teal-100/90 font-medium mb-2">
                        Why this matters:
                      </p>
                      <p className="text-sm text-teal-100/70">
                        AI systems need maintenance, updates, and governance. If no one owns it, it becomes "shelfware"—built but unused. Before you invest, assign ownership.
                      </p>
                      <p className="text-xs text-red-300/80 mt-2">
                        ⚠️ Red flag: "We'll figure that out later" = project will fail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 border-2 border-teal-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                What to Do Next
              </h2>

              <div className="space-y-6">
                {/* Clear answers */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        IF YOUR ANSWERS ARE CLEAR:
                      </h3>
                      <p className="text-teal-100/90 mb-4">
                        You're ready to talk strategy. Book a 15-minute call and we'll map your next steps—no pitch, just clarity.
                      </p>
                      <a
                        href="https://calendar.app.google/kFFkYN9toPCywy2H8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-bold rounded-lg shadow-lg hover:shadow-teal-500/25 transition-all"
                      >
                        <Calendar className="w-5 h-5" />
                        Book Your 15-Minute Call
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Unclear answers */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-2xl">
                      ⚠️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        IF YOUR ANSWERS ARE UNCLEAR:
                      </h3>
                      <p className="text-teal-100/90">
                        You need to map your processes first. AI won't solve chaos—it will amplify it. Start by documenting your top 3 bottlenecks, then revisit this guide.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overwhelmed */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-2xl">
                      💬
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        IF YOU'RE STILL OVERWHELMED:
                      </h3>
                      <p className="text-teal-100/90 mb-4">
                        That's normal. Email me at <a href="mailto:irvincruz.work@gmail.com" className="text-teal-300 hover:text-teal-200 underline">irvincruz.work@gmail.com</a>, tell me your biggest frustration, and I'll point you in the right direction. No pitch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              About the Author
            </h2>
            
            <p className="text-teal-100/90 mb-4">
              <strong className="text-white">Irvin Cruz</strong> is a Certified Chief AI Officer helping service businesses figure out AI and actually implement it.
            </p>
            
            <div className="mb-6">
              <p className="text-white font-medium mb-2">Proof:</p>
              <ul className="space-y-2 text-teal-100/80">
                <li>• $2.1M revenue influenced at Michaelis Events</li>
                <li>• 8x digital sales growth at Disney</li>
                <li>• 40% less manual work at FutureCrafters</li>
                <li>• 6 production AI systems built</li>
              </ul>
            </div>
            
            <p className="text-teal-100/90 italic">
              Not theory. Real systems. Real results.
            </p>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <a 
                href="/"
                className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-medium transition-colors"
              >
                Learn more at IrvinCruz.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 border-2 border-teal-500/30 rounded-2xl">
              <p className="text-teal-100/90 mb-6">
                Ready to talk through your answers?
              </p>
              <a
                href="https://calendar.app.google/kFFkYN9toPCywy2H8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white text-lg font-bold rounded-lg shadow-2xl hover:shadow-teal-500/25 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Book Your Free 15-Minute Strategy Call
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-teal-200/60 text-sm mt-4">
                No pitch. Just clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-white/10 bg-gray-900/50 backdrop-blur-sm mt-16">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center">
            <p className="text-white/60 text-sm">
              © 2026 Irvin Cruz | FutureCrafters | <a href="/" className="text-teal-300 hover:text-teal-200">IrvinCruz.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
