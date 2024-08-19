<div class="circularGauge-wrapper status-type-primary w-sm-300 h-sm-150">										<!-- <?=$gaugestatus;?> -->
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
		type: 'rangebar',
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
	subvalues: [150, 25],										/* <?=$subvalues;?> */
	subvalueIndicator: {
		//type:"triangleMarker",								/* <?=$subValuesType;?> */
		type:"triangleNeedle",
		//type:"rectangleNeedle",
		//type:"rangeBar",
		//type:"textCloud",
		width: 10,											/* <?=$subvaluesWidth;?> */			
		length:0,											/* <?=$subvaluesLenght;?> */
		offset: 25,											/* <?=$subvaluesOffset;?> */
		palette: [
			"var(--value-yellow)",
			"var(--value-red)"
		],

		indentFromCenter:0,
		spindleSize:15,
		spindleGapSize:0,

	},
	
	redrawOnResize: true,

  });
});
</script>