import ProgressCircle from "./progress-circle";
import { StatBoxProps } from "../lib/types";

const StatBox = ({ title, subtitle, icon, progress, increase }: StatBoxProps) => {
  return (
    <div className="w-full"> 
      <div className="flex justify-between">
        <div className="flex flex-col space-y-1">
          {icon}
          <h4 className="font-bold">{title}</h4>
        </div>
        <div>
          <ProgressCircle progress={progress} />
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <h5 className={`text-secondary`}>{subtitle}</h5>
        <h5 className={`font-italic text-secondary}`}>{increase}</h5>
      </div>
    </div>
  );
};

export default StatBox;
