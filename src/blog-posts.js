export const getPosts = () => {
  return [
    // {
    //   title: "Framework Mühendisi Değil Yazılım Mühendisi Olmalıyız",
    //   slug: "merhaba",
    //   subtitle: "En iyi yazılım dili diye bir şey yoktur.",
    //   details: require("./posts/merhaba.md").default,
    //   date: "30 Aralık 2019"
    // },
    {
      title: "Yazılım Öğrenmeye Hangi Dil ile Başlamalıyım?",
      slug: "yazilimögrenmeyehangidillebaslamaliyim",
      subtitle: "Hayır, bu düşündüğün kadar önemli bir soru değil.",
      details: require("./posts/yazilimögrenmeyehangidillebaslamaliyim.md").default,
      date: "21 Ocak 2024"
    },
    {
      title: "Veri Yapıları ve Felsefe",
      slug: "veriyapilarivefelsefe",
      subtitle: "Günümüz teknolojisine ilkel bir bakış.",
      details: require("./posts/veriyapilarivefelsefe.md").default,
      date: "30 Kasım 2023"
    }
  ];
};
