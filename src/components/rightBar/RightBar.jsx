import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://imgs.search.brave.com/kzCbQhJzeL9pP4hEwA3NARnJfyO0uWZYwauDJI4cJHc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWR1c3Rva2UuY29t/L25ldy11aS9jb21t/b24vYXNzaXN0YW50/L2Fzc2V0cy9pbWcv/cHJlLnN2Zw.svg"
                alt=""
              />
              <span>SSPS</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://imgs.search.brave.com/8rmMF5AUDiMyx8hAtGuGvpqVrlBckeodX3fgovohq8k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlkaHlhYS5pbi9w/dWJsaWMvc3RvcmFn/ZS9jb2xsZWdlLzVh/OTY3YTQxMGJjODUy/LnBuZw"
                alt=""
              />
              <span>BTKIT</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
         
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Tekina </span> changed their cover picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Aryan </span> changed their cover picture
              </p>
            </div>
            <span>30 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Binod</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5463105/pexels-photo-5463105.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Akshay Chauhan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Sahil Singh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/17800201/pexels-photo-17800201/free-photo-of-young-man-in-a-cosplay-at-a-fan-convention.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Rohit Singh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Shivpratap Singh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;