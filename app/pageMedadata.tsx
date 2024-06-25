import type { Metadata } from "next";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const PageMetaData = ({ title, description }: Props) => {
  const metadata: Metadata = {
    title: title,
    description: description,
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default PageMetaData;
