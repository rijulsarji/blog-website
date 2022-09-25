import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  const posts = [
    { title: 'React Testing', excerpt: 'Learn React Testing'},
    { title: 'GraphQL', excerpt: 'Learn GraphQL'}
  ]

  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(post => {return(
            <div>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </div>
          )})}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8 bg-black'>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
