const categories = {
  home: {
    path: "/",
    title: "모든 질문"
  },
  finacc: {
    path: "/finacc",
    title: "회계/금융"
  },
  startup: {
    path: "/startup",
    title: "스타트업"
  },
  tax: {
    path: "/tax",
    title: "TAX"
  },
  ecenpo: {
    path: "/ecenpo",
    title: "ECE/NPO"
  },
  visa: {
    path: "/visa",
    title: "비자/정착"
  },
  hotel: {
    path: "/hotel",
    title: "호텔"
  },
  itani: {
    path: "/itani",
    title: "IT/애니"
  }
};

const categoryList = Object.values(categories);

const categoryTitles = Object.values(categories).map(
  (category) => category.title
);

const categoryKeys = Object.keys(categories);

module.exports = {
  categories,
  categoryList,
  categoryTitles,
  categoryKeys
};
