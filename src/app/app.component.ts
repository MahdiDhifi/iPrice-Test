import { Component } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iprice-test';
  charArray = [];
  outputText: string = "";
  CSVStatus: string = "";
  fileGen: boolean = false;
  obj: object;

  ngOnInit(): void {
    this.obj = new Object();
    this.charArray = new Array();
  }

  // Method called when user click generate button to display text with to ways required
  changeText(inputText): void {
    let str: string = "";
    let columnName = "";
    this.obj = new Object();
    this.charArray = new Array();
    for (let i = 0; i < inputText.length; i++) {
      columnName = "Column" + i;
      this.obj[columnName] = inputText.charAt(i);
      if (i % 2 == 1) {
        str += inputText.charAt(i).toUpperCase();
      } else {
        str += inputText.charAt(i).toLowerCase();
      }
    }
    this.charArray.push(this.obj);
    this.outputText = str;
    this.generateCSVFIle(this.charArray);
  }

  //This method will generate CSV file.
  generateCSVFIle(data): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '',
      filename: 'iPrice CSV',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'iPrice CSV',
      useTextFile: false,
      useBom: false,
      useKeysAsHeaders: false,
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(data);
    this.CSVStatus = "CSV created!";
  }

}
