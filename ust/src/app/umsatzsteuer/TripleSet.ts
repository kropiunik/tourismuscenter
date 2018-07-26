import { Triple}  from './Triple';
import { RandomNumberGenerator } from '../services/RandomNumberGenerator.service'

export class TripleSet{

    private seed: number;
    private triples: Array<Triple>;
    private rng: RandomNumberGenerator;
    private MAXENTRIES = 15;

    constructor(private entries: number){
        if (entries < 1 || entries > this.MAXENTRIES){
            entries = this.MAXENTRIES;
        }
        this.seed = entries * 10000000
        this.seed += Math.floor(Math.random()*100000);
        this.triples = new Array<Triple>();
        this.rng = new RandomNumberGenerator(this.seed);

        for(let i = 0; i < entries; i++){
            this.triples.push(new Triple(this.rng));
        }
    }

    initFromSeed(s: number){
        this.seed = s < 10000000 ? s * 10000000 : s;
        this.entries = Math.floor((this.seed / 10000000 > this.MAXENTRIES) ? this.MAXENTRIES : this.seed/10000000);
        this.triples = new Array();
        this.rng = new RandomNumberGenerator(this.seed);

        for(let i = 0; i < this.entries; i++){
            this.triples.push(new Triple(this.rng));
        }
    }

    getTriples(){
        return this.triples;
    }
    getSeed():number{
        return this.seed;
    }

}