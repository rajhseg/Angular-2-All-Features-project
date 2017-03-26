import { Component, ViewEncapsulation } from '@angular/core';

@Component({    
    template:`<h1>{{name}}</h1>
    <br/>
    <h3 style="color:orange" border-select>Change border on double click the text , directive name: border-select</h3>
    <br/>
    <div>
      <h4 style="color:red">Custom checkbox controls</h4>
      <checkbox type="fancy2" label="Testing"></checkbox>
       <checkbox type="fancy1" label="Testing"></checkbox>
       <checkbox type="dd" label="Testing"></checkbox>
    </div>
    <br/>
    <div>
       <h4 style="color:red">Custom Radiobutton controls</h4>
       <radiobutton id="id1" name="eradio" color="orange" type="fancy1" label="Male"></radiobutton>       
       <radiobutton id="id2" name="eradio" color="red" type="fancy2" label="Female"></radiobutton>
       <radiobutton id="id3" name="eradio" label="Adult"></radiobutton>     
        <br/>
    </div>
    <br />
    <h4 style="color:red">Custom angular class - rgClass</h4>
       <span rgClass="['border','strong']">Testing rgClasses</span>      
       <br/>
    
    <div>
    <br/>
    <h4 style="color:red">Custom Structural Directive - NoOfTimes</h4>
       <div *ntimes="NoOfTimes">
          <span>No Of Times directive</span>
       </div>
    </div>
    `,
    encapsulation:ViewEncapsulation.None,
    styles:[`
    
        .border{
            border:2px solid blue;
        }

        .strong{
            font-weight:bold;
        }

        .light{

        }

    `]
})
export class NewsComponent{
    name:string = "This is a Custom controls and Directive section page";
    NoOfTimes:number = 8;
}