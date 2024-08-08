import message from "../assets/images/message.png"

export type BlogProps = {
    userImageUrl: string,
    userName: string,
    createdAt: Date,
    emoji: string,
    postContent: string,
    noOfComments: Number,
    editStatus: Boolean
}

function BlogCard(props: BlogProps) {

  const getElapsedTime = (createdAt: Date) : Number => {
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - createdAt.getTime();
    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60)); // convert milliseconds to minutes
    return elapsedMinutes
  }

  return (
    <div className="blog-card-container bg-atlys-dark rounded-lg w-full my-6 p-5">
        <div className="flex items-center">
          <div className="user-image w-1/12">
            <img className="w-11 h-11 rounded-full object-cover" src={props.userImageUrl} alt={props.userName} />
          </div>
          <div className="user-data h-fit w-10/12 p-3">
            <span className="block">{props.userName}</span>
            <span className="block text-sm text-atlys-small">{getElapsedTime(props.createdAt).toString()}mins ago{props.editStatus && " • Edited"}</span>
          </div>
          <div className="user-content h-fit w-1/12 cursor-pointer text-right text-xl">
            ...
          </div>
        </div>
        <div className="blog-content-container flex mt-4 py-3 px-5 rounded-lg">
          <div className="w-1/12 my-2">
              <span className="block bg-atlys-dark p-3 text-center rounded-full">{props.emoji}</span>
          </div>
          <div className="w-11/12">
              <div className="text-atlys-small bg-transparent w-full block mx-5 my-2">{props.postContent}</div>
          </div>
        </div>
        <div className="mt-4 flex">
          <img className="w-6 text-atlys-md" src={message} alt="messages" />
          <span className="ml-3 text-sm text-atlys-small">{props.noOfComments.toString()} comments</span>
        </div>
    </div>
  )
}

export default BlogCard