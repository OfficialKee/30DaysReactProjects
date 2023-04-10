import React from "react";
// import data from "./data";

function BarGroup(props){


    let barPadding = 2;
    let barColour = "#348AA7";
    let widthScale = d => d * 10;
    

    let width = widthScale(props.d.population);
    let yMid = props.barHeight * .5;




    return (
        <g className="bar-group">
            <text className="name-label" x='-6' y={yMid} alignmentBaseline="middle">{props.d.country}</text>

            <rect y={barPadding * .5} width={width} height={props.barHeight - barPadding} fill={barColour} />

            <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle">{props.d.population}</text>
        </g>
    )
}



class BarChart extends React.Component {
    state = {
        data: [
            { country: 'World', population: 70 },
            { country: 'China', population: 30 },
            { country: 'India', population: 27 },
            { country: 'United States of America', population:15 },
            { country: 'Indonesia', population: 10 },
            { country: 'Brazil', population: 8 },
            { country: 'Pakistan', population: 8},
            { country: 'Nigeria', population: 8},
            { country: 'Bangladesh', population: 8 },
            { country: 'Russian Federation', population: 8 },
            { country: 'Japan', population: 8},
        ]
      }


render(){
    let barHeight = 30;

    let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
    <BarGroup d={d} barHeight={barHeight} />


</g>)

    return <svg width={800} height={300}>
        <g className="chart" transform="translate(100,60)">
         {barGroups}
        </g>
    </svg>
}

}



export default BarChart;