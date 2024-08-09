import { useState } from "react"
import BlogCard from "../Components/BlogCard"
import blogData from "../data/blogData"
import AuthModal from "../Components/AuthModal"

function BlogsPage() {

  const [blogContent, setBlogContent] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="blog-page-container container max-w-screen-md m-auto px-2 text-white sm:px-0">
      <h1 className="mt-16 text-atlys-md">Hello Jane</h1>
      <p className="mb-6 text-atlys-small">How are you doing today? Would you like to share something with the community 🤗</p>
      <div className={`blog-card-container bg-atlys-dark transform transition-all duration-700 rounded-lg w-full p-5 ${!openModal ? "scale-y-100 my-3" : "scale-y-98 my-2"}`}>
        <h3 className="mb-4 text-atlys-md">Create post</h3>
        <div className="blog-content-container flex py-3 px-5 rounded-lg">
          <div className="w-1/12">
          <div className="bg-atlys-dark w-9 h-9 rounded-full"><span className="block h-full w-full py-1.5 text-center">💬</span></div>
          </div>
          <div className="w-11/12">
            <input value={blogContent} onChange={(e) => setBlogContent(e.target.value)} className="text-white bg-transparent w-full block mx-5 my-2" placeholder="How are you feeling today?" />
          </div>
        </div>
        <button onClick={handleOpenModal} className={`text-white block ml-auto transition-all duration-700 rounded-md mt-4 py-2 px-8 ${!openModal ? "scale-x-100 mr-0" : "scale-x-125 mr-4"}`}>Post</button>
      </div>
      {blogData.map((blog, index) => <BlogCard key={index} userName="Sarthak"
        userImageUrl={blog.userImageUrl}
        createdAt={blog.createdAt}
        postContent={blog.postContent}
        noOfComments={blog.noOfComments}
        editStatus={blog.editStatus}
        openModal={openModal}
        emoji={blog.emoji} />
      )}
      <AuthModal isOpen={openModal} onClose={handleCloseModal} />
    </div>
  )
}

export default BlogsPage