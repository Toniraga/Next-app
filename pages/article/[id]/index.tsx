// import { useRouter } from 'next/router';
import Link from 'next/link';
import { IArticle } from './../../../components/ArticleList';

interface IProps {
    article: IArticle;
}

const Article: React.FC<IProps> = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query;
    return (
        <div style={{ width: '80%' }}>
            <h1>{ article.title }</h1>
            <p>{article.body}</p>
            <br /> 

            <Link href='/'> Go Back </Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();
    return {props: {article}}
  } catch (err) {
    console.log(err)
    return {props: {}};
  }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json();
    
    const paths = articles
        .map(article => article.id)
        .map(id => ({ params: { id: id.toString() } }))
      
    return {
      paths,
      fallback: false
    }
}

export default Article;