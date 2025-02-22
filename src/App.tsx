import React, { useState } from 'react';
import { FileText, BarChart2, Zap, Upload, CheckCircle } from 'lucide-react';

type Tab = 'summary' | 'analyzer' | 'optimizer';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('summary');
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_logo.svg" 
                alt="Indeed Logo" 
                className="h-8"
              />
              <span className="ml-2 text-xl font-bold text-[#2164f3]">JobAssist</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'summary'
                ? 'bg-[#2164f3] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-5 w-5 mr-2" />
            Job Summary
          </button>
          <button
            onClick={() => setActiveTab('analyzer')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'analyzer'
                ? 'bg-[#2164f3] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BarChart2 className="h-5 w-5 mr-2" />
            Resume Analyzer
          </button>
          <button
            onClick={() => setActiveTab('optimizer')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'optimizer'
                ? 'bg-[#2164f3] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Zap className="h-5 w-5 mr-2" />
            Resume Optimizer
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'summary' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Job Description Analysis</h2>
              <div className="space-y-4">
                <textarea
                  placeholder="Paste the job description here..."
                  className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2164f3] focus:border-transparent"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <button className="bg-[#2164f3] text-white px-6 py-2 rounded-lg hover:bg-[#1b51cc] transition-colors">
                  Analyze Description
                </button>
                {jobDescription && (
                  <div className="mt-6 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Key Requirements</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>5+ years of software development experience</li>
                        <li>Proficiency in React and TypeScript</li>
                        <li>Experience with cloud platforms (AWS/Azure)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Important Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'AWS', 'CI/CD', 'Agile'].map((keyword) => (
                          <span
                            key={keyword}
                            className="bg-blue-100 text-[#2164f3] px-3 py-1 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'analyzer' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Resume Analysis</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <Upload className="h-12 w-12 mx-auto text-gray-400" />
                  <div>
                    <label className="bg-[#2164f3] text-white px-6 py-2 rounded-lg hover:bg-[#1b51cc] transition-colors cursor-pointer">
                      Upload Resume
                      <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                  <p className="text-gray-500">Upload your resume (PDF, DOC, or DOCX)</p>
                </div>
              </div>
              {file && (
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-700">Resume uploaded: {file.name}</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Match Score</h3>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#2164f3] bg-blue-200">
                            85% Match
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{ width: "85%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2164f3]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'optimizer' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Resume Optimization</h2>
              {file ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Optimization Suggestions</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-800">Skills Section</h4>
                        <p className="text-yellow-700 mt-1">
                          Add more emphasis on cloud technologies and DevOps experience
                        </p>
                      </div>
                      <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800">Experience Section</h4>
                        <p className="text-green-700 mt-1">
                          Good use of action verbs and quantifiable achievements
                        </p>
                      </div>
                      <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800">Missing Keywords</h4>
                        <p className="text-red-700 mt-1">
                          Consider adding: Agile methodology, CI/CD, Docker
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#2164f3] text-white px-6 py-2 rounded-lg hover:bg-[#1b51cc] transition-colors">
                    Generate Optimized Resume
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  Please upload your resume in the Resume Analyzer tab first
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;