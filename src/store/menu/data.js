const data = [
  {
    id: "t1",
    name: "ShangHai",
    link: null,
    children: [
      {
        id: "p1",
        name: "项目",
        children: [
          { id: 3, name: "SSO", link: "/projects" },
          { id: 4, name: "Docker", link: "/projects" }
        ]
      },
      {
        id: "t1",
        name: "团队成员",
        link: "/employees",
        member: ["1", "2", "3"]
      }
    ]
  },
  {
    id: 6,
    name: "BeiJing",
    link: null,
    children: [
      {
        id: 7,
        name: "项目",
        children: [
          { id: 8, name: "SSO", link: "/projects" },
          { id: 9, name: "Docker", link: "/projects" },
          { id: 9, name: "Docker", link: "/projects" }
        ]
      },
      {
        id: 10,
        name: "团队成员",
        link: "/employees",
        member: ["1", "2", "3"]
      }
    ]
  }
];

export default data;
