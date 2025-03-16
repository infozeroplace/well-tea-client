import React from 'react'
import axios from "@/api/axios";
import { CommonBanner } from '@/components';
import { useGetBlogListQuery } from "@/services/features/blog/blogApi";
import { articleListMetadata } from '@/data/staticMetaData';
import ArticleList from './components/ArticleList';

export async function generateMetadata() {
  return articleListMetadata;
}

async function Articles({ searchParams: rawSearchParams }) {
  const searchParams = await Promise.resolve(rawSearchParams);
  const queryParams = new URLSearchParams(searchParams).toString();
  const { data: { data: articleList = {}, meta = {} } = {} } = await axios.get(
    `/public/blog/blog-list?${queryParams}`
  );

  return (
    <div>
      <CommonBanner bannerTitle="Articles" bannerDescription="Articles" />
      <div className="container-narrow mx-auto my-20">
        <ArticleList articleList={articleList} meta={meta} />
      </div>
    </div>
  );
}

export default Articles;