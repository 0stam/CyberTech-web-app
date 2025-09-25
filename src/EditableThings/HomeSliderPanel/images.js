import image1 from "./mp1.jpg";
import image2 from "./mp2.jpg";
import image3 from "./mp3.jpg";
import image4 from "./mp3.jpg";
// IMPORTANT STUFF, don't place a lot of text
// I also recommend images with high resolution that have height the same as width - it does not need to be a perfect square but with it it'll be more likely for a lot of text to fit
const SlidesJSON = {
  slides: [
    {
      url: image1,
      title: "Detekcja przeszkód dla niewidomych",
      caption:
        "Tworzymy aplikację mobilną pomagającą osobom niewidomym w samodzielnym poruszaniu. Wykrywamy przeszkody, wykorzystując obraz z kamery i samodzielnie wyszkolony model detekcji obiektów, po czym ostrzegamy użytkownika za pomocą komunikatów głosowych. Projekt doceniony m.in. na konferencji REHA i w Laboratorium Tyfloinformatycznym PWr.",
    },
    {
      url: image2,
      title: "Klasyfikacja zdarzeń z czujników powietrza",
      caption:
        "Tworzymy model do wykrywania zdarzeń w pomieszczeniu na podstawie czujników parametrów powietrza. Nasza praca jest elementem inteligentnej klimatyzacji – projektu rozwijanego we współpracy z Katedrą Klimatyzacji, Ogrzewnictwa, Gazownictwa i Ochrony Powietrza.",
    },
    {
      url: image3,
      title: "LLMy wizyjne",
      caption:
        "Badamy zastosowanie LLMów w uzyskiwaniu informacji o zdjęciach. Dzięki współpracy z Wrocławskim Centrum Sieciowo-Superkomputerowym projekt pozwala nauczyć się pracy z superkomputerami i uruchamiania największych otwartych modeli językowych na świecie. Badamy m.in. wpływ fine-tuningu i łączenia LLMów z mniejszymi modelami.",
    },
    {
      url: image4,
      title: "Kurs edukacyjny",
      caption:
        "Badamy zastosowanie LLMów w uzyskiwaniu informacji o zdjęciach. Dzięki współpracy z Wrocławskim Centrum Sieciowo-Superkomputerowym projekt pozwala nauczyć się pracy z superkomputerami i uruchamiania największych otwartych modeli językowych na świecie. Badamy m.in. wpływ fine-tuningu i łączenia LLMów z mniejszymi modelami.",
    },
  ],
};

export default SlidesJSON;
