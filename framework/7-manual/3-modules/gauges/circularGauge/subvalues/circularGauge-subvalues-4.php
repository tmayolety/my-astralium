<div class="circularGauge-wrapper status-type-primary w-sm-450 h-sm-300">										<!-- <?=$gaugestatus;?> -->
	<div id="circularGauge-subvalues-3" class="circularGauge"></div>		<!-- <?=$gaugeId;?> <?=$gaugeWidth;?> <?=$gaugeHeight;?> -->
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge-subvalues-3').dxCircularGauge({
	
	geometry: {
		startAngle: -180,									/* <?=$startAngle;?> */
		endAngle: 0,										/* <?=$endAngle;?> */
	},

	scale: {
		startValue: 0,										/* <?=$startValue;?> */
		endValue: 200,										/* <?=$endValue;?> */
		tickInterval: 20,									/* <?=$tickInterval;?> */
		tick: {
			color:"RGBA(var(--clr-neutralgray) / 50%",			/* <?=$majorTickColor;?> */
			length:10,										/* <?=$majorTickLength;?> */
			visible:false,									/* <?=$majorTickVisible;?> */
			width:1	
		},
		minorTick: {
			color:"RGBA(var(--clr-neutralgray) / 20%",			/* <?=$menorTickColor;?> */
			length:5,										/* <?=$menorTickLength;?> */
			visible:false,									/* <?=$majorTickVisible;?> */		
			width:1	
		},
		label: {
			indentFromTick: 0,								/* <?=$labelIndent;?> */
			visible: false,									/* <?=$labelVisible;?> */
			customizeText(arg) {
				return `${arg.valueText}°c`;
			},
		},
		orientation:"outside",								/* <?=$scaleOrientation;?> */
	},

	// GAUGE
	value: 100,												/* <?=$value;?> */
	valueIndicator: {		
		//type: 'rangebar',									/* <?=$valuesType;?> */
		type:"triangleMarker",
		//type:"triangleNeedle",
		//type:"rectangleNeedle",
		//type:"textCloud",
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%)",		/* <?=$valueBgColor;?> */
		baseValue: 0,										/* <?=$valueBase;?> */
		offset: 5,											/* <?=$valueOffset;?> */
		size: 15,											/* <?=$valueSize;?> */
	},

	// MARGIN
	margin: {												/* <?=$margin;?> */
		bottom: 10,
		left: 10,
		right: 10,
		top: 10
	},

	// RANGE
	rangeContainer: {
		backgroundColor:"",									/* <?=$rangeColorDefault;?> */
		offset:10,											/* <?=$rangeoffset;?> */
		width:0,											/* <?=$rangeWidth;?> */
		orientation:"outside",								/* <?=$rangeOrientation;?> */
		ranges: [],
	}, 

	// SUB VALES
	subvalues: [100, 150],									/* <?=$subValues;?> */
	subvalueIndicator: {
		//type:"triangleMarker",								/* <?=$subValuesType;?> */
		//type:"triangleNeedle",
		//type:"rectangleNeedle",
		type:"rangeBar",
		//type:"textCloud",
		width: 15,											/* <?=$subvaluesWidth;?> */			
		length:5,											/* <?=$subvaluesLenght;?> */
		offset: 30,											/* <?=$subvaluesOffset;?> */

		color:"purple",
		palette: [
			"var(--value-yellow)",
			"var(--value-red)"
		],

		color: 'RGBA(var(--color-success-rgb) / 100%)!important',		/* <?=$subvaluesColor;?> */
		indentFromCenter:0,
		spindleGapSize:0,
		spindleSize:15,


		baseValue:50,


		horizontalOrientation:"right",
			
		verticalOrientation:"right",

		size:7,									/* rangeBar*/
		backgroundColor:"green",					/* rangeBar*/
		arrowLength:5,
		secondColor:"purple",
		secondFraction:0.4,
		beginAdaptingAtRadius:50,


		text: {
			customizeText:"text",
			font: {},
			format:undefined,
			indent:0
		},

	},
	
	redrawOnResize: true,

  });
});
</script>