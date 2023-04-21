import type { NextPage } from "next";
import Layout from "@/components/Layout";

const Home: NextPage = () => (
  <Layout title="Index page">
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 text-justify">
      <h1 className="py-3 font-bold text-3xl">Content from index</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </Layout>
);

export default Home;
