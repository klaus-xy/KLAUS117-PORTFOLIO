import Core from "@/components/3d/core";
import LinkDos from "@/components/links/link-dos";
import MusicPlayer from "@/components/music-player";
import UnderConstruction from "@/components/under-construction";

// Landing Page Component
const page = () => {
  console.log("[117] Landing Page");

  return (
    <div>
      {/* <MusicPlayer className=" top-0 right-0" /> */}

      {/* <div className=" inset-0 z-0">
        <Core />
      </div> */}

      <UnderConstruction header="Under Reconstruction" />
    </div>
  );
};

export default page;
