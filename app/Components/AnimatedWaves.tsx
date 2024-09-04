import Wave from "../Assets/Wave";

const AnimatedWaves = () => {
  return (
    <div className="relative h-screen flex justify-center items-center ">
      <Wave className=" absolute opacity-30 top-0 left-0 animate-wave " />
      <Wave className=" absolute opacity-30  bottom-5 right-5 animate-swell animate-pulse-slow  w-[3000px]" />
      {/* <Wave className=" absolute opacity-30 bottom-[-100px] left-0 animate-swell w-[3000px] " /> */}
    </div>
  );
};

export default AnimatedWaves;
