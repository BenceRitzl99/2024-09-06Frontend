import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  tomb = ["Judit", "Eszter", 23, 45, true]
  oszlopok = ["nev","kor", "Nem"]
  emberek:any = [
    {nev:"Attila", kor:50, Nem:"Nő"},
    {nev:"Béla", kor:31, Nem:"Nő"},
    {nev:"Dezső", kor:55, Nem:"Férfi"},
    {nev:"András", kor:60, Nem:"Férfi"}
    

  ]
  ujEmber:any ={}

  hozzaAd(){
    this.emberek.push(this.ujEmber)
    this.ujEmber={}
  }


  torles(ember:any){
    console.log(ember)
    this.emberek = this.emberek.filter(
      (e:any) => e!=ember
    )
  }
}
