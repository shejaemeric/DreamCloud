import Navbar from "./Navbar";
import "./data.css";

const Hero = (props) => {

  return (
    <div>
      <div>
        <div className="hero bg-black/30">
          <Navbar />

          <div className="flex flex-col justify-center gap-8 h-full pl-10">
            <h1 className=" font-bold text-5xl w-[50%] ">
              Unlimited movies, music, and more
            </h1>
            <p className="w-[40%] text-[20px]">
              All your forms of entertainment in one place for free anywhere,
              anytime
            </p>

            <div>
              <input
                className=" mr-6 w-[440px] py-3 px-4 bg-transparent border-2 rounded-full outline-none"
                type="text"
                placeholder="Search..."
                onChange={props.handleInputChange}
              />
              <button
                className=" bg-primaryPurple w-[64px] h-[64px] rounded-full "
                onClick={props.search}
              >
                <i className="fa-solid fa-magnifying-glass text-white text-[18px]"></i>
              </button>
            </div>

            <p className="w-1/2 text-white/60">
              <span className=" font-semibold">Trending searches: </span>
              Travis Scott Utopia, Oppenheimer, Mission Impossible, Barbie,Post
              Malone mourning, Pink Tape Lil uzi vert,Top Gun Maverick, Jujutsu
              Kaisen 0, Nf Hope, The Flash, The Joe Rogan Experience, Full Send
              Podcast, Impaulsive podcast...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
