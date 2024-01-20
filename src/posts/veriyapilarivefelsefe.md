Programlamayı ilk öğrenmeye başladığım zamanlarda diziler (arrayler) hakkında kafam oldukça karışıktı. Bana modern teknolojilerde varolan dinamizmi karşılayacak bir yapı gibi gelmiyorlardı. Üzerlerinde değişim yapmak maliyetliydi, aradığımı bulmam için çeşitli yöntemlere başvurmam gerekiyordu ve en önemlisi de  _‘kolay’_ değillerdi.

Çok amatördüm.

Aslında hala öyleyim. Ama tabii ki zamanla olaylara bakış açım değişti.

Yeni bir şeyler öğrenmenin ilk ve en önemli adımı o şeyin temelini anlamaktır. Bunu çoğu zaman atlıyoruz. Kullandığımız bilgisayarlar bir eşya, bir makine, bir kutu. Bundan çok da uzun olmayan bir süre önce karşımızdaki makinaya elektrik sinyalleriyle derdimizi anlatmaya çalışıyorduk. Şimdiyse bize cevaplar veren yapay zekadan bahsediyoruz. Nasıl bu kadar ileri gidebildik? Karşımızdaki koca makineye, bir şeyleri anca basit basit işaretleyerek anlatmaya çalışırken nasıl bu noktaya gelebildik?

O ilk zamanlara dönecek olursak, diziler üzerinde deneme yapmak için gerekli mantığı kuramamamın birkaç sebebi vardı. Mesela şans eseri internette ArrayListlere denk gelmiştim. Dizilerde belli bir index referansına ihtiyaç duyuyorken, içindeki verileri değiştirmek için zahmete giriyorken söz gelimi ArrayListlerle problemlerimi çok kolay çözüyorduk.

O zaman çakmak kullanmak varken neden çakıyla uğraşıyorduk?

Tabii ki çok kısa sürede arrayleri öğrenmenin işin temelini öğrenmek demek olduğunu anladım. Zaten kullandığım ArrayList’lerin kaynak kodlarını incelediğimde de onların bir framework olduğunu, temel arraylerle oluşturulduğunu görmüştüm.

Bunların hepsi tabii ki şu an daha anlaşılır.

Ne var ki olayların perde arkasını bir kez gördükten sonra merakım daha da arttı. Bence bu, programlama öğrenirken atlanılmaması gereken bir nokta. Çünkü yapay zekalara şaşırdığımız bugünlere geliş yolunu aydınlatan  **büyük ve felsefi**  bir düşünce-mantık ışığı var.

Şimdi gelin bir bakış atalım.ß

Bilgisayarca;

veriTipi [] diziAdı = new veriTipi elemanSayısı;

İnsanca;

Bana öğelerimi saklayabileceğim bir yapı lazım. Bu yapıda öğelerimi saklayacağım.

Basitleştirmek adına burada bilgisayardan bir kutu talep ediyoruz. Ama ne dedik, bilgisayarın bunu algılama biçimi kısıtlı. Bize ögelerimizi saklayabileceğimiz bir kutu verirken bazı engellere takılıyoruz. Mesela bu kutuda öğelerimizi ancak belli bir index referansıyla saklayabiliyoruz. 0,1,2,3.. diye indexler var ve sırayla değerlerimizi buraya atıyoruz. Tamam şu anlık gayet makul ve matematiğe uygun. Ancak bilgisayardan bize geri versin diye veri talep ettiğimizde, yapımızın basitliği ortaya çıkacak. Sorun şu ki zaman geçtikçe herhangi bir indexteki veriyi bize getirip vermesini beklerken sıkılıyoruz, bu yapı da ne kadar hantal diyoruz. Bunu demesek bile (ki demeyebiliriz çünkü verimsiz olduğunu seziyle anlıyoruz, işimizi hızlı görse bile ondan sıkılıyoruz) geliştirebilecek bir şeyler olduğunu hissediyoruz.

![image](/public/assets/veriyapilarivefelsefe/array.png)

Peki aşağıdaki kodda ne yapıyoruz?

class LinkedList{

Node head;

class Node{

int data;

Node next;

Node(int d) {

data=d;

}

}

Evet bu basitçe bir linked list. Yani bir liste, ama her değer kendisinden sonra gelen değerin nerde olduğunu biliyor. Yani değerimiz ve bir sonraki değeri tutan referansımız var.

![image](/public/assets/veriyapilarivefelsefe/linkedlist.png)


Yani indexlerle çalışmak yerine her bir değerimiz başka bir değerin referansını tutuyor. (İndex referans sistemini burada da kullanıyoruz diyebiliriz tabii. Ancak burada dikkat çekmek istediğim şey ‘pointer’ mantığı)

![image](/public/assets/veriyapilarivefelsefe/linkedlistarray.png)




Örneğin, yine öğelerimizi tutan bir yapı var ve ilk öğemizin değeri 5, ama aynı zamanda ikinci öğemizin nerde veya ne olduğunu gösteren bir işaretçisi var. Bir veri, diğer verinin nerde olduğunu gösteriyor.

İlginç değil mi?

Üzerine bir düşünün. Çünkü bu, derdimizi bilgisayara daha kolay anlatabilmek için zamanla geliştirdiğimiz mantığı çok iyi gösteren bir özet. Kabaca konuşacak olursak cansız bir nesneye, bir makineye, ona dışarıdan müdahale ederek daha akıllı olmasını sağladık.

Tabii burada bir sürü teknik mantık da var. Örneğin bu yapılar sadece bilgisayarla iyi anlaşmak için değil, zaman ve hafızadan tasarruf etmek için de oluşturuldular. Gerçi çoğu zaman bilgisayarla iyi anlaşmak demek zaman ve hafızadan tasarruf etmek anlamına geliyor. Ama soyut düşüncenin böyle bir yol izleyerek bizi makine diline yakınlaştırabilmesi çok tuhaf.

Evet teknoloji gelişiyor. Çünkü insanoğlu olarak biz, bilgisayarlarla konuşabilmemizi kolaylaştıracak ilginç mantıklar geliştirebiliyoruz.