/**
 * Created by andrew on 6/06/2016.
 */

import { Component, OnInit,Input,ElementRef,ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import {
    curveLinear, curveBasisOpen, curveCatmullRomOpen, curveStep, curveCatmullRom, curveBasis,
    curveMonotoneX
} from "d3-shape";

@Component({
    selector: 'reflection-chart',
    templateUrl: 'reflectionChart.component.html',
    styleUrls: ['reflectionChart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ReflectionChartComponent implements OnInit {

    @Input('chartdata') chartdata;
    //chartData = [
// { timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}},
// { timestamp:"2016-11-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
// { timestamp:"2016-11-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
// { timestamp:"2016-11-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}}
// ];

    constructor(private elRef: ElementRef) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.buildChart(this.elRef,this.chartdata);
    }



    public buildChart(elRef: ElementRef,chartdata) {

        var element = elRef.nativeElement;
        var svg = null;

        var data:DatePoint[] = chartdata.map( r =>  {
            var dp = new DatePoint();
            dp.timestamp = new Date(r.timestamp);
            dp.point = r.reflection.point;
            return dp;
        } );

        var width = 1000;//element.parentElement.getBoundingClientRect.width //600; //element.parentElement.clientWidth;
        var height = width/4;
        var margin = {top: 10, right: 10, bottom: 20, left: 60};
        var w = width - margin.left - margin.right;
        var h = height - margin.top - margin.bottom;

        //if(svg) svg.text('');
        var x = d3.scaleTime().range([0, w]);
        var y = d3.scaleLinear().range([h, 0]);

        x.domain(d3.extent(data.map(r => r.timestamp)));
        y.domain([0,100]); // range of reflection points
        //
        var xAxis = d3.axisBottom(x)
            .ticks(8);

        var labels = new Map();
        labels.set(0, "distressed");
        labels.set(50, "going ok");
        labels.set(100, "soaring");

        var yAxis = d3.axisLeft(y)
            .tickValues([0,25,50,75,100])
            .tickFormat(function(d) { return labels.get(d);});

        if(!svg) {
            svg = d3.select("div#container")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 "+1000+" "+4000)
                .classed("svg-content", true);
            // svg = d3.select(element)
            //     .append("svg")
            //     .attr("preserveAspectRatio","xMidYMid meet")
            //     //.attr("width", w + margin.left + margin.right)
            //     //.attr("height", h + margin.top + margin.bottom)
            //     .append("g")
            //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + h + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.selectAll(".point")
            .data(data)
            .enter().append("svg:circle")
            .attr("class","point")
            .attr("r",5)
            .attr("cx",function(d) { return x(d.timestamp); })
            .attr("cy",function(d) { return y(d.point); });

        var hardline = d3.line<DatePoint>()
            .x(function(d) { return x(d.timestamp); })
            .y(function(d) { return y(<number>d.point); })
            .curve(curveMonotoneX); //interpolate("linear");

        var softline = d3.line<DatePoint>()
            .x(function(d) { return x(d.timestamp); })
            .y(function(d) { return y(<number>d.point); })
            .curve(curveBasis);


        var avg = d3.mean(data,function(d) { return y(d.point); });
        var meanline = d3.line<DatePoint>()
            .x(function(d) { return x(d.timestamp); })
            .y(function(d) { return avg; });

        svg.append("path")
            .data([data])
            .attr("class", "hardline")
            .attr("d", hardline);

        svg.append("path")
            .data([data])
            .attr("class", "softline")
            .attr("d", softline);

        svg.append("path")
            .data([data])
            .attr("class", "meanline")
            .attr("d", meanline);

        //.on('click', function(d) { alert("Reflection point "+ d.reflection.point+" at "+ d.timestamp); });

    }

}

export class DatePoint {
    timestamp: Date;
    point: number;
}



/*
export class ReflectionChartComponent implements OnInit {

    @Input('chartdata') chartdata:Reflection[];
    //chartData = { "generalPreposition": 7, "manner": 5, "consider": 21, "outcome": 15, "selfPossessive": 32, "emotive": 4, "temporal": 2, "definite": 23, "generalPronounVerb": 116, "pertains": 90, "selfReflexive": 14, "none": 7, "possible": 8, "compare": 2, "groupPossessive": 6, "anticipate": 6, "othersPossessive": 4 };

    constructor(private elRef: ElementRef) { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.buildChart(this.elRef,this.chartdata);
        //console.log("chartdata is: "+this.chartdata);
    }



    public buildChart(elRef: ElementRef,chartdata:Reflection[]) {
        let element = elRef.nativeElement;
        let reflections = chartdata; //So that we can manipulate if needed
        //var chart = d3.select(element.nativeElement);

        var width = 600 //element.parent()[0].offsetWidth;
        var height = width/4;
        var margin = {top: 10, right: 10, bottom: 20, left: 22};
        var w = width - margin.left - margin.right;
        var h = height - margin.top - margin.bottom;

        let svg = null;
        console.log("reflections: ",reflections);
        if(svg) svg.text('');
        var x = d3.scaleTime().range([0, w]);
        var y = d3.scaleLinear().range([h, 0]);

        x.domain(d3.extent(reflections, function(ref) { return new Date(ref.timestamp); }));
        y.domain([0,100]); // range of reflection points

        var xAxis = d3.axisBottom(x)
            .ticks(d3.timeWeeks); //,(x.domain()[1] - x.domain()[0]) > 15552e6 ? 2 : 1);

        var yAxis = d3.axisLeft(y)
            .tickValues([0,50,100]);
        */
/*
        var hardline = d3.line()
            .x(function(d,i) { return x(new Date(reflections[i].timestamp)); })
            .y(function(d,i) { return y(parseFloat(reflections[i].reflection.point)); })
            .curve(d3.curveLinear);
            //.interpolate("linear");

        var softline = d3.line()
            .x(function(d,i) { return x(new Date(reflections[i].timestamp)); })
            .y(function(d,i) { return y(parseFloat(reflections[i].reflection.point)); })
            .curve(d3.curveBasisOpen);

        var avg = d3.mean(reflections,function(d) { return y(parseFloat(d.reflection.point)); });
        var meanline = d3.line()
            .x(function(d,i) { return x(new Date(reflections[i].timestamp)); })
            .y(function(d) { return avg; })
            .curve(d3.curveLinear);
*/
/*
        if(!svg) {
            svg = d3.select(element[0])
                .append("svg")
                .attr("width", w + margin.left + margin.right)
                .attr("height", h + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + h + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
            */

/*
        svg.append("path")
            .datum(reflections)
            .attr("class", "meanline")
            .attr("d", meanline);

        svg.append("path")
            .datum(reflections)
            .attr("class", "softline")
            .attr("d", softline);

        svg.append("path")
            .datum(reflections)
            .attr("class", "hardline")
            .attr("d", hardline);

        svg.selectAll(".point")
            .data(reflections)
            .enter().append("svg:circle")
            .attr("class","point")
            .attr("r",5)
            .attr("cx",function(d) { return x(new Date(d.timestamp)); })
            .attr("cy",function(d) { return y(parseFloat(d.reflection.point)); })
            .on('click', function(d) { alert("Reflection point "+ d.reflection.point+" at "+ d.timestamp); });
*/
// Everything setup - pass reflections to line as d


        /*
         .on('mouseover', function() { return d3.select(this).attr('r', 8);})
         .on('mouseout',  function() { d3.select(this).attr('r', 4);})
         .on('click', function(d, i) { console.log("d: "+d+" i: "+i );});
         */


