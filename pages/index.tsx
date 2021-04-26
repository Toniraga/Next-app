import Head from 'next/head'
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title> Starting Next js </title>
        <meta name='Keywords' content='starting next js for the first time' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps = async () => {

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    const articles = await res.json();
    return {props: {articles}}
  } catch (err) {
    console.log(err)
    return {props: {}};
  }

}