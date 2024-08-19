<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>


	<article>

		<h2 class="ui h2 mg-med font-bold">Base</h2>

		<div class="ui grid type2 cols-sm-1 cols-lg-2 gap-xl">

			<div class="ui col sm-1 pad-no">
<pre style="max-height:1500px;margin-bottom:0!important"><code class="language-html"><!--
<div class="circularGauge-wrapper">							// gaugeSize, gaugeStatus //

	<div id="circularGauge" class="circularGauge"></div> 	// gaugeId //

	<div class="infos-container"></div>

</div>
--></code></pre>
			</div>
			<ul class="ui table table-manual size-mini">
				<li>
					<div class="col-200"><span>gaugeSize</span></div>
					<div><span>Use class for <a href="?Section=utilities-width-height" class="link-manual">Width</a> and <a href="?Section=utilities-width-height" class="link-manual">Height</a></span></div>
				</li>
				<li>
					<div class="col-200"><span>gaugeStatus</span></div>
					<div><span>Add the class <label>status-type-{name}</label> or <label>status-fluid-{name}</label> to the {circularGauge-wrapper}</span></div>
				</li>
				<li>
					<div class="col-200"><span>gaugeId</span></div>
					<div><span>Id of the Circular gauge</span></div>
				</li>
			</ul>

		</div>
	</article>






	<article>

		<h2 class="ui h2 mg-med font-bold">Infos</h2>
		<div class="ui grid type2 cols-sm-1 cols-lg-2 gap-xl">
			<div class="ui col sm-1 pad-no">
<pre style="max-height:1500px;margin-bottom:0!important"><code class="language-html"><!--
<div class="circularGauge-wrapper">

	<div id="circularGauge" class="circularGauge"></div>

	<div class="infos-container">				// infoPosition, infoVisible //		
		<i class="ui">							// infoIcon //
			{SVG}								// infoIconName //
		</i>							
		<div class="ui">Lorem ipsum</div>		// infoText1 //
		<div class="ui">Lorem ipsum</div>		// infoText2 //
		<div class="ui">Lorem ipsum</div>		// infoText3 //
		<div class="ui">Lorem ipsum</div>		// infoText4 //
	</div>

</div>
--></code></pre>
			</div>
			<ul class="ui table table-manual size-mini">
				<li>
					<div class="col-200"><span>infoPosition</span></div>
					<div><span>For positioning the {infos-container}, use <a class="link-manual" href="?Section=utilities-margin">Margin</a> class</span></div>
				</li>
				<li>
					<div class="col-150 align-top-left"><span>infoIcon</span></div>
					<div><span>You can define the <a class="link-manual" href="?Section=icons-sizes">Icon-size</a>, <a class="link-manual" href="?Section=utilities-margin">Margin</a>, <a class="link-manual" href="?Section=colors-types">Color</a>, <a class="link-manual" href="?Section=colors-types">Glow</a> and <a class="link-manual" href="?Section=utilities-order">Order</a><br/>If you want the use the same color as the "Status", add the class <label>status-icon</label></span></div>
				</li>
				<li>
					<div class="col-200"><span>infoIconName</span></div>
					<div><span>Name of the icon</span></div>
				</li>
				<li>
					<div class="col-200"><span>infoText1<br/>infoText2<br/>infoText3<br/>infoText4</span></div>
					<div class="align-top-left"><span>You can define the <a class="link-manual" href="?Section=typography-fonts">Font</a>, <a class="link-manual" href="?Section=typography-text">Text-size</a>, <a class="link-manual" href="?Section=utilities-margin">Margin</a>, <a class="link-manual" href="?Section=colors-types">Color</a>, <a class="link-manual" href="?Section=colors-types">Glow</a>, <a class="link-manual" href="?Section=utilities-order">Order</a><br/>If you want the use the same color as the "Status", add the class <label>status-text</label><br/><br/>If the container if empty, it will be hidden automatically</span></div>
				</li>
			</ul>

		</div>
	</article>


	<article>

		<h2 class="ui h2 mg-med font-bold">Options</h2>

		<div class="ui grid type2 cols-sm-1 cols-lg-2 gap-xl">

			<div class="ui col sm-1 pad-no">
<pre style="max-height:1500px;margin-bottom:0!important"><code class="language-html"><!--
<div class="circularGauge-wrapper"></div>	// valueBgDefault //
--></code></pre>
			</div>
			<ul class="ui table table-manual size-mini">
				<li>
					<div class="col-200"><span>valueBgDefault</span></div>
					<div><span>If {true}, add the class <label>value-bg-default</label> to the {circularGauge-wrapper}</span></div>
				</li>
			</ul>
		</div>
	</article>






	<article>
		<h2 class="ui h2 mg-med font-bold">Circular Gauge</h2>
		<div class="ui grid type2 cols-sm-1 cols-lg-2 gap-xl">
			<div class="ui col sm-1 pad-no">
