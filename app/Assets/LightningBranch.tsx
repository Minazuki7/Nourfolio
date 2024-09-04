import renderBranch, { Branch } from "./RenderBranch";

interface LightningBranchProps {
  branch: Branch;
  stroke?: string;
}

const LightningBranch: React.FC<LightningBranchProps> = ({
  branch,
  stroke = "#f0f",
}) => {
  return <>{renderBranch(branch, stroke)}</>;
};

export default LightningBranch;
