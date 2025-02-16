import React from 'react'
import { CommonBanner } from '@/components';
import Link from 'next/link';
import Image from 'next/image';

function Articles() {
    const articleData = [
      {
        title: "Article 1",
        description: "Article 1 description",
        image: "/images/about-image-4.jpg",
        link: "/articles?article=1",
      },
      {
        title: "Article 2",
        description: "Article 2 description",
        image: "/images/about-image-5.jpg",
        link: "/articles?article=2",
      },
      {
        title: "Article 3",
        description: "Article 3 description",
        image: "/images/about-image-6.jpg",
        link: "/articles?article=3",
      },
    ];
  return (
    <div>
      <CommonBanner bannerTitle="Articles" bannerDescription="Articles" />
      <div className="container-narrow mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articleData.map((article) => (
            // <ArticleCard key={article.title} article={article} />
            <Link href={article.link} key={article.title}>
              <div className="bg-white rounded-lg border border-gray-100 shadow-md">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={500}
                />
                <div className="p-4">
                  <h2 className="text-brand__font__size__lg font-brand__font__light">
                    {article.title}
                  </h2>
                  <p className="text-gray-600">{article.description}</p>
                  {/* <Link
                    href={article.link}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Read More
                  </Link> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;