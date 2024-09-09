import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
export const Hero = () => {
  return <section className=" h-[492px] pt-[130px]" style={{backgroundImage: `url(${starsBg.src})`}}
  >
    
    <div className="absolute h-64 w-64 bg-purple-900 rounded-full border border-white/30 left-0 right-0 m-auto bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%)] 
  shadow-[0_0_50px_rgb(140,69,255),20px_20px_50px_rgb(255,255,255,0.5),20px_20px_80px_rgb(255,255,255,0.1)]"></div>
  
    <div className=" relative container">
    <h1 className=" text-center pt-1 -mb-0 tracking-tighter mx-auto text-[180px] bg-white font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent text-8xl bg-clip-text">AnyDo</h1>
    <h2 className="text-2xl text-white/60 text-center" > Your Productivity Partner</h2>
    <p className="text-lg text-white mt-5 text-center">

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore similique doloremque minus explicabo placeat illum nam accusamus aliquam adipisci soluta sequi impedit, molestiae nemo! Fugiat a velit tenetur, necessitatibus delectus sunt magnam dignissimos quibusdam quod voluptate sint neque voluptatem consequatur, saepe ullam commodi tempora deserunt, recusandae eaque ipsum! Repudiandae.
    </p>







<div className="flex justify-center mt-5">
<Button >Sign Up</Button>
</div>
</div>
</section>;


};
