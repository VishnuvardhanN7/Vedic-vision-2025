import SymptomChecker from "./SymptomChecker";

export default function Image5Click({ onClose }) {
  const symptomsList = [
    "pain in neck",
    "sensitivity to light or sound",
    "dizziness",
    "pain behind eyes",
    "red eyes",
    "pain in left side",
    "pain in right side",
    "stress",
    "pain in back",
    "pain lasts for few minutes",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Tension headache  
- Migraine  
- Dehydration-related headache  

**3. Possible Causes**  
- Stress or lack of sleep  
- Not drinking enough water  
- Screen strain or fatigue  

**4. Suggested Care**  
- Rest in a quiet room and hydrate  
- Limit screen time for a while  
- Seek help if headache is sudden or severe`;

  return <SymptomChecker onClose={onClose} conditionLabel="head" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
