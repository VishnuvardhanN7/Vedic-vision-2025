import SymptomChecker from "./SymptomChecker";

export default function Image1Click({ onClose }) {
  const symptomsList = [
    "severe abdominal pain",
    "High-Fever",
    "severe headache",
    "blurred vision",
    "swelling of face, hands",
    "sudden weight gain",
    "Rapid Heartbeat",
    "High Blood Pressure",
    "Chest Pain",
    "Back Pain",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Pregnancy-related discomfort  
- Dehydration or low energy  
- Iron deficiency or anemia  

**3. Possible Causes**  
- Hormonal changes during pregnancy  
- Lack of rest or poor hydration  
- Physical strain from daily activity  

**4. Suggested Care**  
- Drink enough water and rest more  
- Eat balanced meals with iron and protein  
- Avoid heavy lifting or long standing`;

  return <SymptomChecker onClose={onClose} conditionLabel="pregnancy" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
