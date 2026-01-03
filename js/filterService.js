function normalize(text) {
  return text.toLowerCase();
}

export function filterProblems(problems, searchQuery = "", category = "all") {
  const query = normalize(searchQuery.trim());

  return problems.filter((problem) => {
    const matchesCategory = category === "all" || problem.category === category;

    const matchesSearch =
      query.length === 0 ||
      normalize(problem.title).includes(query) ||
      normalize(problem.shortDescription).includes(query) ||
      normalize(problem.userProfile).includes(query) ||
      problem.pathTriggers.some((trigger) => normalize(trigger).includes(query));

    return matchesCategory && matchesSearch;
  });
}

export function filterTools(tools, filters = {}, problems = []) {
  const { category = "all", type = "all", cost = "all", language = "all", search = "", problemId = null } = filters;
  const query = normalize(search.trim());

  return tools.filter((tool) => {
    const matchesProblem =
      !problemId ||
      tool.useCases.includes(problemId) ||
      tool.categories.some((cat) => cat === problemId) ||
      problems.find((problem) => problem.id === problemId && problem.recommendedTools.includes(tool.id));

    const matchesCategory = category === "all" || tool.categories.includes(category);
    const matchesType = type === "all" || tool.type === type;
    const matchesCost = cost === "all" || tool.cost === cost;
    const matchesLanguage = language === "all" || tool.languages.includes(language);

    const matchesSearch =
      query.length === 0 ||
      normalize(tool.name).includes(query) ||
      normalize(tool.type).includes(query) ||
      tool.categories.some((cat) => normalize(cat).includes(query));

    return matchesProblem && matchesCategory && matchesType && matchesCost && matchesLanguage && matchesSearch;
  });
}
