<div class="circularGauge-wrapper status-type-primary w-sm-300 h-sm-150 range-bg-default">										<!-- <?=$gaugestatus;?> -->
	<div id="circularGauge-range-4" class="circularGauge"></div>		<!-- <?=$gaugeId;?> <?=$gaugeWidth;?> <?=$gaugeHeight;?> -->
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge-range-4').dxCircularGauge({
	
	geometry: {
		startAngle: -180,									/* <?=$startAngle;?> */
		endAngle: 0,										/* <?=$endAngle;?> */
	},

	scale: {
		startValue: 0,										/* <?=$startValue;?> */
		endValue: 200,										/* <?=$endValue;?> */
		tickInterval: 100,									/* <?=$tickInterval;?> */
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
		orientation:"outside",								/* <?=$orientation;?> */
	},

	// GAUGE
	value: 150,												/* <?=$value;?> */
	valueIndicator: {		
		type: 'rangebar',
		baseValue: 0,										/* <?=$valueBase;?> */
		offset: 0,											/* <?=$valueOffset;?> */
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
		backgroundColor:"red!important",					/* <?=$rangeColorDefault;?> */
		offset:25,											/* <?=$rangeOffset;?> */
		width:5,											/* <?=$rangeWidth;?> */
		orientation:"inside",								/* <?=$rangeOrientation;?> */
		ranges: [
			{ startValue: 0, endValue: 20, color: 'RGBA(var(--clr-type-danger) / 100%)' },
			{ startValue: 20, endValue: 40, color: 'RGBA(var(--clr-type-warning2) / 100%)' },
			{ startValue: 160, endValue: 180, color: 'RGBA(var(--clr-type-warning2) / 100%)' },
			{ startValue: 180, endValue: 200, color: 'RGBA(var(--clr-type-danger) / 100%)' },
		],
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