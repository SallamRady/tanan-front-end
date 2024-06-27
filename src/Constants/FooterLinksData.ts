const ListOfFooterLinksData: FooterLinkListItemType[] = [
  {
    title: "Company",
    links: [
      { id: "FL-C_1", text: "Home", path: "/" },
      { id: "FL-C_2", text: "About", path: "/about" },
      { id: "FL-C_3", text: "Achievments", path: "/achievments" },
      { id: "FL-C_4", text: "Services", path: "/services" },
      { id: "FL-C_5", text: "Contact us", path: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        id: "FL-S-1",
        text: "Brand Strategy and Identity",
        path: "/services",
      },
      {
        id: "FL-S-2",
        text: "Digital Marketing Campaigns",
        path: "/services",
      },
      { id: "FL-S-3", text: "Content Creation", path: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { id: "FL-L_1", text: "Privacy Policy", path: "/" },
      { id: "FL-L_2", text: "Terms & Conditions", path: "/" },
    ],
  },
];

export default ListOfFooterLinksData;
export type FooterLinkListItemType = {
  title: string;
  links: {
    id: string;
    text: string;
    path: string;
  }[];
};
