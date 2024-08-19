<div class="circularGauge-wrapper status-type-warning2 w-sm-400 h-sm-200 value-bg-hidden">
	<div id="circularGauge4" class="circularGauge"></div>
	<div class="infos-container mg-top-35 visible">
		<i class="ui icon-size-50 status-icon glow mg-bottom-10 visible order-2">
			<?php echo file_get_contents('3-modules/icons/tanks.svg'); ?>
		</i>
		<div class="ui text-size-20 font-light status-text glow order-3">42.2<small>°c</small></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge4').dxCircularGauge({
	
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
			indentFromTick: 11,								/* <?=$labelIndent;?> */
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
			{ startValue: 0, endValue: 20, color: 'RGBA(var(--clr-type-danger) / 30%)' },			/* <?=$ranges2StartValue;?> <?=$ranges2EndValue;?> <?=$ranges2Color;?> <?=$ranges2ColorOpacity;?> */
			{ startValue: 20, endValue: 40, color: 'RGBA(var(--clr-type-warning2) / 30%)' },		/* <?=$ranges3StartValue;?> <?=$ranges3EndValue;?> <?=$ranges3Color;?> <?=$ranges3ColorOpacity;?> */
			{ startValue: 40, endValue: 160, color: 'RGBA(var(--clr-neutralgray) / 20%)' },				/* <?=$ranges1StartValue;?> <?=$ranges1EndValue;?> <?=$ranges1Color;?> <?=$ranges1ColorOpacity;?> */
			{ startValue: 160, endValue: 180, color: 'RGBA(var(--clr-type-warning2) / 30%)' },		/* <?=$ranges2StartValue;?> <?=$ranges2EndValue;?> <?=$ranges2Color;?> <?=$ranges2ColorOpacity;?> */
			{ startValue: 180, endValue: 200, color: 'RGBA(var(--clr-type-danger) / 30%)' },		/* <?=$ranges3StartValue;?> <?=$ranges3EndValue;?> <?=$ranges3Color;?> <?=$ranges3ColorOpacity;?> */
		],
	},

	// GAUGE
	value: 30,												/* <?=$value;?> */
	valueIndicator: {		
		type: 'rangebar',
		backgroundColor:"RGBA(var(--clr-neutralgray) / 0%)",		/* <?=$valueBgColor;?> */
		baseValue: 0,										/* <?=$valueBase;?> */
		offset: 10,											/* <?=$valueOffset;?> */
		size: 18,											/* <?=$valueSize;?> */
	},

	// MIN-MAX ARROWS	
	subvalues: [20, 55, 160, 190],									/* <?=$subvalues;?> */
	subvalueIndicator: {
		offset: 7,											/* <?=$subvaluesOffset;?> */
		color: 'RGBA(var(--color-warning-rgb) / 100%)',		/* <?=$subvaluesColor;?> */
		width: 12,											/* <?=$subvaluesWidth;?> */
		palette: ["var(--value-red)", "var(--value-yellow)", "var(--value-yellow)", "var(--value-red)"],
		length:6,
	},
	
	redrawOnResize:true,

  });
});
</script>