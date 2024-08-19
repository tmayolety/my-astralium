<div class="circularGauge-wrapper status-type-primary w-sm-400 h-sm-200 ">											<!-- <?=$gaugestatus;?> -->
	<div id="circularGauge5" class="circularGauge"></div>					<!-- <?=$gaugeId;?> <?=$gaugeWidth;?> <?=$gaugeHeight;?> -->
	<div class="infos-container mg-top-25 visible">										<!-- <?=$valueMargin;?> -->
		<div class="ui text-size-30 font-lcd color-text-type-secondary-dark order-3">42.2<small>°c</small></div>
	</div>
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge5').dxCircularGauge({
	
	geometry: {
		startAngle: -180,									/* <?=$startAngle;?> */
		endAngle: 0,										/* <?=$endAngle;?> */
	},

	scale: {
		startValue: 0,										/* <?=$startValue;?> */
		endValue: 200,										/* <?=$endValue;?> */
		tickInterval: 20,									/* <?=$tickInterval;?> */
		tick: {
			color:"RGBA(var(--grid--column-bg) / 100%)",	/* <?=$majorTickColor;?> */
			length:18,										/* <?=$majorTickLength;?> */
			visible:true,									/* <?=$majorTickVisible;?> */
			width:1	
		},
		minorTick: {
			color:"RGBA(var(--clr-neutralgray) / 20%",			/* <?=$menorTickColor;?> */
			length:5,										/* <?=$menorTickLength;?> */
			visible:false,									/* <?=$majorTickVisible;?> */		
			width:1	
		},
		label: {
			indentFromTick: 8,								/* <?=$labelIndent;?> */
			customizeText(arg) {
				return `${arg.valueText}°c`;
			},
		},
		orientation:"inside",								/* <?=$scaleOrientation;?> */
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
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%",		/* <?=$rangeColorDefault;?> */
		offset:10,											/* <?=$rangeoffset;?> */
		width:18,											/* <?=$rangeWidth;?> */
		orientation:"inside",								/* <?=$rangeOrientation;?> */
		ranges: [
			{ startValue: 0, endValue: 20, color: 'RGBA(var(--clr-type-danger) / 100%)' },			/* <?=$ranges2StartValue;?> <?=$ranges2EndValue;?> <?=$ranges2Color;?> <?=$ranges2ColorOpacity;?> */
			{ startValue: 20, endValue: 40, color: 'RGBA(var(--clr-type-warning2) / 100%)' },		/* <?=$ranges3StartValue;?> <?=$ranges3EndValue;?> <?=$ranges3Color;?> <?=$ranges3ColorOpacity;?> */
			{ startValue: 40, endValue: 160, color: 'RGBA(var(--clr-type-primary) / 20%)' },				/* <?=$ranges1StartValue;?> <?=$ranges1EndValue;?> <?=$ranges1Color;?> <?=$ranges1ColorOpacity;?> */
			{ startValue: 160, endValue: 180, color: 'RGBA(var(--clr-type-warning2) / 100%)' },		/* <?=$ranges2StartValue;?> <?=$ranges2EndValue;?> <?=$ranges2Color;?> <?=$ranges2ColorOpacity;?> */
			{ startValue: 180, endValue: 200, color: 'RGBA(var(--clr-type-danger) / 100%)' },		/* <?=$ranges3StartValue;?> <?=$ranges3EndValue;?> <?=$ranges3Color;?> <?=$ranges3ColorOpacity;?> */
		],
	},

	// GAUGE
	value: 90,												/* <?=$value;?> */
	valueIndicator: {		
		type: 'triangleNeedle',
		width: 8,											/* <?=$subvaluesWidth;?> */			
		size: 25,											/* <?=$valueSize;?> */
		offset:35,
		indentFromCenter:0,
		spindleGapSize:0,
		spindleSize:15,
	},

	// MIN-MAX ARROWS	
	subvalues: [],									/* <?=$subvalues;?> */
	subvalueIndicator: {
		offset: 20,											/* <?=$subvaluesOffset;?> */
		color: 'RGBA(var(--clr-type-warning) / 100%)',		/* <?=$subvaluesColor;?> */
		width: 0,											/* <?=$subvaluesWidth;?> */
		palette: ["red", "yellow", "yellow", "red"],										
	},
	
	redrawOnResize:true,

  });
});
</script>