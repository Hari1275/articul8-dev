import Image from "next/image"
import Link from "next/link"

interface Article {
  title: string;
  image: string;
  link: string;
}

interface RelatedArticlesSectionProps {
  articles: Article[];
}

const RelatedArticlesSection = ({ articles }: RelatedArticlesSectionProps) => (
  <section className="space-y-6 py-0 sm:py-12 md:py-12">
    {articles.map((article, index) => (
      <div key={index} className="flex space-x-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between py-1">
          <p className="font-space-grotesk text-black
            text-[18px] sm:text-[20px] md:text-[22px]
            leading-[23px] sm:leading-[25px] md:leading-[28.07px]
            font-bold">
            {article.title}
          </p>
          <Link 
            href={article.link}
            className="inline-flex items-center font-space-grotesk
            text-[16px] sm:text-[17px] md:text-[18px]
            leading-[20px] sm:leading-[21px] md:leading-[22.97px]
            font-bold text-[#112FFF] hover:text-blue-700"
          >
            Read More
            <Image
              src="/images/case-study/icons/arrow-right.svg"
              alt="Arrow right"
              width={9}
              height={9}
              className="ml-1"
            />
          </Link>
        </div>
      </div>
    ))}
  </section>
)

export default RelatedArticlesSection 