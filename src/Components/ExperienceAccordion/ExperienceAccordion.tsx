import { useState } from "react";
import Experience from "../Experience/Experience";
import './ExperienceAccordion.css'

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

const ExperienceAccordion = ({ items }: { items: Experience[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const toggleItem = (id:string) => {
    setActiveId(activeId === id ? null : id)
  };

  return(
    <div className="experience-accordion">
      {
        items?.map(item => (
          <ExperienceItem 
            key={item.id}
            item={item}
            isOpen={activeId === item.id}
            onClick={() => toggleItem(item.id)}
          />
        ))
      }
    </div>
  );
};

const ExperienceItem = ({ item, isOpen, onClick }: { item: Experience, isOpen: boolean, onClick: () => void }) => {
  return(
    <div className={`experience-block ${isOpen ? 'open' : ''}`}>
      <div className="experience-header" onClick={onClick}>
        <div className="radio-circle">
          <div className="inner-dot" />
        </div>
        <h3 className="experience-title">
          {item.company} - {item.role}
        </h3>
      </div>
      
      <div className="experience-content-wrapper">
        <div className="experience-content">
          <p className="experience-period">
            <i>{item.period}</i>
          </p>
          <ul className="experience-description">
            {item.description.map((point, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAccordion;