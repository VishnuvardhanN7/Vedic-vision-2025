const CATEGORY_PROFILES = {
  pregnancy: {
    label: "Pregnancy",
    keywords: [
      "pregnancy",
      "pregnant",
      "abdomen",
      "abdominal",
      "swelling of face",
      "swelling of hands",
      "sudden weight gain",
      "high blood pressure",
      "anemia",
      "dehydration",
      "cramping",
    ],
    examples: [
      "pregnant abdominal pain swelling of face hands sudden weight gain high blood pressure",
      "pregnancy discomfort dehydration anemia cramping tiredness",
      "pregnant with headache swelling and high blood pressure",
    ],
    diseases: [
      "Pregnancy-related discomfort",
      "Dehydration or low energy",
      "Iron deficiency or anemia",
      "Muscle strain or cramping",
    ],
    causes: [
      "Hormonal changes during pregnancy",
      "Lack of rest or poor hydration",
      "Physical strain from daily activity",
    ],
    care: [
      "Drink enough water and rest more",
      "Eat balanced meals with iron and protein",
      "Avoid heavy lifting or long standing",
    ],
  },
  chest: {
    label: "Chest",
    keywords: [
      "chest pain",
      "difficulty breathing",
      "rapid heartbeat",
      "sweating",
      "fainting",
      "jaw pain",
      "left hand pain",
      "back pain",
      "tightness",
    ],
    examples: [
      "chest pain difficulty breathing rapid heartbeat sweating fainting",
      "pain in chest and jaw pain with left hand pain",
      "tightness in chest with dizziness and breathing trouble",
    ],
    diseases: [
      "Acid reflux or indigestion",
      "Chest muscle strain",
      "Anxiety or stress-related discomfort",
      "Heart or lung-related concern if symptoms are severe",
    ],
    causes: [
      "Overexertion or posture strain",
      "Acid reflux after eating",
      "Stress, panic, or breathing strain",
    ],
    care: [
      "Rest and avoid heavy physical activity",
      "Eat lighter meals and stay upright after eating",
      "Seek urgent care if chest pain or breathing trouble worsens",
    ],
  },
  stomach: {
    label: "Stomach",
    keywords: [
      "stomach pain",
      "vomiting",
      "indigestion",
      "gas",
      "diarrhea",
      "constipation",
      "stomach swelling",
      "heavy",
      "after meals",
    ],
    examples: [
      "stomach pain vomiting indigestion gas diarrhea constipation",
      "stomach discomfort after meals with heaviness and gas",
      "abdominal bloating constipation and food intolerance",
    ],
    diseases: [
      "Indigestion or gas",
      "Gastritis or acidity",
      "Constipation or digestive upset",
      "Food intolerance or stomach infection",
    ],
    causes: [
      "Food irritation or overeating",
      "Stress or irregular meals",
      "Low water intake",
    ],
    care: [
      "Eat smaller meals and stay hydrated",
      "Avoid oily, spicy, or very heavy food",
      "Rest and monitor for vomiting or fever",
    ],
  },
  hand: {
    label: "Hand",
    keywords: [
      "hand pain",
      "swelling in fingers",
      "swelling in hand",
      "weak grip",
      "numbness",
      "burning sensation",
      "cold hands",
      "hot hands",
      "joint deformity",
    ],
    examples: [
      "hand pain swelling in fingers weak grip numbness burning sensation",
      "swelling in hand with numbness and cold hands",
      "joint deformity and weak grip after repetitive movement",
    ],
    diseases: [
      "Muscle strain or tendon irritation",
      "Nerve compression or repetitive stress",
      "Joint inflammation or sprain",
    ],
    causes: [
      "Overuse or repetitive movement",
      "Poor posture while working",
      "Minor injury or strain",
    ],
    care: [
      "Rest the hand and reduce repetitive activity",
      "Use a warm or cold compress if comfortable",
      "Get checked if swelling or numbness appears",
    ],
  },
  head: {
    label: "Head",
    keywords: [
      "headache",
      "pain behind eyes",
      "sensitivity to light",
      "sensitivity to sound",
      "dizziness",
      "neck pain",
      "stress",
      "red eyes",
      "pain in neck",
    ],
    examples: [
      "headache pain behind eyes sensitivity to light dizziness stress",
      "pain in neck and head with red eyes and fatigue",
      "head pain with light sensitivity and dizziness",
    ],
    diseases: [
      "Tension headache",
      "Migraine",
      "Dehydration-related headache",
      "Sinus pressure or eye strain",
    ],
    causes: [
      "Stress or lack of sleep",
      "Not drinking enough water",
      "Screen strain or fatigue",
    ],
    care: [
      "Rest in a quiet room and hydrate",
      "Limit screen time for a while",
      "Seek help if headache is sudden, severe, or with vision changes",
    ],
  },
  leg: {
    label: "Leg",
    keywords: [
      "leg pain",
      "swelling in leg",
      "cramp",
      "calf",
      "numbness",
      "walking",
      "standing",
      "muscle strain",
    ],
    examples: [
      "leg pain swelling and cramp after walking or standing too long",
      "calf pain with swelling and numbness",
      "muscle strain and leg discomfort from overuse",
    ],
    diseases: [
      "Muscle cramp or strain",
      "Fatigue-related pain",
      "Circulation-related discomfort",
    ],
    causes: [
      "Walking or standing too long",
      "Low hydration or mineral imbalance",
      "Muscle overuse",
    ],
    care: [
      "Rest and stretch gently",
      "Drink water and avoid overexertion",
      "Seek help if swelling, redness, or severe pain appears",
    ],
  },
  kidney: {
    label: "Kidney",
    keywords: [
      "kidney pain",
      "burning urination",
      "urination",
      "flank pain",
      "fever",
      "urinary",
      "back pain",
      "pain during urination",
    ],
    examples: [
      "kidney pain burning urination fever flank pain",
      "pain during urination with back pain and fever",
      "urinary irritation and kidney stone symptoms",
    ],
    diseases: [
      "Urinary tract infection",
      "Kidney stone or urinary irritation",
      "Dehydration-related discomfort",
    ],
    causes: [
      "Low water intake",
      "Urinary irritation or infection",
      "Pain in the lower abdomen or back",
    ],
    care: [
      "Drink water and do not ignore burning urination",
      "Avoid delaying urination",
      "Get medical evaluation if pain or fever worsens",
    ],
  },
  backbone: {
    label: "Backbone",
    keywords: [
      "back pain",
      "spine",
      "backbone",
      "posture",
      "lifting heavy",
      "muscle spasm",
      "stiffness",
      "numbness",
    ],
    examples: [
      "back pain posture lifting heavy muscle spasm stiffness",
      "spine discomfort with numbness and poor posture",
      "backbone pain after lifting heavy objects",
    ],
    diseases: [
      "Posture-related back strain",
      "Muscle spasm",
      "Disc or spinal irritation",
    ],
    causes: [
      "Long sitting or poor posture",
      "Lifting heavy objects",
      "Muscle tension from stress",
    ],
    care: [
      "Use proper posture and rest the back",
      "Avoid lifting heavy weight for now",
      "See a doctor if numbness or weakness occurs",
    ],
  },
  femalegenital: {
    label: "Female Genital",
    keywords: [
      "female genital",
      "pelvic pain",
      "vaginal",
      "itching",
      "discharge",
      "burning",
      "menstrual",
      "urinary tract infection",
    ],
    examples: [
      "pelvic pain vaginal itching discharge burning menstrual pain",
      "female genital irritation with urinary tract infection symptoms",
      "pain and discharge with local irritation",
    ],
    diseases: [
      "Urinary tract infection",
      "Yeast infection or irritation",
      "Menstrual or pelvic pain",
      "Pelvic inflammation if pain is strong",
    ],
    causes: [
      "Local irritation or infection",
      "Hormonal changes",
      "Dehydration or hygiene-related irritation",
    ],
    care: [
      "Keep the area clean and dry",
      "Drink water and avoid irritants",
      "Get checked if pain, burning, or discharge continues",
    ],
  },
  general: {
    label: "General",
    keywords: ["general", "fatigue", "weakness", "mild pain", "body ache"],
    examples: [
      "general body ache fatigue weakness mild pain",
      "non specific symptoms with dehydration and tiredness",
      "general discomfort without a clear body area",
    ],
    diseases: [
      "General symptom-related discomfort",
      "Temporary inflammation or strain",
      "Fatigue or dehydration",
    ],
    causes: [
      "Body strain",
      "Not enough rest or water",
      "Mild irritation in the affected area",
    ],
    care: [
      "Rest and stay hydrated",
      "Eat light, balanced meals",
      "Monitor symptoms and seek care if they worsen",
    ],
  },
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "be",
  "based",
  "can",
  "clean",
  "doctor",
  "give",
  "helpful",
  "health",
  "how",
  "in",
  "information",
  "is",
  "it",
  "level",
  "markdown",
  "medical",
  "need",
  "not",
  "of",
  "or",
  "pain",
  "patient",
  "provide",
  "query",
  "related",
  "respond",
  "select",
  "selected",
  "symptom",
  "symptoms",
  "the",
  "this",
  "to",
  "user",
  "you",
  "your",
  "with",
  "without",
]);

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EMERGENCY_SYMPTOMS = [
  "chest pain",
  "difficulty breathing",
  "fainting",
  "blurred vision",
  "rapid heartbeat",
  "high fever",
  "sudden weight gain",
  "swelling of face",
  "high blood pressure",
  "severe headache",
  "pain during urination",
];

const CAUTION_SYMPTOMS = [
  "dizziness",
  "very tired",
  "vomiting",
  "swelling",
  "burning sensation",
  "itching",
  "redness",
  "dryness",
  "back pain",
  "jaw pain",
  "left hand pain",
  "weak grip",
  "numbness",
];

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z]+/g) || []).filter((token) => !STOP_WORDS.has(token));
}

function extractContext(query) {
  const categoryMatch = query.match(/This is\s+(.+?)\s+related\./i);
  const ageMatch = query.match(/Age:\s*([^\n]+)/i);
  const symptomsMatch = query.match(/Symptoms:\s*([^\n]+)/i);
  const painLevelMatch = query.match(/Pain Level:\s*([^\n]+)/i);

  return {
    categoryHint: categoryMatch?.[1]?.trim().toLowerCase() || "general",
    age: ageMatch?.[1]?.trim() || "Not provided",
    symptoms: symptomsMatch?.[1]?.trim() || "None",
    painLevel: painLevelMatch?.[1]?.trim() || "Not selected",
  };
}

function countKeywordMatches(text, keywords) {
  const normalized = text.toLowerCase();
  return keywords.reduce((count, keyword) => (normalized.includes(keyword) ? count + 1 : count), 0);
}

function makeRandom(seed) {
  let state = seed % 2147483647;

  if (state <= 0) {
    state += 2147483646;
  }

  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function buildTrainingSamples(profiles) {
  const samples = [];
  const vocabulary = new Set();

  for (const [categoryKey, profile] of Object.entries(profiles)) {
    for (const sample of profile.examples) {
      const tokens = tokenize(sample);
      tokens.forEach((token) => vocabulary.add(token));
      profile.keywords.flatMap((keyword) => tokenize(keyword)).forEach((token) => vocabulary.add(token));
      samples.push({ categoryKey, tokens });
    }
  }

  return {
    samples,
    vocabulary: Array.from(vocabulary).sort(),
  };
}

function parseCSV(content) {
  const lines = content.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const rows = [];

  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i];
    const parts = line.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);
    const label = (parts[1] || "").trim().replace(/^\"|\"$/g, "");
    let text = (parts.slice(2).join(",") || "").trim();
    if (text.startsWith('"') && text.endsWith('"')) {
      text = text.slice(1, -1).replace(/""/g, '"');
    }
    if (!label || !text) continue;
    rows.push({ label, text });
  }

  return rows;
}

