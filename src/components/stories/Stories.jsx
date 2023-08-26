import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Tekina",
      img: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Aryan",
      img: "https://images.pexels.com/photos/8820783/pexels-photo-8820783.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Batra",
      img: "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <span>Chetan Batra</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;