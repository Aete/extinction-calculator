import * as d3 from "d3";
import populationData from "../../utils/data/seoul_metropolitan_population.json";

export default class PopulationChart {
  private element: HTMLElement;
  private data: any[];
  private width: number;
  private height: number;
  private margin: { top: number; right: number; bottom: number; left: number };
  private svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private xScale: d3.ScaleLinear<number, number>;
  private yScale: d3.ScaleLinear<number, number>;

  constructor(element: HTMLElement) {
    this.element = element;
    this.data = populationData;
    this.width = element.clientWidth;
    this.height = 400;
    this.margin = { top: 20, right: 30, bottom: 30, left: 40 };
    this.svg = d3
      .select(element)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    this.xScale = d3
      .scaleLinear()
      .domain([2026, 2043])
      .range([this.margin.left, this.width - this.margin.right]);

    this.yScale = d3
      .scaleLinear()
      .domain([0, 26600000])
      .range([this.height - this.margin.bottom, this.margin.top]);

    this.drawAxes();
  }

  private drawAxes(): void {
    const xAxis = d3.axisBottom(this.xScale).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(this.yScale).ticks(5);

    this.svg
      .append("g")
      .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      .call(xAxis);

    this.svg
      .append("g")
      .attr("transform", `translate(${this.margin.left},0)`)
      .call(yAxis);
  }
}
