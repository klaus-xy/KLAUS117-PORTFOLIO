import SectionWrapper from "../../../../components/layout/section-wrapper";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <SectionWrapper id="contact" wrapperClassName="min-h-[65dvh] ">
      <h1 className="text-9xl">
        Lets Create <br />
        Cool Sh*t
        <div className="inline-block w-12 h-8 bg-terminal-green rounded-full"></div>
      </h1>
      {/* <p>
        Have questions or want to get in touch? We'd love to hear from you!
        Whether you're interested in collaborating, have feedback, or just want
        to say hello, feel free to reach out to me. xD 👀
      </p> */}

      <div className="my-10">
        <Button
          size={"lg"}
          className="before:bg-lime-500 before:h-10 before:w-10 "
        >
          Send Pigeon
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
