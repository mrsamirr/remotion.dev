import './tailwind.css';
import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComposition"
        component={MyComposition}
        durationInFrames={130}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
