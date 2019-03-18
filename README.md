# turetmen.js
Türkçe sözcük türetme JavaScript kütüphanesi.

## Kurulum
Repo'yu indirip proje ana dizinine atın.
```html
<script src="src/"turetmen.js"></script>
                              
```

## Kullanım
`Turetmen` nesnesi oluşturun
```js
var turetmen = new Turetmen();
````

Kök girin

```js
turetmen.KökAyarla(kök);
```

Sözcükleri türetmeden önce, ek sayısını belirleyebilirsiniz. Varsayılan olarak 1 alınacaktır.
```js
turetmen.EkSayısıAyarla(sayı);
```

Son olarak `Turetmen.Türet()` işlevi çağırarak sözcükler türetilir. Sözcük dizisi döndürülecektir

```js
var sözcükler = turetmen.Türet();
```

## Lisans
[MIT](https://github.com/metincetin/turetmen.js/blob/master/LICENSE)
