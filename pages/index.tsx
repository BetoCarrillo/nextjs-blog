import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello world! I'm a full stack developer with a background in law and
          management. <br /> <br /> I love spending time outdoors and firmly
          believe that we must collaborate and take action towards a circular
          sustainable world. <br /> <br /> You can contact me on{" "}
          <a rel='noopener'
           
            href="https://www.linkedin.com/in/alberto-carrillo-ch/"
            target={"_blank"}
          >
            Linkedin
          </a>,
       
          visit my{" "}
          <a rel='noopener'
           
            href="https://github.com/BetoCarrillo"
            target={"_blank"}
          >
            Github
          </a> account, and
          check my <a rel='noopener'
           
            href="/images/CV.pdf"
            target={"_blank"}
          >
            CV
          </a> following the links.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <div>{title}</div>
              </Link>
    
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section><p className={utilStyles.lightText}>This website was built as part of my Next.js and Typescript learning process</p></section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// FOR SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

// FOR CLIENT SIDE FETCHING
// import useSWR from "swr";

// function Profile() {
//   const { data, error } = useSWR("/api/user", fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }
