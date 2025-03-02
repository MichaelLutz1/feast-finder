export const colors = [
    "rgb(0, 0, 0)",
    "rgb(255, 255, 255)",
    "rgb(213, 40, 40)",
    "rgb(250, 123, 23)",
    "rgb(240, 186, 17)",
    "rgb(8, 161, 72)",
    "rgb(26, 115, 232)",
    "rgb(161, 66, 244)",
  ];
  
  export const modelOptions = [
    "models/gemini-2.0-flash-exp",
    "models/gemini-1.5-flash",
  ];
  
  
  export const lineOptions = {
    size: 8,
    thinning: 0,
    smoothing: 0,
    streamline: 0,
    simulatePressure: false,
  };
  
  export const defaultPromptParts = {
    "2D bounding boxes": [
      "Show me the positions of",
      "items",
      "as a JSON list. Do not return masks. Limit to 25 items.",
    ]
  };
  
  export const defaultPrompts = {
    "2D bounding boxes": defaultPromptParts["2D bounding boxes"].join(" ")
  };
  
  const safetyLevel = "only_high";
  
  export const safetySettings = new Map();
  
  safetySettings.set("harassment", safetyLevel);
  safetySettings.set("hate_speech", safetyLevel);
  safetySettings.set("sexually_explicit", safetyLevel);
  safetySettings.set("dangerous_content", safetyLevel);
  safetySettings.set("civic_integrity", safetyLevel);