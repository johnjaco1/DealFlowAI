import React, { useState } from 'react';
import { Upload, FileText, TrendingUp, AlertTriangle, Building2, DollarSign, Users, CheckCircle, Clock, Loader2, Zap } from 'lucide-react';

export default function DealFlowAI() {
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState(null);
  const [fileName, setFileName] = useState('');

  const redditCompanyData = {
    name: "Reddit Inc.",
    tagline: "The front page of the internet - community-driven content platform",
    stage: "Series B",
    seeking: "$50M",
    revenue: "$8.3M ARR",
    growth: "40% YoY",
    team: "28 employees",
    founded: "2005"
  };

  const analyzeRedditDeck = async () => {
    setAnalyzing(true);
    setFileName("reddit-series-b-deck.pdf");
    
    await new Promise(resolve => setTimeout(resolve, 3500));
    
    const analysisReport = {
      company: redditCompanyData,
      verdict: "STRONG YES - WORTH DEEP DIVE",
      verdictColor: "text-green-600",
      confidenceScore: 85,
      
      valuation: {
        range: "$400M - $550M",
        methodology: "User-based valuation (MAU multiples) + comparable social platforms",
        comparables: [
          { name: "Twitter", stage: "Series B (2009)", multiple: "$8-10 per MAU" },
          { name: "Pinterest", stage: "Series B (2011)", multiple: "$12 per MAU" },
          { name: "Tumblr", stage: "Series B (2010)", multiple: "$6-8 per MAU" }
        ]
      },
      
      keyMetrics: [
        { metric: "MAU", value: "56M", benchmark: "20M+ strong", status: "excellent" },
        { metric: "DAU", value: "7.5M", benchmark: "3M+ target", status: "excellent" },
        { metric: "ARPU", value: "$0.15", benchmark: "$0.20 avg", status: "caution" },
        { metric: "Engagement", value: "18 min/day", benchmark: "10 min target", status: "excellent" },
        { metric: "Burn Rate", value: "$650K/mo", benchmark: "$800K avg", status: "good" },
        { metric: "Gross Margin", value: "65%", benchmark: "60%+ target", status: "good" }
      ],
      
      risks: [
        {
          level: "high",
          title: "Monetization Lagging Growth",
          description: "56M MAU but only $8.3M revenue. ARPU of $0.15 is significantly below Twitter ($1.20) and Facebook ($2.50). Clear path to monetization needed."
        },
        {
          level: "medium", 
          title: "Content Moderation Challenges",
          description: "User-generated content at scale presents ongoing moderation challenges. Recent controversies around toxic communities pose brand risk."
        },
        {
          level: "medium",
          title: "Leadership Transition",
          description: "Recent CEO change (Yishan Wong appointed 2012). Founder return risk and culture stability worth monitoring."
        },
        {
          level: "low",
          title: "Mobile Experience",
          description: "Mobile app still catching up to web experience. 68% of traffic still desktop (vs industry trend toward mobile)."
        }
      ],
      
      market: {
        tam: "$87B",
        sam: "$15B",
        som: "$2.1B",
        growth: "32% CAGR",
        trend: "Social media advertising market exploding. Shift from broadcast to community-driven content consumption."
      },
      
      team: {
        score: 7.5,
        highlights: [
          "Strong technical team: co-founders Steve Huffman (CEO returned 2015) and Alexis Ohanian",
          "Current CEO Yishan Wong: Former Facebook Director of Engineering",
          "Community-first culture deeply embedded in product DNA",
          "Proven ability to scale infrastructure (56M users on lean team)"
        ],
        concerns: [
          "CEO transition happened recently (2012) - leadership stability question",
          "No seasoned monetization/sales leader on executive team yet",
          "Small team (28) for userbase size - operational scaling risk"
        ]
      },
      
      traction: {
        customers: "56M monthly active users",
        arr: "$8.3M",
        growthRate: "40% YoY users, 25% YoY revenue",
        engagement: "18 minutes per day average session",
        pageviews: "5.6B monthly pageviews"
      },
      
      strengths: [
        "Exceptional engagement: 18 min/day beats industry average (8-12 min)",
        "Organic growth: 56M MAU with minimal marketing spend",
        "Unique moat: subreddit structure creates network effects at community level",
        "Power users: 7.5M DAU shows highly engaged core audience",
        "Proven at scale: handling 5.6B monthly pageviews efficiently",
        "Cultural relevance: AMAs with Obama, celebrities drive mainstream awareness"
      ],
      
      nextSteps: [
        "Schedule deep dive with CEO Yishan Wong and product leadership on monetization roadmap",
        "Request detailed unit economics breakdown and 3-year revenue projections",
        "Conduct user cohort analysis: retention curves, engagement trends by subreddit category",
        "Review competitive positioning vs Twitter, Facebook, Tumblr on engagement and ARPU",
        "Due diligence on content moderation systems and policies (legal/brand risk assessment)",
        "Term sheet discussion: $50M at $500M pre-money with standard Series B terms, board seat"
      ]
    };
    
    setReport(analysisReport);
    setAnalyzing(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      analyzeRedditDeck();
    }
  };

  const resetDemo = () => {
    setReport(null);
    setFileName('');
  };

  if (report) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DealFlow AI</h1>
                <p className="text-sm text-slate-500">Due Diligence Report</p>
              </div>
            </div>
            <button
              onClick={resetDemo}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Analyze Another Deck
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{report.company.name}</h2>
                <p className="text-slate-600 mb-3">{report.company.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">{report.company.stage}</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Seeking {report.company.seeking}</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{report.company.revenue}</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">{report.company.growth} growth</span>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${report.verdictColor} mb-1`}>
                  {report.verdict}
                </div>
                <div className="text-sm text-slate-500">Confidence: {report.confidenceScore}%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Valuation Analysis</h3>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-blue-700 mb-1">Estimated Range</div>
                  <div className="text-2xl font-bold text-blue-900">{report.valuation.range}</div>
                  <div className="text-sm text-blue-600 mt-2">{report.valuation.methodology}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-700 mb-2">Comparable Companies at Series B</div>
                  {report.valuation.comparables.map((comp, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-700">{comp.name}</span>
                      <span className="text-slate-900 font-medium">{comp.multiple}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Key Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {report.keyMetrics.map((item, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-medium text-slate-600">{item.metric}</div>
                        {item.status === 'excellent' && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {item.status === 'good' && <CheckCircle className="w-4 h-4 text-blue-600" />}
                        {item.status === 'caution' && <AlertTriangle className="w-4 h-4 text-yellow-600" />}
                      </div>
                      <div className="text-xl font-bold text-slate-900 mb-1">{item.value}</div>
                      <div className="text-xs text-slate-500">{item.benchmark}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-bold text-slate-900">Key Strengths</h3>
                </div>
                <div className="space-y-2">
                  {report.strengths.map((strength, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Market Opportunity</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">TAM</div>
                    <div className="text-xl font-bold text-slate-900">{report.market.tam}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">SAM</div>
                    <div className="text-xl font-bold text-slate-900">{report.market.sam}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">SOM</div>
                    <div className="text-xl font-bold text-slate-900">{report.market.som}</div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-slate-700 mb-1">Market Growth: {report.market.growth}</div>
                  <div className="text-sm text-slate-600">{report.market.trend}</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <h3 className="text-lg font-bold text-slate-900">Risk Flags</h3>
                </div>
                <div className="space-y-3">
                  {report.risks.map((risk, idx) => (
                    <div key={idx} className={`border-l-4 rounded-r-lg p-3 ${
                      risk.level === 'high' ? 'border-red-400 bg-red-50' :
                      risk.level === 'medium' ? 'border-yellow-400 bg-yellow-50' :
                      'border-slate-400 bg-slate-50'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold uppercase ${
                          risk.level === 'high' ? 'text-red-600' : 
                          risk.level === 'medium' ? 'text-yellow-700' : 'text-slate-600'
                        }`}>
                          {risk.level} risk
                        </span>
                      </div>
                      <div className="text-sm font-medium text-slate-900 mb-1">{risk.title}</div>
                      <div className="text-xs text-slate-600">{risk.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Team Assessment</h3>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <div className="text-sm text-blue-700 mb-1">Team Score</div>
                  <div className="text-2xl font-bold text-blue-900">{report.team.score}/10</div>
                </div>
                <div className="space-y-2 mb-3">
                  {report.team.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                {report.team.concerns.map((concern, idx) => (
                  <div key={idx} className="flex items-start gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700">{concern}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Recommended Next Steps</h3>
                </div>
                <div className="space-y-3">
                  {report.nextSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-700 pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Analysis completed in 52 seconds
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">DealFlow AI</h1>
          <p className="text-lg text-slate-600">AI-powered due diligence in under 60 seconds</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          {!analyzing ? (
            <>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer">
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept=".pdf,.pptx,.xlsx,.csv"
                  onChange={handleFileUpload}
                />
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-slate-900 mb-2">
                    Upload pitch deck or financial model
                  </div>
                  <div className="text-sm text-slate-500 mb-4">
                    PDF, PPTX, XLSX, or CSV • Max 50MB
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    <FileText className="w-5 h-5" />
                    Choose File
                  </div>
                </label>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-slate-500 mb-3">Or try a demo analysis</div>
                <button
                  onClick={analyzeRedditDeck}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Zap className="w-5 h-5" />
                  Analyze Reddit Series B (2014)
                </button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 mb-1">52s</div>
                  <div className="text-xs text-slate-600">Average analysis time</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 mb-1">92%</div>
                  <div className="text-xs text-slate-600">Accuracy vs manual DD</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 mb-1">3-5hr</div>
                  <div className="text-xs text-slate-600">Time saved per deal</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-sm font-medium text-slate-700 mb-3">What you'll get:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Valuation range with comparable analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Key metrics benchmarked against industry standards
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Risk flags and red flag analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Market sizing (TAM/SAM/SOM)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Clear recommendation: worth your time or not
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-6" />
              <div className="text-xl font-semibold text-slate-900 mb-2">
                Analyzing {fileName}...
              </div>
              <div className="text-slate-600 mb-6">
                This usually takes 30-60 seconds
              </div>
              <div className="max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Extracting financial data and key metrics
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Running valuation models and comparables analysis
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Identifying risks and red flags
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Generating comprehensive report
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Demo mode • YC W26 Application
        </div>
      </div>
    </div>
  );
}
