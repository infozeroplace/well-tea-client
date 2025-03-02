"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { env } from "@/config/env";

function ArticleList({ articleList = [], meta = {} }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [limit, setLimit] = useState(meta.limit);

    const handleSeeMore = () => {
        const newLimit = limit + 10;
        const params = new URLSearchParams(searchParams.toString());
        params.set("limit", newLimit);
        router.push(`?${params.toString()}`);
    }

    useEffect(() => {
      setLimit(meta.limit);
    }, [meta.limit]);

  return (
    <div>
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
      <div className="text-center my-20">
        <button onClick={handleSeeMore} className="bg-teagreen-200 text-teagreen-700 py-2 px-5 rounded-lg">
          See More
        </button>
      </div>
    </div>
  );
}

export default ArticleList