function trainRandomForestFromSamples(rawSamples) {
  const vocabulary = new Set();

  for (const s of rawSamples) {
    const tokens = Array.isArray(s.tokens) ? s.tokens : tokenize(s.text || "");
    tokens.forEach((t) => vocabulary.add(t));
    s.tokens = tokens;
  }

  const vocabularyIndex = new Map(Array.from(vocabulary).sort().map((t, i) => [t, i]));
  const trainingSamples = rawSamples.map((sample) => ({
    categoryKey: sample.categoryKey || sample.label,
    vector: vectorizeTokens(sample.tokens, vocabularyIndex),
  }));

  const treeCount = 21;
  const trees = [];

  for (let treeIndex = 0; treeIndex < treeCount; treeIndex += 1) {
    const random = makeRandom(treeIndex + 1);
    const bootstrapSamples = [];

    for (let sampleIndex = 0; sampleIndex < trainingSamples.length; sampleIndex += 1) {
      bootstrapSamples.push(trainingSamples[Math.floor(random() * trainingSamples.length)]);
    }

    trees.push(buildDecisionTree(bootstrapSamples, vocabulary.size, random));
  }

  return {
    vocabularyIndex,
    trees,
  };
}
function vectorizeTokens(tokens, vocabularyIndex) {
  const vector = new Array(vocabularyIndex.size).fill(0);

  for (const token of new Set(tokens)) {
    const index = vocabularyIndex.get(token);

    if (index !== undefined) {
      vector[index] = 1;
    }
  }

  return vector;
}

