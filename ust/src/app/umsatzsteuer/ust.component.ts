import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TripleSet } from './TripleSet';
import { Triple } from './Triple';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-ust',
  templateUrl: './ust.component.html',
  styleUrls: ['./ust.component.css']
})
export class UstComponent implements OnInit {


  tripleSet : TripleSet;


  constructor() { 
    this.tripleSet = new TripleSet(10);
  }

  ngOnInit() {

  }

  onClickNewTripleSet(seed: number){
    console.log(seed);
    if(seed != 0 && seed != NaN)
      this.tripleSet.initFromSeed(seed)
    else
      this.tripleSet = new TripleSet(10);
  }

  public downloadExercise(){
    this.generateDocument(false);
    this.generateDocument(true);
  }

  public generateDocument(withSolution?: boolean){
    let doc = new jsPDF();
    let fontSize = 12
    let xOffset = 15;
    let yOffset = 30;
    let lineHeight = 15;
    let linecount = 1;
    let widthText = 80;
    let widthNetto = 30;
    let widthUSt = 30;
    let widthBrutto = 30;
    let textPadding = lineHeight*0.6;

    doc.setFontSize(fontSize+2);
    doc.text("Berechnen Sie die fehlenden Werte!",xOffset,yOffset-lineHeight);
    doc.setFontSize(fontSize);
    doc.text("(seed: " + this.tripleSet.getSeed() + ")", widthText+widthNetto+widthUSt+xOffset, yOffset-lineHeight);
    //header netto
    doc.rect(widthText+xOffset, yOffset, widthNetto, lineHeight);
    doc.text("   NETTO", widthText+xOffset, yOffset+textPadding);
    //header USt
    doc.rect(widthText+widthNetto+xOffset, yOffset, widthUSt, lineHeight);
    doc.text("   UST", widthText+widthNetto+xOffset, yOffset+textPadding);
    //header Brutto
    doc.rect(widthText+widthNetto+widthUSt+xOffset, yOffset, widthBrutto, lineHeight);
    doc.text("   BRUTTO", widthText+widthNetto+widthUSt+xOffset, yOffset+textPadding);
    for(let triple of this.tripleSet.getTriples()){
      //Text
      doc.text(" " + linecount + ".) " + triple.text, xOffset, yOffset+linecount*lineHeight+textPadding);
      doc.rect(xOffset, yOffset+linecount*lineHeight, widthText, lineHeight);
      //Netto
      doc.text(withSolution?triple.numToString(triple.netto):"", xOffset+widthText+textPadding, yOffset+linecount*lineHeight+textPadding);
      doc.rect(widthText+xOffset, yOffset+linecount*lineHeight, widthNetto, lineHeight);
      //USt
      doc.text(withSolution?triple.numToString(triple.ust):"", xOffset+widthText+widthNetto+textPadding, yOffset+linecount*lineHeight+textPadding);
      doc.rect(widthText+widthNetto+xOffset, yOffset+linecount*lineHeight, widthUSt, lineHeight);
      //Brutto
      doc.text(withSolution?triple.numToString(triple.brutto):"", xOffset+widthText+widthNetto+widthUSt+textPadding, yOffset+linecount*lineHeight+textPadding);
      doc.rect(widthText+widthNetto+widthUSt+xOffset, yOffset+linecount*lineHeight, widthBrutto, lineHeight);
      linecount++;
    }
    let filename = this.tripleSet.getSeed().toString();
    filename += (withSolution)? "_loesung.pdf"  : "_angabe.pdf";
    doc.save(filename);
  }

  @ViewChild('content', { static: true }) content: ElementRef;
  public downloadPDF(){

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');

  }

}
