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
    },
    {
      title: "Öğrenme Kavramı Üzerine 3 Prensip",
      slug: "ogrenmekavramiuzerine3prensip",
      subtitle: "Zamanla zor olanın basit olanı yapmak olduğunu anladım.",
      details: require("./posts/ogrenmekavramiuzerine3prensip.md").default,
      date: "5 Mart 2024"
    }
  ];
};