function giniImpurity(samples) {
  if (!samples.length) {
    return 0;
  }

  const counts = new Map();

  for (const sample of samples) {
    counts.set(sample.categoryKey, (counts.get(sample.categoryKey) || 0) + 1);
  }

  let impurity = 1;
  for (const count of counts.values()) {
    const probability = count / samples.length;
    impurity -= probability * probability;
  }

  return impurity;
}

function majorityLabel(samples) {
  const counts = new Map();
  let winner = "general";
  let bestCount = -1;

  for (const sample of samples) {
    const nextCount = (counts.get(sample.categoryKey) || 0) + 1;
    counts.set(sample.categoryKey, nextCount);

    if (nextCount > bestCount) {
      winner = sample.categoryKey;
      bestCount = nextCount;
    }
  }

  return winner;
}

function chooseFeatureSubset(featureCount, subsetSize, random) {
  const chosen = new Set();

  while (chosen.size < subsetSize && chosen.size < featureCount) {
    chosen.add(Math.floor(random() * featureCount));
  }

  return Array.from(chosen);
}

function buildDecisionTree(samples, featureCount, random, depth = 0) {
  const maxDepth = 6;
  const minSamplesSplit = 2;

  if (samples.length === 0) {
    return { type: "leaf", label: "general" };
  }

  const firstLabel = samples[0].categoryKey;
  if (samples.every((sample) => sample.categoryKey === firstLabel)) {
    return { type: "leaf", label: firstLabel };
  }

  if (depth >= maxDepth || samples.length < minSamplesSplit) {
    return { type: "leaf", label: majorityLabel(samples) };
  }

  const subsetSize = Math.max(1, Math.round(Math.sqrt(featureCount)));
  const candidateFeatures = chooseFeatureSubset(featureCount, subsetSize, random);
  const baseImpurity = giniImpurity(samples);
  let bestSplit = null;

  for (const featureIndex of candidateFeatures) {
    const left = [];
    const right = [];

    for (const sample of samples) {
      if (sample.vector[featureIndex]) {
        right.push(sample);
      } else {
        left.push(sample);
      }
    }

    if (!left.length || !right.length) {
      continue;
    }

    const weightedImpurity = ((left.length * giniImpurity(left)) + (right.length * giniImpurity(right))) / samples.length;
    const gain = baseImpurity - weightedImpurity;

    if (!bestSplit || gain > bestSplit.gain) {
      bestSplit = {
        featureIndex,
        left,
        right,
        gain,
      };
    }
  }

  if (!bestSplit || bestSplit.gain <= 0) {
    return { type: "leaf", label: majorityLabel(samples) };
  }

  return {
    type: "node",
    featureIndex: bestSplit.featureIndex,
    left: buildDecisionTree(bestSplit.left, featureCount, random, depth + 1),
    right: buildDecisionTree(bestSplit.right, featureCount, random, depth + 1),
  };
}

function trainRandomForest(profiles) {
  const { samples, vocabulary } = buildTrainingSamples(profiles);
  const vocabularyIndex = new Map(vocabulary.map((token, index) => [token, index]));
  const trainingSamples = samples.map((sample) => ({
    categoryKey: sample.categoryKey,
    vector: vectorizeTokens(sample.tokens, vocabularyIndex),
  }));
  const treeCount = 21;
  const trees = [];

  for (let treeIndex = 0; treeIndex < treeCount; treeIndex += 1) {
    const random = makeRandom(treeIndex + 1);
    const bootstrapSamples = [];

    for (let sampleIndex = 0; sampleIndex < trainingSamples.length; sampleIndex += 1) {
      bootstrapSamples.push(trainingSamples[Math.floor(random() * trainingSamples.length)]);
    }

    trees.push(buildDecisionTree(bootstrapSamples, vocabulary.length, random));
  }

  return {
    vocabularyIndex,
    trees,
  };
}

let medicalModel = null;

try {
  const csvPath = path.join(__dirname, "Symptom2Disease.csv");

  if (fs.existsSync(csvPath)) {
    const content = fs.readFileSync(csvPath, "utf8");
    const rows = parseCSV(content);
    const samples = rows.map((r) => ({ label: r.label, text: r.text }));
    medicalModel = trainRandomForestFromSamples(samples);
    console.log(`✅ Trained random forest from CSV with ${samples.length} samples.`);
  } else {
    medicalModel = trainRandomForest(CATEGORY_PROFILES);
    console.log("✅ Trained random forest from built-in category profiles.");
  }
} catch (err) {
  console.error("⚠️ Error training from CSV, falling back to profiles:", err.message || err);
  medicalModel = trainRandomForest(CATEGORY_PROFILES);
}

