import { Ubuntu } from "next/font/google";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { reactVideos } from "@/data";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });

const CourseSidebar = () => {
  return (
    <>
      <div
        className={`bg-zinc-50 transition ease-in duration-300 md:block sm:block dark:bg-zinc-900 p-4 fixed top-0 lg:w-64 left-0 h-full border-r`}
      >
        <Accordion
          type="single"
          collapsible
          className={`flex md:gap-3 gap-2 w-full flex-col pt-20 ${ubuntu.className}`}
        >
          <AccordionItem value={`item-1`}>
            <AccordionTrigger>MODULE 1</AccordionTrigger>
            {reactVideos.map((el) => (
              <AccordionContent key={el.id}>
                <Link
                  href={`dashboard/${el.id}`}
                  className={`flex text-sm items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
                >
                  {el.id}.<span className={`lg:block`}>{el.title}</span>
                </Link>
              </AccordionContent>
            ))}
          </AccordionItem>
          <AccordionItem value={`item-2`}>
            <AccordionTrigger>MODULE 2</AccordionTrigger>
            {reactVideos.map((el) => (
              <AccordionContent key={el.id}>
                <Link
                  href={"/"}
                  className={`flex text-sm items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
                >
                  {el.id}.<span className={`lg:block`}>{el.title}</span>
                </Link>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CourseSidebar;
