export async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Impossibile caricare ${path}`);
  }
  return response.json();
}

export async function loadProblems() {
  return loadJson("data/problems.json");
}

export async function loadTools() {
  return loadJson("data/tools.json");
}

export function buildToolsIndex(tools) {
  return tools.reduce((acc, tool) => {
    acc[tool.id] = tool;
    return acc;
  }, {});
}
