import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Jai Shree Krishna!",
      name: "Tekina",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      desc: "lorem ipiy jguoqf kjgoufa kjg kjgfoui pqksp qpk cjsab iohywq jkgdu jkg jhqigi kjF ",
      name: "bINOD",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    
  ];
  return (
    <div className="comments">
      <div className="write">
        {/* <img src={currentUser.profilePic} alt="" /> */}
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;