// DEMO CONTENT — replace with verified firm data (or a Sanity query) before launch.
export type Project={slug:string;name:string;location:string;category:string;year:string;desc:string;long:string;materials:string[];scenes:number[]};
export const projects:Project[]=[
{slug:"the-stone-house",name:"OMKAR - Sai Shelters",location:"",category:"",year:"",desc:"PALAVAKKAM - 2021",long:"4 UNITS OF 2BHK HOUSES WITH A BEACH VIEW",materials:[""],scenes:[1,2]},
{slug:"horizon-residence",name:"PRIME RISE - Sai Shelters x Cobblestone",location:"",category:"",year:"",desc:"ASHOK NAGAR - 2023",long:"8 UNITS OF SPACIOUS 2BHK",materials:[""],scenes:[5,6]},
{slug:"the-courtyard-house",name:"CHANDRU RESIDENCE",location:"",category:"",year:"",desc:"AYAPAKKAM - 2023",long:"SPACIOUS AND ELEGANT TURNKEY INDIVIDUAL HOUSE",materials:[""],scenes:[9,10,11]},
{slug:"meridian-workspace",name:"SAI ESHWAR - Sai Shelters",location:"",category:"",year:"",desc:"KUNDRATHUR - 2016",long:"2 IDENTICAL 3 BHK DUPLEX VILLAS",materials:[""],scenes:[13,14,15]},
{slug:"the-quiet-retreat",name:"SAI EKHA - Sai Shelters",location:"",category:"",year:"",desc:"THIRUVANMIYUR - 2026",long:"6 UNITS OF 2 & 3 BHK HOUSES",materials:[""],scenes:[17,18,19,20]}];
export const categories=["All",...Array.from(new Set(projects.map(p=>p.category)))];
export const services=[
["Apartments","Creating thoughtfully planned homes that combine modern architecture, functional spaces and everyday comfort.","/expertise#architecture"],
["Villas","Crafting distinctive residences that bring together spacious living, refined design and timeless elegance.","/expertise#residential"],
["Interiors","Transforming spaces through thoughtful design, refined details and purposeful aesthetics.","/expertise#commercial"],
["Commercial Spaces","Developing dynamic spaces that inspire business, enhance functionality and create lasting value.","/expertise#interiors"],
["Industrial","Engineered for efficiency. Designed for performance. Built to last.","/expertise#hospitality"],
["Farmland & Plotting","Shaping land. Creating opportunities. Cultivating value.","/expertise#sustainable"]];
export const journal=[
{t:"Designing with a single material",c:"Materials",d:"12 Sep 2026",s:31},
{t:"What a courtyard does for a climate",c:"Sustainability",d:"28 Aug 2026",s:32},
{t:"The case for a slower arrival",c:"Hospitality",d:"3 Aug 2026",s:33}];

export const menu:[string,[string,string][]][]=[
["Projects",[["All Projects","/projects"]]],
["Studio",[["Our Story","/about"],["Expertise","/expertise"]]],
["Connect",[["Contact Us","/contact"],["Start a Project","/contact"]]]];

// Plain directory of ALL projects, grouped by category. Independent of the "projects" array above.
export const directory: {category: string; items: string[]}[] = [
  {
    category: "APARTMENTS",
    items: [
      "Guduvanchery - 8 Units Flats",
      "Urapakkam - 4 Units Flats",
      "Velachery - 6 Units Flats",
      "Ashok Nagar - 4 Units Flats",
      "Palavakkam - 4 Units Flats",
      "Ayyapakkam - 4 Units Flats",
      "Ashok Nagar - 8 Units Flats",
    ],
  },
  {
    category: "VILLAS",
    items: [
      "Urapakkam - 3 Villas",
      "Kundrathur - 2 Villas",
    ],
  },
  {
    category: "INDIVIDUAL HOUSES",
    items: [
      "Virugambakkam - Individual House",
      "Kundrathur - Individual House",
    ],
  },
  {
    category: "PLOTTING & FARMLANDS",
    items: [
      "Tada - Plot Layout (10 Acres)",
    ],
  },
  {
    category: "COMMERCIAL SPACES",
    items: [
      "Porur - Commercial Space",
    ],
  },
];
