import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.siteUrl;

  const blogUrls = blogPosts.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
  }));
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/blogs/${project.slug}`,
    lastModified: new Date(),
  }));
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/blogs/${service.slug}`,
    lastModified: new Date(),
  }));
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    ...projectUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogUrls,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
    },
  ];
}
