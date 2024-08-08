import { BlogProps } from "../Components/BlogCard"
import user1 from "../assets/images/user1.png"
import user2 from "../assets/images/user2.png"

const blogData: BlogProps[] = [
    {
        userImageUrl: user1,
        userName: "Theresa Webb",
        createdAt: new Date(new Date().setMinutes(new Date().getMinutes() - 4)),
        emoji: "👋",
        postContent: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        noOfComments: 24,
        editStatus: false
    },
    {
        userImageUrl: user2,
        userName: "Marvin McKinney",
        createdAt: new Date(new Date().setMinutes(new Date().getMinutes() - 8)),
        emoji: "😞",
        postContent: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        noOfComments: 32,
        editStatus: true
    }
]

export default blogData