<pre style="max-height:1500px;"><code class="language-html"><!--
$(document).ready(function () {
	$('#circularGauge').dxCircularGauge({

	value: 150,									// value //	
	redrawOnResize: true,
	
	geometry: {
		startAngle: -180,						// startAngle //
		endAngle: 0,							// endAngle //
	},

	valueIndicator: {		
		type: 'rangebar',						// valueType //
		baseValue: 0,							// valueBase //
		offset: 0,								// valueOffset //
		size: 15,								// valueSize //
		indentFromCenter: 0,					// valueIndent //
		spindleSize: 0,							// valueSpindleSize //
		spindleGapSize: 0,						// valueSpindleGapSize //
	},

	scale: {
		startValue: 0,							// startValue //
		endValue: 200,							// endValue //
		orientation:"outside",					// orientation //
		tickInterval: 100,						// tickInterval //
		scaleDivisionFactor: 50,				// scaleDivision //
		customTicks: [0, 10, 25, 200],			// customTicks //
		tick: {
			visible: false,						// majorTickVisible //
			width: 1,							// majorTickWidth //
			length: 10,							// majorTickLength //
			color: "",							// majorTickColor //
			opacity: 0.5,						// majorTickOpacity //
		},
		minorTick: {
			visible: false,						// menorTickVisible //		
			width: 1,
			length: 5,							// menorTickLength //
			opacity: 0.2,						// menorTickOpacity //
		},
		label: {
			visible: false,						// labelVisible //
			indentFromTick: 0,					// labelIndent //
			customizeText(arg) {
				return `${arg.valueText}°c`;	// labelText //
			},
		},
	},

	margin: {									// margin //
		bottom: 10,
		left: 10,
		right: 10,
		top: 10,
	},

	rangeContainer: {
		orientation:"inside",					// rangeOrientation //
		width: 5,								// rangeWidth //
		offset: 25,								// rangeOffset //
		ranges: [
			{
				startValue: 0,					// rangeStartValue //
				endValue: 20,					// rangeEndValue //
				color: 'yellow',				// rangeColor //
			},
		],
	}, 

	subvalues: [],								// subvalues //
	subvalueIndicator: {
		type: 'rangebar',						// subvaluesType //
		width: 12,								// subvaluesWidth //
		size: 0,								// subvaluesSize //
		offset: 2,								// subvaluesOffset //
		indentFromCenter: 0,					// subvalueIndent //
		spindleSize: 0,							// subvalueSpindleSize //
		spindleGapSize: 0,						// subvalueSpindleGapSize //
		palette: [
			"yellow", "red"						// subvaluesPalette //
		],
		backgroundColor: "",					// subvaluesBgColor //
	},

  });
});
--></code></pre>
			</div>

			<div class="ui col sm-1 pad-no">
				
				<ul class="ui table table-manual size-mini mg-bottom-30">
					<li class="thead">
						<div><span>Index</span></div>
					</li>
					<li>
						<div class="col-200"><span>value</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the main value on a gauge</span></div>
					</li>
				</ul>

				<ul class="ui table table-manual size-mini mg-bottom-20">
					<li class="thead">
						<div><span>Geometry</span></div>
					</li>
					<li>
						<div class="col-200"><span>startAngle</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specify the startAngle and endAngle properties of the geometry configuration object to customize the shape of the circular gauge's arc. This arc is drawn from the startAngle to the endAngle as it is illustrated by the following image.</span></div>
					</li>
					<li>
						<div class="col-200"><span>endAngle</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specify the startAngle and endAngle properties of the geometry configuration object to customize the shape of the circular gauge's arc. This arc is drawn from the startAngle to the endAngle as it is illustrated by the following image.</span></div>
					</li>
				</ul>
				
				<ul class="ui table table-manual size-mini mg-bottom-30">
					<li class="thead">
						<div><span>Value Indicator</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueType</span></div>
						<div class="col-250"><span>rangeBar, triangleMarker, triangleNeedle, rectangleNeedle, textCloud</span></div>
						<div><span>Specifies the value indicator type</span></div>
					</li>
					<li>
						<div class="col-200"><span>baseValue</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the base value for the indicator of the rangeBar type.</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueSize</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the range bar size for an indicator of the rangeBar type</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueWidth</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the width of an indicator in pixels</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueLength</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the indicator length</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueOffset</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the distance between the indicator and the invisible scale line (0 by Default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueColor</span></div>
						<div class="col-250"><span>{color}</span></div>
						<div><span>Specifies a color of the indicator.<br/>Color adujsting automatically by Gauge Status color (Empty by Default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueIndent</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the distance between the needle and the center of a gauge for the indicator of a needle-like type</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueSpindleSize</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the spindle's diameter in pixels for the indicator of a needle-like type</span></div>
					</li>
					<li>
						<div class="col-200"><span>valueSpindleGapSize</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the inner diameter in pixels, so that the spindle has the shape of a ring</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-20">
					<li class="thead">
						<div><span>Scale</span></div>
					</li>
					<li>
						<div class="col-200"><span>startValue</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the start value for the scale of the gauge</span></div>
					</li>
					<li>
						<div class="col-200"><span>endValue</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the end value for the scale of the gauge</span></div>
					</li>
					<li>
						<div class="col-200"><span>tickInterval</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies an interval between major ticks</span></div>
					</li>
					<li>
						<div class="col-200"><span>scaleOrientation</span></div>
						<div class="col-250"><span>{center} | {inside} | {outside}</span></div>
						<div><span>Specifies the orientation of scale ticks (Outside by Default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>scaleDivision</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the minimum distance between two neighboring major ticks in pixels (Must be higher than the tickInterval)</span></div>
					</li>
					<li>
						<div class="col-200"><span>customTicks</span></div>
						<div class="col-250"><span>{values}</span></div>
						<div><span>Specifies an array of custom minor ticks</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-20">
					<li class="thead">
						<div><span>Tick</span></div>
					</li>
					<li>
						<div class="col-200"><span>majorTickVisible</span></div>
						<div class="col-250"><span>{true} | {false}</span></div>
						<div><span>Indicates whether scale major ticks are visible or not (False by Default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>majorTickWidth</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the width of the scale's major ticks</span></div>
					</li>
					<li>
						<div class="col-200"><span>majorTickLength</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the length of the scale's major ticks</span></div>
					</li>
					<li>
						<div class="col-200"><span>majorTickColor</span></div>
						<div class="col-250"><span>{color}</span></div>
						<div><span>Specifies the color of the scale's major ticks. Also affect Minor Ticks color</span></div>
					</li>
					<li>
						<div class="col-200"><span>majorTickOpacity</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the opacity of the scale's major ticks (0 -> 1)</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-20">
					<li class="thead">
						<div><span>Menor Tick</span></div>
					</li>
					<li>
						<div class="col-200"><span>menorTickVisible</span></div>
						<div class="col-250"><span>{true} | {false}</span></div>
						<div><span>Indicates whether scale menor ticks are visible or not (False by Default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>menorTickLength</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the length of the scale's menor ticks</span></div>
					</li>
					<li>
						<div class="col-200"><span>menorTickOpacity</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the opacity of the scale's menor ticks (0 -> 1)</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-30">
					<li class="thead">
						<div><span>Label</span></div>
					</li>
					<li>
						<div class="col-200"><span>labelVisible</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies whether or not scale labels are visible on the gauge</span></div>
					</li>
					<li>
						<div class="col-200"><span>labelIndent</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the spacing between scale labels and ticks</span></div>
					</li>
					<li>
						<div class="col-200"><span>labelText</span></div>
						<div class="col-250"><span>{text}</span></div>
						<div><span>Specifies a callback function that returns the text to be displayed in scale labels</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-20">
					<li class="thead">
						<div><span>Margin</span></div>
					</li>
					<li>
						<div class="col-200"><span>margin</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Generates space around the UI component</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-30">
					<li class="thead">
						<div><span>Range Container</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeOrientation</span></div>
						<div class="col-250"><span>{center | inside | outside}</span></div>
						<div><span>Specifies the orientation of the range container in the CircularGauge UI component (outside by Default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeWidth</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the range container's width in pixels (0 by default)</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeOffset</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the offset of the range container from an invisible scale line in pixels</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeColorDefault</span></div>
						<div class="col-250"><span>{false} Status color by Default</span></div>
						<div><span>If {true}, add the class <label>range-bg-default</label> to the {circularGauge-wrapper}</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-30">
					<li class="thead">
						<div><span>Ranges</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeStartValue</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies a start value of a range</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeEndValue</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies an end value of a range</span></div>
					</li>
					<li>
						<div class="col-200"><span>rangeColor</span></div>
						<div class="col-250"><span>{color}</span></div>
						<div><span>Specifies a color of a range</span></div>
					</li>
				</ul>


				<ul class="ui table table-manual size-mini mg-bottom-30">
					<li class="thead">
						<div><span>Subvalues</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvalues</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies a set of subvalues to be designated by the subvalue indicators</span></div>
					</li>
					<li class="thead">
						<div><span>Subvalues Indicator</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesType</span></div>
						<div class="col-250"><span>rangeBar, triangleMarker, triangleNeedle, rectangleNeedle, textCloud</span></div>
						<div><span>Specifies the type of subvalue indicators</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesWidth</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the width of an indicator in pixels</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesLenght</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the indicator length</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesSize</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the range bar size for an indicator of the rangeBar type</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesOffset</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the distance between the indicator and the invisible scale line</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesIndent</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the distance between the needle and the center of a gauge for the indicator of a needle-like type</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesSpindleSize</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the spindle's diameter in pixels for the indicator of a needle-like type</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesSpindleGapSize</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the inner diameter in pixels, so that the spindle has the shape of a ring</span></div>
					</li>
					<li>
						<div class="col-200"><span>subvaluesPalette</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Sets the palette to be used to colorize indicators differently</span></div>
					</li>			
					<li>
						<div class="col-200"><span>subvaluesBgColor</span></div>
						<div class="col-250"><span>{value}</span></div>
						<div><span>Specifies the background color for the indicator of the rangeBar type</span></div>
					</li>
				</ul>
			</div>
	</article>

</section>