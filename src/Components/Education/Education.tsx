import BlockSection from "../BlockSection/BlockSection";
import './Education.css'
interface EducationItemProps {
  title: string;
  period: string;
  institution: string;
}
const Education = () => (
  <BlockSection 
   title="Education"
   children={<EducationContent />}
  />
);

const EducationContent = () => (
  <>
    <EducationItem 
      title="Mechatronic Engineering Degree"
      period="2008 - 2013"
      institution="Instituto Politécnico Nacional, Gustavo A. Madero, CDMX, México"
    />
     <EducationItem 
      title="Computer Science Studies (Relevant Coursework)"
      period="2015 - 2023"
      institution="Universidad Tecmilenio, Santa Barbara, Azcapotzalco, CDMX, México"
    />
  </>
);

const EducationItem = ({ title, period, institution }: EducationItemProps) => (
  <div className="education-item">
    <p><strong>{title}</strong></p>
    <p><i>{period}</i></p>
    <p>{institution}</p>
  </div>
);

export default Education;