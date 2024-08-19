<div class="circularGauge-wrapper status-type-primary w-sm-300 h-sm-150">										<!-- <?=$gaugestatus;?> -->
	<div id="circularGauge-subvalues-5" class="circularGauge"></div>		<!-- <?=$gaugeId;?> <?=$gaugeWidth;?> <?=$gaugeHeight;?> -->
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge-subvalues-5').dxCircularGauge({
	
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
		baseValue: 0,										/* <?=$valueBase;?> */
		offset: 5,											/* <?=$valueOffset;?> */
		size: 15,											/* <?=$valueSize;?> */		
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%)",		/* <?=$valueBgColor;?> */
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
		width:0,											/* <?=$rangeWidth;?> */
		offset:10,											/* <?=$rangeoffset;?> */
		orientation:"outside",								/* <?=$rangeOrientation;?> */
		ranges: [],
	}, 

	// SUB VALES
	subvalues: [150, 25],									/* <?=$subvalues;?> */
	subvalueIndicator: {
		//type:"triangleMarker",								/* <?=$subValuesType;?> */
		//type:"triangleNeedle",
		//type:"rectangleNeedle",
		type:"rangeBar",
		//type:"textCloud",
		size: 5,											/* <?=$subvaluesSize;?> */	
		offset: 25,											/* <?=$subvaluesOffset;?> */
		palette: [
			"var(--value-yellow)",
			"var(--value-red)"
		],
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%)",

	},
	
	redrawOnResize: true,

  });
});
</script>