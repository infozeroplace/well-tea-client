import React from 'react'
import axios from "@/api/axios";
import { env } from '@/config/env';
import { CommonBanner } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { useGetBlogListQuery } from "@/services/features/blog/blogApi";
import { articleListMetadata } from '@/data/staticMetaData';

export async function generateMetadata() {
  return articleListMetadata;
}

async function Articles() {

  const { data: { data: articleList = {} } = {} } = await axios.get(
    "/public/blog/blog-list"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Articles" bannerDescription="Articles" />
      <div className="container-narrow mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articleList.map((article) => (
            // <ArticleCard key={article.title} article={article} />
            <Link href={`articles/${article.urlParameter}`} key={article._id}>
              <div className="bg-white rounded-lg border border-gray-100 shadow-md">
                <Image
                  src={`${env.app_url}${article.thumbnail[0].filepath}`}
                  alt={article.thumbnail[0].alternateText}
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