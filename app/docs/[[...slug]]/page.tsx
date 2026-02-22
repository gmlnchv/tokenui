import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import {
  StructuredData,
  getBreadcrumbStructuredData,
} from "@/components/seo/structured-data";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const baseUrl = "https://tokenui.dev";

  const breadcrumbs = [
    { name: "Docs", item: `${baseUrl}/docs` },
    ...(params.slug || []).map((s, i) => ({
      name: s.charAt(0).toUpperCase() + s.slice(1),
      item: `${baseUrl}/docs/${params.slug?.slice(0, i + 1).join("/") || ""}`,
    })),
  ];
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <StructuredData data={getBreadcrumbStructuredData(breadcrumbs)} />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const baseUrl = "https://tokenui.dev";
  const url = `${baseUrl}${page.url}`;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: url,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: ["/og-image.png"],
    },
  };
}
