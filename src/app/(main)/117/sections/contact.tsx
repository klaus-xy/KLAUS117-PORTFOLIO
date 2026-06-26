import SectionWrapper from "./section-wrapper";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <SectionWrapper id="contact" wrapperClassName="min-h-[65dvh] ">
      <h1>
        Lets Create <br />
        Cool Sh*t.
      </h1>
      <p>
        Have questions or want to get in touch? We'd love to hear from you!
        Whether you're interested in collaborating, have feedback, or just want
        to say hello, feel free to reach out to me. xD 👀
      </p>

      <Button className="before:bg-lime-500 before:h-10 before:w-10 ">
        Send Pigeon
      </Button>
    </SectionWrapper>
  );
};

export default Contact;
