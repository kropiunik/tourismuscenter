import { RandomNumberGenerator } from './RandomNumberGenerator';

export class Triple{
    text: string = "";
    netto: number = 0;
    ust: number = 0;
    brutto: number = 0;
    code: number = 0;
    seed: number = -1;
    rng: RandomNumberGenerator;

    constructor(randomNumberGenerator: RandomNumberGenerator) {
        this.rng = randomNumberGenerator;
        let choice = this.rng.nextRange(1,4);        
        
        if(choice == 1){
            this.code = 10;
        }else if(choice == 2){
            this.code = 13;
        }else{
            this.code = 20;
        }

        choice = this.rng.nextRange(1,4); 

        switch (choice){
            case 1: {
                this.initBrutto(); break;
            }
            case 2: {
                this.initNetto(); break;
            }
            case 3: {
                this.initUSt(); break;
            }
        }
       
    }



    initBrutto(){ 
        this.brutto = this.roundTo2(this.rng.nextFloat() * 5000) + 1;
        this.netto = this.roundTo2(this.brutto / (100 + this.code)  * 100);
        this.ust = this.roundTo2(this.brutto - this.netto);

        let choice = this.rng.nextRange(1,5);   
     
        switch (choice){
            case 1: {
                this.text = this.numToString(this.brutto) + " inkl. " + this.code + " % USt"; break;
            }
            case 2: {
                this.text = "Brutto: " + this.numToString(this.brutto) + " (" + this.code + " % USt)"; break;
            }
            case 3: {
                this.text = this.numToString(this.brutto) + " brutto (" + this.code + " % USt)"; break
            }
            case 4: {
                this.text = this.numToString(this.brutto) + " = (" + (this.code+100) + " % USt)"; break
            }
        }
    }

    initNetto(){
        this.netto = this.roundTo2(this.rng.nextFloat() * 5000) + 1;
        this.brutto = this.roundTo2(this.netto / 100 * (100 + this.code));
        this.ust = this.roundTo2(this.brutto - this.netto);
        
        let choice = this.rng.nextRange(1,5);
    
        switch (choice){
            case 1: {
                this.text = "Netto: " + this.numToString(this.netto) + " exkl. " + this.code + " % USt";  break;
            }
            case 2: {
                this.text = this.numToString(this.netto) + " (exkl. " + this.code + " %)"; break;
            }
            case 3: {
                this.text =  this.numToString(this.netto) + " + " + this.code + " % USt";  break;
            }
            case 4: {
                this.text = this.numToString(this.netto) + " netto (" + this.code + " % USt)";  break;

            }
        }
    }

    initUSt(){
        this.ust = this.roundTo2(this.rng.nextFloat() * 5000) + 1;
        this.netto = this.roundTo2(this.ust / ( this.code)  * 100);
        this.brutto = this.roundTo2(this.ust  + this.netto);
       
        let choice = this.rng.nextRange(1,5);

        switch (choice){
            case 1: {
                this.text = "Umsatzsteuer = " + this.numToString(this.ust) + " = " + this.code + " %";  break;
            }
            case 2: {
                this.text = this.numToString(this.ust) + " sind " + this.code + " % USt"; break;
            }
            case 3: {
                this.text =  "Netto: "+ this.numToString(this.netto) + " Brutto: " + this.numToString(this.brutto);  break;
            }
            case 4: {
                this.text =  "Brutto: "+ this.numToString(this.brutto) + " USt: " + this.numToString(this.ust);  break;

            }
        }
    }

    roundTo2(num: number){
        let n = Math.floor(num * 1000);
        let r = n % 10;
        n = Math.floor(n / 10);
        if(r >= 5){
            n++;
        }
        n = n / 100.00;
        return n;
    }

     numToString(num : number) : string {
        let ret = String(num);
        ret = ret.replace(".", ",");
        let splitted = ret.split(",");
        //insert kilo seperator e.g.: 1000 -> 1.000
        let count = 1;
        for(let i = splitted[0].length-1; i > 0; i--){
            if(count == 3){
                ret = ret.slice(0, i) + "." + ret.slice(i);
                count = 0;
            }else{
                count ++;
            }
        }
        

        return ret;
    }

}