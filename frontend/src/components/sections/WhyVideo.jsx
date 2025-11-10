import React, { useEffect, useRef, useState } from 'react';

const ProgressRing = ({ percentage, size = 180 }) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const radius = (size - 20) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background Ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#25282C"
        strokeWidth="20"
        fill="none"
      />
      {/* Progress Ring */}
      <circle
        ref={circleRef}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#F4CA45"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
      />
      {/* Center Text */}
      <text
        x="50%"
        y="50%"
        className="text-5xl font-bold fill-white font-poppins"
        dominantBaseline="middle"
        textAnchor="middle"
        transform={`rotate(90 ${size / 2} ${size / 2})`}
      >
        {percentage}%
      </text>
    </svg>
  );
};

const WhyVideo = () => {
  const stats = [
    {
      percentage: 82,
      title: 'Video-Konsum',
      description: '82% der Social-Media-Nutzer konsumieren regelmäßig Video-Content auf ihren bevorzugten Plattformen'
    },
    {
      percentage: 67,
      title: 'Mehr Sichtbarkeit',
      description: 'Reels erzielen bis zu 3-mal höhere Reichweite verglichen mit statischen Posts'
    },
    {
      percentage: 100,
      title: 'Algorithmus-Boost',
      description: 'Instagram und TikTok pushen Video-Content aktiv und bevorzugen ihn im Feed'
    }
  ];

  return (
    <section
      id="why-video"
      data-testid="why-video-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl text-center mb-8 font-poppins"
          data-testid="why-video-headline"
        >
          Warum Video-Content unverzichtbar ist
        </h2>

        {/* Description */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-20"
          data-testid="why-video-description"
        >
          Die Zahlen sprechen eine klare Sprache: Video ist das dominierende Content-Format in Social Media. Plattformen wie Instagram und TikTok haben ihre Algorithmen gezielt auf Video-Content ausgerichtet. Wer heute erfolgreich sein will, muss dort präsent sein - mit professionellem, regelmäßigem Video-Material.
        </p>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20" data-testid="statistics-cards">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#3A3F47] p-8 lg:p-12 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow"
              data-testid={`stat-card-${index}`}
            >
              {/* Progress Ring */}
              <div className="flex justify-center mb-8">
                <ProgressRing percentage={stat.percentage} />
              </div>

              {/* Title */}
              <h3 className="text-[#FFFFFF] font-semibold text-xl lg:text-2xl mb-4 font-poppins">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-[#B8BCC4] text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Story Box */}
        <div
          className="bg-[#3A3F47] p-8 lg:p-12 rounded-2xl border-l-6 border-[#F4CA45] max-w-5xl mx-auto"
          data-testid="success-story"
        >
          <h3 className="text-[#F4CA45] font-semibold text-xl lg:text-2xl mb-6 font-poppins">
            Erfolg aus der Praxis
          </h3>
          <p className="text-[#FFFFFF] text-base lg:text-lg leading-relaxed">
            Unser Pilot-Projekt mit einem EDEKA-Supermarkt zeigt beeindruckende Ergebnisse: <span className="font-semibold">deutlich höheres Engagement</span>, <span className="font-semibold">gesteigerte Reichweite</span> und durchweg <span className="font-semibold">positive Kundenreaktionen</span>. Die wöchentlichen Reels wurden schnell zum Publikumsliebling und generierten messbar mehr Interaktionen als alle vorherigen Social-Media-Aktivitäten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyVideo;