import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className=" min-w-xl text-center justify-center">
        
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap text-center">
        Your Campus, Unlocked.
        </div>
        <br />
        <span className="text-xl">Discover, Connect, and Thrive with Xplore – Your Gateway</span>
        <br />
        <span className="text-xl">to Campus Clubs, Events, and Opportunities.</span>
      </div>
        <Button
            color="secondary"
            isExternal
            as={Link}
            className="text-lg font-bold py-6 px-10 uppercase text-white bg-primary-700 dark:bg-[#E8A9C5] "
            href={siteConfig.links.login}
            variant="solid"
          >
            Login
          </Button>

      

     
    </section>
  );
}

