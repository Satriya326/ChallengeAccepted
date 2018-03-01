

var lirik = 
'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali '

var aku = (lirik.split(/\Aku\b/).length - 1);
var ingin = (lirik.split(/\ingin\b/).length - 1);
var dapat = (lirik.split(/\Dapat\b/).length - 1);

 console.log('there are ' +aku+  ' words of Aku in these lyrics ');
 console.log('there are ' +ingin+  ' words of Aku in these lyrics ');
 console.log('there are ' +dapat+  ' words of Aku in these lyrics ');