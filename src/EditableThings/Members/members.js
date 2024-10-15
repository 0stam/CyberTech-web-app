//WYMIARY ZDJĘĆ TO 600X400!!!!!!!!
//, teoretycznie cokolwiek w skali 3x2 pasuje, lepsza jakość wręcz zalecana, wymiary mniejsze od 350x253 NIEZALECANE

// color - 0 to zwykły normalny kolor, 1 - to ramka koloru theme, czyli zielona lub pom, jest to po to by
// podreślić ważnego członka
import image1 from "./600x400.png";
const MembersJSON = {
  members: [
    {
      firstname: "Jacek",
      lastName: "Jeczeń",
      role: "Prezes",
      describtion: "",
      projects: [""],
      image: image1,
      color: 1,
    },
    {
      firstname: "Tomasz",
      lastName: "Janiczek",
      role: "Opiekun koła",
      describtion: "",
      projects: [""],
      image: image1,
      color: 0,
    },
    {
      firstname: "Marek",
      lastName: "Bazan",
      role: "Opiekun koła",
      describtion: "",
      projects: [""],
      image: image1,
      color: 0,
    },
    {
      firstname: "Krzysztof",
      lastName: "Halawa",
      role: "Opiekun wspierający",
      describtion: "",
      projects: [""],
      image: image1,
      color: 0,
    },
    {
      firstname: "Roman",
      lastName: "Skiba",
      role: "Członek",
      describtion: "",
      projects: [""],
      image: image1,
      color: 0,
    },
    {
      firstname: "Mikołaj",
      lastName: "Sadowski",
      role: "Członek",
      describtion: "",
      projects: [""],
      image: image1,
      color: 0,
    },
  ],
};

export default MembersJSON;
