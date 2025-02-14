export const SystemRequirements = () => {
  return (
    <div className="bg-gradient-to-b from-[#42210B] to-black py-24">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">System Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Mobile Devices</h3>
            <ul className="list-disc list-inside text-white/70">
              <li>iOS xx.x or later</li>
              <li>Android x.x or later</li>
              <li>XGB RAM or more</li>
              <li>XXXMB free storage space</li>
            </ul>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Web App</h3>
            <ul className="list-disc list-inside text-white/70">
              <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
              <li>Stable internet connection</li>
              <li>JavaScript enabled</li>
              <li>Minimum screen resolution: aaaaXbbb</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

