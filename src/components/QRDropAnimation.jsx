import React, { useState, useEffect } from 'react';

const QRDropAnimation = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: Copying, 2: Processing, 3: Generated

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(0);

      // ২ সেকেন্ড পর কপি হবে
      setTimeout(() => {
        setStep(1); // Copying / Copied!
      }, 2000);

      // ২.৮ সেকেন্ড পর প্রোসেসিং দেখাবে
      setTimeout(() => {
        setStep(2); // Processing grid
      }, 2800);

      // ৩.৫ সেকেন্ড পর ফাইনাল কিউআর কোড পপ-আপ করবে
      setTimeout(() => {
        setStep(3); // Final QR Code
      }, 3500);

    }, 7500); // টোটাল লুপ টাইম ৭.৫ সেকেন্ড

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 font-sans text-left transition-all duration-300 my-4">
      
      {/* GNOME Window Title Bar */}
      <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700/70">
        <div className="flex space-x-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-sm"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-sm"></div>
        </div>
        <div className="text-sm font-semibold tracking-wider text-slate-300">QR Drop — Live Demo Window</div>
        <div className="w-12"></div> {/* Spacer */}
      </div>

      {/* Main Container Layer */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950 min-h-[340px] items-stretch">
        
        {/* Left Side (Grid 5): System Clipboard Panel */}
        <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-xl border border-slate-800 flex flex-col justify-between shadow-inner relative overflow-hidden">
          <div>
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span>📋</span> System Clipboard Input
            </h4>
            <div className="relative mt-2">
              <input 
                type="text" 
                readOnly
                value="https://github.com/shuv-on/qr-drop"
                className={`w-full font-mono text-sm bg-slate-950 text-slate-300 border px-4 py-3 rounded-lg transition-all duration-300 outline-none ${
                  step >= 1 ? 'border-indigo-500/50 ring-1 ring-indigo-500/30 text-indigo-200' : 'border-slate-800'
                }`}
              />
              {step === 0 && (
                <span className="absolute right-3 top-3.5 text-xs text-slate-500 animate-pulse">Selecting...</span>
              )}
            </div>
            
            <div className="mt-4 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              <span className="text-xs font-medium text-slate-400">
                {step === 0 ? 'Status: Listening to events' : step === 1 ? 'Status: Text Copied!' : 'Status: Syncing local stack'}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button 
              className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border shadow-lg ${
                step >= 1 
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-emerald-950/40 scale-[1.02]' 
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              {step >= 1 ? (
                <>✨ Copied to Clipboard! (Ctrl + C)</>
              ) : (
                <>📄 Triggering Copy Active...</>
              )}
            </button>
          </div>

          {/* Mouse Cursor Animation Effect */}
          {step === 0 && (
            <div className="absolute bottom-4 right-8 text-2xl animate-bounce pointer-events-none opacity-80">
              🖱️
            </div>
          )}
        </div>

        {/* Right Side (Grid 7): Instant QR Generator Flow Canvas */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 flex flex-col justify-between items-center relative min-h-[240px]">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest w-full text-center mb-2">
            Instant QR Code Generation
          </h4>

          <div className="flex-grow flex items-center justify-center w-full my-4">
            {step === 0 ? (
              /* Waiting State */
              <div className="text-center text-slate-500 animate-fade-in">
                <p className="text-sm italic font-medium">Waiting for clipboard content...</p>
                <p className="text-[11px] text-slate-600 mt-1">Runs entirely offline on your GNOME desktop</p>
              </div>
            ) : step === 1 || step === 2 ? (
              /* Processing Grid Matrix Animation */
              <div className="flex flex-col items-center gap-3 animate-pulse">
                <div className="w-28 h-28 border border-slate-700 bg-slate-950/80 rounded-xl p-4 flex flex-col justify-between items-center shadow-inner">
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin mt-2"></div>
                  <span className="bg-indigo-950 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-800/40 uppercase tracking-wider animate-pulse">
                    Processing
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Hashing payload locally...</span>
              </div>
            ) : (
              /* Final State: Real-Looking Matrix Custom QR Code */
              <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 transform scale-110 transition-all duration-500 animate-fade-in-up">
                
                {/* Visual Representation of Full QR Node */}
                <div className="w-32 h-32 bg-slate-900 p-2 rounded-xl flex flex-wrap justify-between content-between relative shadow-md">
                  
                  {/* Position Finder Block 1 */}
                  <div className="w-10 h-10 border-[6px] border-white bg-slate-900 m-0.5 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white"></div>
                  </div>
                  {/* Position Finder Block 2 */}
                  <div className="w-10 h-10 border-[6px] border-white bg-slate-900 m-0.5 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white"></div>
                  </div>
                  {/* Position Finder Block 3 */}
                  <div className="w-10 h-10 border-[6px] border-white bg-slate-900 m-0.5 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white"></div>
                  </div>

                  {/* Matrix Simulation Grid Dots */}
                  <div className="w-10 h-10 flex flex-wrap p-1 gap-1 content-center justify-center items-center">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </div>

                  {/* Center UI Overlay Tag */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-emerald-500 text-[9px] text-white font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-lg border border-white/20">
                      Offline
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-slate-700 mt-3 flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
                  <span>🔒</span> Local Secure Sync
                </div>
              </div>
            )}
          </div>

          {/* Footer Feature Badges */}
          <div className="w-full flex justify-center gap-6 border-t border-slate-800/60 pt-3 text-slate-500 text-xs">
            <span className="flex items-center gap-1">🛡️ No Internet Required</span>
            <span className="flex items-center gap-1">⚡ Instant 0.1s Gen</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QRDropAnimation;