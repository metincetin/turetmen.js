/**
 * Metin ÇETİN tarafından 06:26 17/09/2017 tarihinde oluşturuldu.
 * Türetmen JavaScript API
 * MIT
 */

function Turetmen (){
	this.kök = "";
	this.ekSayısı=1;
	this.ünlüHarfler = "aeıioöuü";
	this.ünsüzHarfler = "bcçdfgğhklmnprsştvyz";

	/* ince ve kalın ünsüzler*/
	this.kalınÜnlüler = "aıou";
	this.inceÜnlüler = "eiöü";
	/*yuvarlak ve düz ünsüzler*/
	this.kalınYuvarlakÜnlüler = "ou";
	this.kalınDüzÜnlüler = "aı";
	this.inceYuvarlakÜnlüler = "öü";
	this.inceDüzÜnlüler = "ei";

	/*kurallar*/
	this.sondaBulunmayanlar="bcdfg";
	this.yanYanaBulunanlar = ["nt","rk","lp","lk","rt"];
	this.bulunmayanlar="hşfd"


	/*işlevler*/
	this.SonÜnsüzAl = function(sözcük){
		for (var a=this.sözcük.length-1;a>0;--a){
			if (this.ÜnsüzMü(sözcük[a])){
				return sözcük[a];
			}
		}
		return ';';
	}
	this.SonÜnlüAl = function(sözcük){
		for (var a=sözcük.length-1;a>0;--a){
			if (this.ÜnlüMü(sözcük[a])){
				return sözcük[a];
			}
		}
		return "";
	}
	this.ÜnlüMü = function(sözcük){
		return this.ünlüHarfler.includes(sözcük[sözcük.length-1]);
	}
	this.ÜnsüzMü = function(sözcük){
		return this.ünsüzHarfler.includes(sözcük[sözcük.length-1]);
	}
	this.KalınMı = function(harf){
		return (this.kalınYuvarlakÜnlüler+this.kalınDüzÜnlüler).includes(harf);
	}
	this.İnceMi = function(harf){
		return (this.inceYuvarlakÜnlüler+this.inceDüzÜnlüler).includes(harf);
	}
	this.YuvarlakMı = function(harf){
		return (this.kalınYuvarlakÜnlüler+this.inceYuvarlakÜnlüler).includes(harf);
	}
	this.DüzMü = function(harf){
		return (this.kalınDüzÜnlüler+this.inceDüzÜnlüler).includes(harf);
	}


	this.TümOlasıEkAl = function(sözcük){
		var döndür="";
		//eğer sözcük ünsüz le bitiyorsa
		if(this.ÜnsüzMü(sözcük[sözcük.length-1])){
			if(this.İnceMi(this.SonÜnlüAl(sözcük))){
				// eğer ince ise
				if(this.YuvarlakMı(this.SonÜnlüAl(sözcük))){
					//eğer yuvarlak ise
					döndür = this.inceYuvarlakÜnlüler;
				}else{
					döndür = this.inceDüzÜnlüler;
				}
			}else{
				//eğer kalın ise
				if(this.YuvarlakMı(this.SonÜnlüAl(sözcük))){
					//eğer yuvarlak ise
					döndür = this.kalınYuvarlakÜnlüler;
				}else{
					döndür = this.kalınDüzÜnlüler;
				}

			}
		}//eğer sözcük ünlü ile bitiyorsa
		else{
			döndür=this.ünsüzHarfler;
		}
		for(var i = 0;i<this.yanYanaBulunanlar.length;i++){
			if(this.yanYanaBulunanlar[i][0] == sözcük[sözcük.length-1]){
				döndür+=this.yanYanaBulunanlar[i][1];
			}
		}

		//son çıkarımların yapılması
		for(var i=0;i<this.bulunmayanlar.length;i++){
			döndür = döndür.replace(this.bulunmayanlar[i],"");
		}
		return döndür;
	}

	/*TÜRET*/
	this.Türet=function() {
		var döndür = [];

		var yedekEkler = [];
		döndür.push(this.kök);

		for (var a=0;a<this.ekSayısı;a++){
			for(var b=0;b<döndür.length;b++){
				if(döndür[b].replace(this.kök,"").length<this.ekSayısı) {
					for(var c=0;c<this.TümOlasıEkAl(döndür[b]).length;c++) {
						var ek = this.TümOlasıEkAl(döndür[b])[c];
						if(!this.sondaBulunmayanlar.includes(ek[ek.length-1])){
							döndür.push(döndür[b] + ek);

						}
					}
				}
			}
		}
		return  döndür;
	}
	/*ayarlama*/
	this.KökAyarla =function(kök){
		this.kök=kök.trim();
	}

	this.EkSayısıAyarla = function(ekSayısı){
		this.ekSayısı=ekSayısı;
	}

}
