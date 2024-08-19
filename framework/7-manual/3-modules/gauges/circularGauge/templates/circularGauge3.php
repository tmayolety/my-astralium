<div class="circularGauge-wrapper status-type-warning2 w-sm-400 h-sm-400 value-bg-default">											<!-- <?=$gaugestatus;?> -->
	<div id="circularGauge3" class="circularGauge"></div>					<!-- <?=$gaugeId;?> <?=$gaugeWidth;?> <?=$gaugeHeight;?> -->
	<div class="infos-container mg-top-35 visible">													<!-- <?=$valueMargin;?> -->
		<i class="ui icon-size-80 status-icon glow mg-bottom-15 visible order-2">
			<?php echo file_get_contents('3-modules/icons/tanks.svg'); ?>
		</i>
		<div class="ui text-size-15 font-light status-text glow glow order-3">42.2<small>°c</small></div>
		<div class="ui text-size-6 font-light order-1 mg-bottom-10">Lorem Ipsum</div>
		<div></div>
		<div></div>
	</div>
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge3').dxCircularGauge({
	
	geometry: {
		startAngle: -140,									/* <?=$startAngle;?> */
		endAngle: -40,										/* <?=$endAngle;?> */
	},

	scale: {
		startValue: 0,										/* <?=$startValue;?> */
		endValue: 200,										/* <?=$endValue;?> */
		tickInterval: 20,									/* <?=$tickInterval;?> */
		tick: {
			color:"RGBA(var(--clr-neutralgray) / 50%",			/* <?=$majorTickColor;?> */
			length:10,										/* <?=$majorTickLength;?> */
			visible:true,									/* <?=$majorTickVisible;?> */
			width:1
		},
		minorTick: {
			color:"RGBA(var(--clr-neutralgray) / 20%",			/* <?=$menorTickColor;?> */
			length:5,										/* <?=$menorTickLength;?> */
			visible:true,									/* <?=$majorTickVisible;?> */		
			width:1	
		},
		label: {
			indentFromTick: 2,								/* <?=$labelIndent;?> */
			customizeText(arg) {
				return `${arg.valueText}`;
			},
		},
		orientation:"outside",								/* <?=$scaleOrientation;?> */
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
		offset:15,											/* <?=$rangeoffset;?> */
		width:18,											/* <?=$rangeWidth;?> */
		orientation:"inside",								/* <?=$rangeOrientation;?> */
		ranges: [
			{ startValue: 0, endValue: 20, color: 'RGBA(var(--clr-type-danger) / 30%)' },			/* <?=$ranges2StartValue;?> <?=$ranges2EndValue;?> <?=$ranges2Color;?> <?=$ranges2ColorOpacity;?> */
			{ startValue: 20, endValue: 40, color: 'RGBA(var(--clr-type-warning2) / 30%)' },		/* <?=$ranges3StartValue;?> <?=$ranges3EndValue;?> <?=$ranges3Color;?> <?=$ranges3ColorOpacity;?> */
			{ startValue: 40, endValue: 160, color: 'RGBA(var(--clr-neutralgray) / 0%)' },				/* <?=$ranges1StartValue;?> <?=$ranges1EndValue;?> <?=$ranges1Color;?> <?=$ranges1ColorOpacity;?> */
			{ startValue: 160, endValue: 180, color: 'RGBA(var(--clr-type-warning2) / 30%)' },		/* <?=$ranges2StartValue;?> <?=$ranges2EndValue;?> <?=$ranges2Color;?> <?=$ranges2ColorOpacity;?> */
			{ startValue: 180, endValue: 200, color: 'RGBA(var(--clr-type-danger) / 30%)' },		/* <?=$ranges3StartValue;?> <?=$ranges3EndValue;?> <?=$ranges3Color;?> <?=$ranges3ColorOpacity;?> */
		],
	},

	// GAUGE
	value: 25,												/* <?=$value;?> */
	valueIndicator: {		
		type: 'rangebar',
		backgroundColor:"RGBA(var(--clr-neutralgray) / 0%)",		/* <?=$valueBgColor;?> */
		baseValue: 0,										/* <?=$valueBase;?> */
		offset: 15,											/* <?=$valueOffset;?> */
		size: 18,											/* <?=$valueSize;?> */
	}, 

	// MIN-MAX ARROWS	
	subvalues: [],											/* <?=$subvalues;?> */
	subvalueIndicator: {
		offset: 12,											/* <?=$subvaluesOffset;?> */
		color: 'RGBA(var(--clr-type-success) / 100%)',		/* <?=$subvaluesColor;?> */
		width: 12,											/* <?=$subvaluesWidth;?> */
	},
	
	redrawOnResize:true,

  });
});
</script>