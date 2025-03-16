"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { env } from "@/config/env";
import LoadingOverlay from '@/components/shared/LoadingOverlay';
import NextImage from '@/components/shared/NextImage';

function ArticleList({ articleList = [], meta = {} }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [limit, setLimit] = useState(meta.limit);
    const [isLoading, setLoading] = useState(false);

    const handleSeeMore = () => {
      // setLoading(true);
      const newLimit = limit + 10;
      const params = new URLSearchParams(searchParams.toString());
      params.set("limit", newLimit);
      router.push(`?${params.toString()}`);
      // setLoading(false);
    }

    useEffect(() => {
      setLimit(meta.limit);
    }, [meta.limit]);

  return (
    <div>
      {articleList.length > 0 ? (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articleList.map((article) => (
            // <ArticleCard key={article.title} article={article} />
            <Link href={`articles/${article.urlParameter}`} key={article._id}>
              <div className="h-[540px] bg-white rounded-lg border border-gray-100 shadow-md hover:shadow-lg hover:scale-105 duration-300 overflow-hidden">
                <NextImage
                  img={`${env.app_url}${article.thumbnail[0].filepath}`}
                  alt={article.thumbnail[0].alternateText}
                  presets={{ width: 500, height: 500 }}
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-brand__font__size__lg font-brand__font__light">
                    {article.title}
                  </h2>
                  <p className="text-gray-600">
                    {article.description.length > 50
                      ? `${article.description.slice(0, 50)}...`
                      : article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center my-20">
          <button
            onClick={handleSeeMore}
            className="bg-teagreen-200 text-teagreen-700 py-2 px-5 rounded-lg"
          >
            See More
          </button>
        </div>
      </>
      ) : (
      <div className="text-center">No articles found.</div>
      )}
      <LoadingOverlay isLoading={isLoading} />
    </div>
  );
}

export default ArticleList