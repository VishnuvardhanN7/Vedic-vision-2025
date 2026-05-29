import SymptomChecker from "./SymptomChecker";

export default function Image4Click({ onClose }) {
  const symptomsList = [
    "hand pain",
    "swelling in fingers",
    "swelling in hand",
    "weak grip",
    "numbness",
    "burning sensation",
    "cold hands",
    "hot or warm hands",
    "skin changes",
    "joint deformity",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Muscle strain or tendon irritation  
- Nerve compression or repetitive stress  
- Joint inflammation or sprain  

**3. Possible Causes**  
- Overuse or repetitive movement  
- Poor posture while working  
- Minor injury or strain  

**4. Suggested Care**  
- Rest the hand and reduce repetitive activity  
- Use a warm or cold compress if comfortable  
- Get checked if swelling or numbness appears`;

  return <SymptomChecker onClose={onClose} conditionLabel="hand" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
