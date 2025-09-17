import LinkDos from "@/components/links/link-dos";
import UnderConstruction from "@/components/under-construction";

// Landing Page Component
const page = () => {
  console.log("[117] Landing Page");

  return (
    <div>
      <UnderConstruction header="Under Reconstruction">
        <LinkDos
          href={"files/117 Resume.zip"}
          name={"Resume"}
          openInNewTab={false}
        />
        <LinkDos href={"https://github.com/klaus-xy"} name={"Git Hub"} />
        {/* <LinkDos
          href={""}
          name={"Dev Logs"}
          openInNewTab={false}
          variant="inactive"
        /> */}
        <LinkDos
          href={
            "https://drive.google.com/drive/folders/10Et0L9rQhNKPNQf-FEIc67yKkuWvW9Hz?usp=sharing"
          }
          name={"Games"}
        />
        <LinkDos
          href={"https://www.behance.net/ayobamioyesiku"}
          name={"Behance"}
        />
        <LinkDos href={"https://x.com/0xKlaus117"} name={"X"} />
        <LinkDos
          href={"https://www.linkedin.com/in/ayobami-oyesiku"}
          name={"Linked In"}
        />
      </UnderConstruction>
    </div>
  );
};

export default page;
