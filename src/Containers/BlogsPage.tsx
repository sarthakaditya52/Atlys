import { useState } from "react"
import BlogCard from "../Components/BlogCard"
import blogData from "../data/blogData"

function BlogsPage() {

  const [blogContent, setBlogContent] = useState("")

  return (
    <div className="blog-page-container container max-w-screen-sm m-auto text-white">
      <h1 className="mt-16 text-atlys-md">Hello Jane</h1>
      <p className="mb-6 text-atlys-small">How are you doing today? Would you like to share something with the community 🤗</p>
      <div className="blog-card-container bg-atlys-dark rounded-lg w-full my-6 p-5">
        <h3 className="mb-4 text-atlys-md">Create post</h3>
        <div className="blog-content-container flex py-3 px-5 rounded-lg">
          <div className="w-1/12">
            <span className="block bg-atlys-dark text-lg p-2 text-center rounded-full">💬</span>
          </div>
          <div className="w-11/12">
            <input value={blogContent} onChange={(e) => setBlogContent(e.target.value)} className="text-white bg-transparent w-full block mx-5 my-2" placeholder="How are you feeling today?" />
          </div>
        </div>
        <button className="text-white block ml-auto rounded-md mt-4 py-2 px-8">Post</button>
      </div>
      {blogData.map((blog) => <BlogCard userName="Sarthak"
          userImageUrl={blog.userImageUrl}
          createdAt={blog.createdAt}
          postContent={blog.postContent}
          noOfComments={blog.noOfComments}
          editStatus={blog.editStatus}
          emoji={blog.emoji} />
        )}
    </div>
  )
}

export default BlogsPage