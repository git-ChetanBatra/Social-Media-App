import Post from "../post/Post";
import "./posts.scss";
//import im from "../../assets/chetanIMG.jpg"

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Chetan Batra",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Jai Shree Krishna💙",
      img:"https://e0.pxfuel.com/wallpapers/155/568/desktop-wallpaper-radha-krishna-krishna-radha-krishna-lord-krishna-radha-shyam.jpg"
    },
    {
      id: 2,
      name: "Shrivi Batra",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/2445660/pexels-photo-2445660.jpeg?auto=compress&cs=tinysrgb&w=600 ",
      desc: "Every next level of Your life will demand next version of You!!🌟",
      img:"https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "BTKIT",
      userId: 3,
      profilePic:
        "https://imgs.search.brave.com/8rmMF5AUDiMyx8hAtGuGvpqVrlBckeodX3fgovohq8k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlkaHlhYS5pbi9w/dWJsaWMvc3RvcmFn/ZS9jb2xsZWdlLzVh/OTY3YTQxMGJjODUy/LnBuZw ",
      desc: "Welcome to Bipin Tripathi Kumaon Institute of Technology",
      img:"https://imgs.search.brave.com/ZT_llG-imcxqrw-0SW4O1Mj14fIvdpXrt_ykFMbUpew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RhdGljLWNvbnRl/bnRzLnlvdXRoNHdv/cmsuY29tL3VuaXZl/cnNpdHkvRG9jdW1l/bnRzL0NvbGxlZ2Vz/L25ld3NFdmVudC8z/MjBkYjVkMC1lYmYx/LTRkNWItYjc2MS0y/NjFlZDhjY2ZkZTIu/anBn"
    },
    {
      id: 4,
      name: "CSEians",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600 ",
      desc: "Placement hi Placement Hoga 💀🎭",
      img:""
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;