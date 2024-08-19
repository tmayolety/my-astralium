<div class="circularGauge-wrapper status-type-primary w-sm-300 h-sm-150">										<!-- <?=$gaugestatus;?> -->
	<div id="circularGauge-label-interval-3" class="circularGauge"></div>		<!-- <?=$gaugeId;?> <?=$gaugeWidth;?> <?=$gaugeHeight;?> -->
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge-label-interval-3').dxCircularGauge({
	
	geometry: {
		startAngle: -180,									/* <?=$startAngle;?> */
		endAngle: 0,										/* <?=$endAngle;?> */
	},

	scale: {
		startValue: 0,										/* <?=$startValue;?> */
		endValue: 200,										/* <?=$endValue;?> */
		tickInterval: 25,									/* <?=$tickInterval;?> */
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
			indentFromTick: 20,								/* <?=$labelIndent;?> */
			visible: true,									/* <?=$labelVisible;?> */
			customizeText(arg) {
				return `${arg.valueText}°c`;
			},
		},
		orientation:"outside",								/* <?=$scaleOrientation;?> */
	},

	// GAUGE
	value: 150,												/* <?=$value;?> */
	valueIndicator: {		
		type: 'rangebar',
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%)",		/* <?=$valueBgColor;?> */
		baseValue: 0,										/* <?=$valueBase;?> */
		offset: 0,											/* <?=$valueOffset;?> */
		size: 10,											/* <?=$valueSize;?> */
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

	// MIN-MAX ARROWS	
	subvalues: [],											/* <?=$subvalues;?> */
	subvalueIndicator: {
		offset: 2,											/* <?=$subvaluesOffset;?> */
		color: 'RGBA(var(--color-success-rgb) / 100%)',		/* <?=$subvaluesColor;?> */
		width: 12,											/* <?=$subvaluesWidth;?> */
	},
	
	redrawOnResize: true,

  });
});
</script>