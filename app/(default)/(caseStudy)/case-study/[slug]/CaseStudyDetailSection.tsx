import Image from "next/image"

interface CaseStudyData {
  title: string;
  description: string;
  image: string;
  sections: {
    background: string;
    challenge: string;
    solution: string;
    outcomes: string;
  };
}

interface Props {
  data: CaseStudyData;
}

export default function CaseStudyDetailSection({ data }: Props) {
  return (
    <section className="py-12 md:py-16">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="font-space-grotesk text-black font-bold
            text-[32px] leading-[40px]
            md:text-[48px] md:leading-[61.25px]
            uppercase mb-4">
            {data.title}
          </h1>
          <p className="font-proxima-nova text-black
            text-[16px] leading-[24px]
            md:text-[18px] md:leading-[27px]">
            {data.description}
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Background Section */}
        <div>
          <h2 className="font-space-grotesk text-black font-bold
            text-[24px] leading-[30px]
            md:text-[32px] md:leading-[40px]
            mb-4">
            Background
          </h2>
          <p className="font-proxima-nova text-black
            text-[16px] leading-[24px]
            md:text-[18px] md:leading-[27px]">
            {data.sections.background}
          </p>
        </div>

        {/* Other sections... */}
        {/* Challenge, Solution, Outcomes sections follow the same pattern */}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 mt-12">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`h-2 w-2 rounded-full ${dot === 3 ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  )
} 