function traverseTree(tree, vector) {
  if (!tree || tree.type === "leaf") {
    return tree?.label || "general";
  }

  const nextBranch = vector[tree.featureIndex] ? tree.right : tree.left;
  return traverseTree(nextBranch, vector);
}

function predictCategory(query) {
  const tokens = tokenize(query);
  const tokenSet = new Set(tokens);
  const vector = vectorizeTokens(tokens, medicalModel.vocabularyIndex);
  const votes = new Map();

  for (const tree of medicalModel.trees) {
    const label = traverseTree(tree, vector);
    votes.set(label, (votes.get(label) || 0) + 1);
  }

  const scores = Object.entries(CATEGORY_PROFILES).map(([categoryKey, profile]) => {
    const forestVotes = votes.get(categoryKey) || 0;
    const keywordMatches = countKeywordMatches(query, profile.keywords);
    const tokenMatches = profile.keywords
      .flatMap((keyword) => tokenize(keyword))
      .filter((token) => tokenSet.has(token)).length;
    const labelBoost = query.toLowerCase().includes(profile.label.toLowerCase()) ? 1 : 0;

    return {
      categoryKey,
      score: forestVotes * 2.5 + keywordMatches * 4 + tokenMatches + labelBoost * 2,
      forestVotes,
      keywordMatches,
    };
  });

  scores.sort((left, right) => right.score - left.score);
  const winner = scores[0] || { categoryKey: "general", score: 0, forestVotes: 0, keywordMatches: 0 };
  const runnerUp = scores[1] || { score: 0 };
  const confidence = Math.max(
    0,
    Math.min(1, ((winner.score - runnerUp.score) / Math.max(1, winner.score + runnerUp.score + 1)) + (winner.forestVotes / Math.max(1, medicalModel.trees.length)) * 0.25),
  );

  return {
    categoryKey: winner.categoryKey,
    confidence,
  };
}

function determineUrgency(query, painLevel) {
  const normalizedPainLevel = painLevel.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (normalizedPainLevel.includes("heavy") || normalizedPainLevel.includes("severe")) {
    return "**🚨 Go to a hospital immediately.**";
  }

  if (normalizedPainLevel.includes("light") || normalizedPainLevel.includes("mild")) {
    return "**✅ Don’t worry, it’s probably normal.**";
  }

  if (EMERGENCY_SYMPTOMS.some((symptom) => normalizedQuery.includes(symptom))) {
    return "**🚨 Go to a hospital immediately.**";
  }

  if (CAUTION_SYMPTOMS.some((symptom) => normalizedQuery.includes(symptom))) {
    return "**⚠️ Consult a doctor for evaluation.**";
  }

  return "**⚠️ Consult a doctor for evaluation.**";
}

function buildMarkdownAnswer(query) {
  const context = extractContext(query);
  const prediction = predictCategory(query);
  const profile = CATEGORY_PROFILES[prediction.categoryKey] || CATEGORY_PROFILES.general;
  const symptomList = context.symptoms
    .split(",")
    .map((symptom) => symptom.trim())
    .filter((symptom) => symptom && symptom.toLowerCase() !== "none");

  const urgency = determineUrgency(query, context.painLevel);
  const relatedDiseases = profile.diseases.map((item) => `- ${item}`).join("\n");
  const possibleCauses = profile.causes.map((item) => `- ${item}`).join("\n");
  const suggestedCare = profile.care.map((item) => `- ${item}`).join("\n");

  return {
    answer: `**1. Urgency Level**  
${urgency}

**2. Related Diseases**  
${relatedDiseases}

**3. Possible Causes**  
${possibleCauses}

**4. Suggested Care**  
${suggestedCare}

**Model Note:**  
This response was generated by a local machine-learning classifier, so no API keys are required.

**Model Confidence:**  
- Category: ${profile.label}  
- Confidence: ${Math.round(prediction.confidence * 100)}%

**Selected Context**  
- Type: ${context.categoryHint}  
- Symptoms: ${context.symptoms}  
- Pain Level: ${context.painLevel}  
- Reported Symptoms Count: ${symptomList.length}

**Patient Info**  
- Age: ${context.age}  
- Symptoms: ${context.symptoms}`,
    category: prediction.categoryKey,
    confidence: prediction.confidence,
    model: "local-random-forest",
  };
}

export function buildMedicalResponse(query) {
  return buildMarkdownAnswer(query);
}
