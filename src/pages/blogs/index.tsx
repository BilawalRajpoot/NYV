
import { BlogCard } from '@/sections/blogs/blog/BlogCard'
import BlogBanner from '@/sections/blogs/BlogBanner'
import Head from 'next/head'

const index = () => {
  return (
    <div className='mb-[200px]'>
    <Head>
      <title>Blogs | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
      <meta
          name="description"
          content=" NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Stay informed with the latest tech insights and trends on NYV Digital Solutions LLC's blog. Dive into informative articles, tutorials, and industry news. Expand your knowledge"
          key="desc"
        />
    </Head>
   <BlogBanner/>
   <BlogCard/>
    </div>

  )
}

export default index