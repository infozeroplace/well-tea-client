export const menuItems = [
  {
    id: "1",
    title: "tea",
    route: "/collection/tea",
    children: [
      {
        id: "1",
        columnTitle: "Type",
        items: [
          {
            title: "green tea",
            route: "/collection/productType=green tea",
            icon: null,
          },
          {
            title: "white tea",
            route: "/collection/productType=white tea",
            icon: null,
          },
          {
            title: "flowering tea",
            route: "/collection/productType=flowering tea",
            icon: null,
          },
          {
            title: "black tea",
            route: "/collection/productType=black tea",
            icon: null,
          },
          {
            title: "herbal tea",
            route: "/collection/productType=herbal tea",
            icon: null,
          },
          {
            title: "pureh tea",
            route: "/collection/productType=pureh tea",
            icon: null,
          },
          {
            title: "fruit tea",
            route: "/collection/productType=fruit tea",
            icon: null,
          },
          {
            title: "oolong tea",
            route: "/collection/productType=oolong tea",
            icon: null,
          },
          {
            title: "jasmine tea",
            route: "/collection/productType=jasmine tea",
            icon: null,
          },
        ],
      },
      {
        id: "2",
        columnTitle: "flavor",
        items: [
          {
            title: "citrus",
            route: "/collection/flavor=citrus",
            icon: null,
          },
          {
            title: "fruity",
            route: "/collection/flavor=fruity",
            icon: null,
          },
          {
            title: "malty",
            route: "/collection/flavor=malty",
            icon: null,
          },
          {
            title: "roasted",
            route: "/collection/flavor=roasted",
            icon: null,
          },
          {
            title: "floral",
            route: "/collection/flavor=floral",
            icon: null,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "teaware",
    route: "/collection/teaware",
    children: [
      {
        id: "1",
        columnTitle: "All teaware",
        items: [
          { title: "teapots", route: "/type/green-tea", icon: null },
          { title: "cups & mugs", route: "/type/white-tea", icon: null },
          { title: "tea strainers", route: "/type/black-tea", icon: null },
          {
            title: "loose leaf tea essentials",
            route: "/type/herbal-tea",
            icon: null,
          },
        ],
      },
    ],
  },
];

const teaMenus = [
  {
    id: "1",
    columnName: "Type",
    items: [
      { name: "Green Tea", route: "/type/green-tea", icon: null },
      { name: "White Tea", route: "/type/white-tea", icon: null },
      { name: "Black Tea", route: "/type/black-tea", icon: null },
      { name: "Herbal Tea", route: "/type/herbal-tea", icon: null },
      { name: "Pu-erh Tea", route: "/type/pu-erh-tea", icon: null },
      { name: "Oolong Tea", route: "/type/oolong-tea", icon: null },
      { name: "Jasmine Tea", route: "/type/jasmine-tea", icon: null },
      { name: "All Tea", route: "/type/all-tea", icon: null },
    ],
  },
  {
    id: "2",
    columnName: "Flavour",
    items: [
      { name: "Citrus", route: "/flavour/citrus", icon: null },
      { name: "Fruity", route: "/flavour/fruity", icon: null },
      { name: "Malty", route: "/flavour/malty", icon: null },
      { name: "Roasted", route: "/flavour/roasted", icon: null },
      { name: "Floral", route: "/flavour/floral", icon: null },
    ],
  },
  {
    id: "3",
    columnName: "Format",
    items: [
      { name: "Loose Leaf", route: "/format/loose-leaf", icon: null },
      { name: "Tea Bag", route: "/format/tea-bag", icon: null },
      { name: "Tea Caddy", route: "/format/tea-caddy", icon: null },
    ],
  },
  {
    id: "4",
    columnName: "Health",
    items: [
      { name: "Immune System", route: "/health/immune-system", icon: null },
      {
        name: "Digestion & Inflammation",
        route: "/health/digestion-inflammation",
        icon: null,
      },
      {
        name: "Sleep & Relaxation",
        route: "/health/sleep-relaxation",
        icon: null,
      },
      { name: "Energy & Focus", route: "/health/energy-focus", icon: null },
      {
        name: "Metabolism & Weight Loss",
        route: "/health/metabolism-weight-loss",
        icon: null,
      },
    ],
  },
  {
    id: "5",
    columnName: "Discover",
    items: [
      { name: "Caffeine Free", route: "/discover/caffeine-free", icon: null },
      { name: "Organic", route: "/discover/organic", icon: null },
      { name: "Gluten Free", route: "/discover/gluten-free", icon: null },
      { name: "Vegan", route: "/discover/vegan", icon: null },
      { name: "Sustainable", route: "/discover/sustainable", icon: null },
    ],
  },
  {
    id: "6",
    columnName: "Origin",
    items: [
      { name: "China", route: "/origin/china", icon: null },
      { name: "Sri Lanka", route: "/origin/sri-lanka", icon: null },
      { name: "Japan", route: "/origin/japan", icon: null },
      { name: "Bangladesh", route: "/origin/bangladesh", icon: null },
    ],
  },
];
