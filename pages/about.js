import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { getFileBySlug } from "@/lib/mdx";
import Link from "@/components/Link";

const DEFAULT_LAYOUT = "AuthorLayout";

export async function getStaticProps() {
  const authorDetails = await getFileBySlug("authors", ["default"]);
  return { props: { authorDetails } };
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <div className="max-w-6xl mx-auto">
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </div>
  );
}
