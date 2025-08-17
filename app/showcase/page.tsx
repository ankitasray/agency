import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
type Work = {
  background: string;
  imageUrl: string;
  title: string;
  link: string;
};

const works: Work[] = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/fitness.png",
    title: "Anytime Fitness",
    link: "https://www.anytimefitness.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/handstone.png",
    title: "HandStone",
    link: "https://handandstone.ca/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/labellife.png",
    title: "The Label Life",
    link: "https://store.thelabellife.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/farmer.png",
    title: "Farmer Life",
    link: "https://farmeruncle.com/",
  },


];
type ShowcaseGridProps = {
  works: Work[];
};

const ShowcaseGrid = ({ works }: ShowcaseGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
      {works.map((work, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden shadow-lg group ${work.background}`}
        >
          {/* Project Image */}
          <img
            src={work.imageUrl}
            alt={work.title}
            className="w-full h-60 object-cover "
          />

          {/* Title */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-center">
            {work.title}
          </div>

          {/* Overlay Lock */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500">
            <p className="text-xl font-semibold text-gray-800 animate-pulse">
              First Try, Then Believe
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <ShowcaseNavbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Design & Code That Helps Your Business Grow"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
          Have a look at some of our recent projects.
        </p>

        {/* <BlurFadeDemo /> */}
        <ShowcaseGrid works={works} />

        <LetsMakeThingsHappenSection />


      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
