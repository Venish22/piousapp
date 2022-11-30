const k1_level = ["Choose", "Define", "Find", "How", "Label", "List", "Match", "Name", "Omit", "Recall", "Relate",
                    "Select", "Show", "Spell", "State", "Tell", "What", "When", "Where", "Which", "Who", "Why"];
const k2_level = ["Classify", "Compare", "Contrast","Convert", "Demonstrate", "Describe", "Explain", "Extend", "Illustrate",
                    "Infer", "Interpret", "Outline", "Relate", "Rephrase", "Show", "Summarize", "Translate"];
const k3_level = ["Apply", "Build", "Choose", "Compute", "Construct", "Develop", "Experiment", "Identify", "Interview",
                    "Make", "Model", "Organize", "Plan", "Select", "Solve", "Utilize", "Write"];
const k4_level = ["Analyze", "Assume", "Categorize", "Classify","Calculate", "Compare", "Conclusion", "Contrast", "Discover",
                    "Dissect", "Distinguish", "Divide", "Examine", "Function", "Inference", "Inspect", "List",
                    "Motive", "Relationships", "Simplify", "Survey", "Take", "Test", "Theme"];
const k5_level = ["Agree", "Appraise", "Assess", "Award", "Choose", "Compare", "Conclude", "Criteria", "Criticize",
                    "Decide", "Deduct", "Defend", "Determine", "Disprove", "Estimate", "Evaluate", "Explain", 
                    "Importance", "Influence", "Interpret", "Judge", "Justify", "Mark", "Measure", "Opinion",
                    "Perceive", "Prioritize", "Prove", "Rate", "Recommend", "Rule", "Select", "Support", 
                    "Value"];
const k6_level = ["Adapt", "Build", "Change", "Choose", "Combine", "Compose", "Construct", "Create", "Delete", 
                    "Design", "Develop", "Discuss", "Elaborate", "Estimate", "Formulate", "Happen", "Imagine", 
                    "Improve", "Invent", "Make", "Maximize", "Minimize", "Modify", "Original", "Originate", 
                    "Plan", "Predict", "Propose", "Solution", "Solve", "Suppose", "Test", "Theory"];

const levels = {"k1_level": k1_level,
                "k2_level": k2_level, 
                "k3_level": k3_level,
                "k4_level": k4_level,
                "k5_level": k5_level,
                "k6_level": k6_level
            };

const keywords = ["examples", "for", "of", "detail", "up"];

exports.levels = levels;
exports.keywords = keywords
