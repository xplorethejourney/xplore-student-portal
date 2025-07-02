import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";

import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export default function Home() {
  const cardContent = [
    ["Discover Events", "Find a diverse range of campus events, from academic workshops to social gatherings."],
    ["Connect with Clubs", "Explore and join various student organizations that match your interests"],
    ["Stay Organized", "Manage your event registrations and schedules with an integrated calendar"],
    ["Expand Your Network", "Meet new people and build connections within the vibrant campus community."],
    ["Showcase Your Talents"," Participate in competitions and activities that highlight your skills."],
    ["Instant Notifications", "Receive real-time updates on your favorite clubs and upcoming events."],
  ];

  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-[70vh]">
      <div className=" min-w-xl text-center justify-center">
        
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-[90vw] text-center">
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

    <section className="flex flex-col items-center justify-start gap-4 py-3 md:py-6 min-h-screen ">
      <h2 className="text-5xl font-bold text-center mb-4 ">Why Xplore?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {
          cardContent.map(([title, description], index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-xl font-bold">{title}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 dark:text-gray-400">{description}</p>
              </CardBody>
              <CardFooter>
                <Link
                  className="text-sm font-medium text-primary-700 dark:text-primary-500 hover:underline"
                  href={siteConfig.links.login}
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </section>
    </>
  );
}

