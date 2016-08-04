/**
 * Created by Ewelina on 12.07.2016.
 */



$(function(){

    //1.  stworzenie funkcji konstruującej (“klasę”) telefonu
    function Telefon(marka, cena, kolor, model) {
        this.marka = marka;
        this.cena = cena;
        this.kolor = kolor;
        this.model = model;
    }
    //2. za pomocą prototypu, utworzenie dla klasy Telefon metody o nazwie printInfo opisującej telefon za pomocą console.log
    Telefon.prototype.printInfo = function() {
        console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.' + ', model to ' + this.model + '.');
    }

    //3. obiekty, które będą przedstawiać następujące modele telefonów:
    var iPhone6S = new Telefon('Apple', 2250, 'srebrny', 6.1);
    iPhone6S.printInfo();

    var SamsungGalaxyS6 = new Telefon('Samsung', 3600, 'czarny', 5.1);
    SamsungGalaxyS6.printInfo();

    var OnePlusOne = new Telefon('OnePlusOne', 5500, 'biały', 1.1);
    OnePlusOne.printInfo();


});



