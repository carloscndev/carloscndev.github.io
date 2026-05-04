import BlockSection from "../BlockSection/BlockSection";
import ExperienceAccordion from "../ExperienceAccordion/ExperienceAccordion";
import ExperienceData from '../../Data/ExperinceData.json'

const Experience = () => (
  <BlockSection 
    title="Experience"
    children={<ExperienceAccordion items={ExperienceData} />}
  />
);

export default Experience;