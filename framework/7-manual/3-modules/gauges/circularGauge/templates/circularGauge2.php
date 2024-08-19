<div class="circularGauge-wrapper status-type-success w-sm-400 h-sm-200">
	<div id="circularGauge2" class="circularGauge"></div>
	<div class="infos-container mg-top-53 mg-left-55 visible">
		<i class="ui icon-size-30 status-icon glow mg-bottom-10 visible order-2">
			<?php echo file_get_contents('3-modules/icons/tanks.svg'); ?>
		</i>
		<div class="ui text-size-10 font-light status-text glow order-3">42.2<small>°c</small></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge2').dxCircularGauge({
	
	geometry: {
		startAngle: -180,
		endAngle: 90,
	},

	scale: {
		startValue: 0,
		endValue: 200,
		tickInterval: 20,
		customTicks: [0, 25, 60, 100, 200],
		tick: {
			color:"RGBA(var(--clr-neutralgray) / 50%",
			length:10,
			visible:true,
			width:1	
		},
		minorTick: {
			color:"RGBA(var(--clr-neutralgray) / 20%",
			length:5,
			visible:true,		
			width:1	
		},
		label: {
			indentFromTick: 5,
			customizeText(arg) {
				return `${arg.valueText}°c`;
			},
		},
		orientation:"outside",
	},

	// MARGIN
	margin: {
		bottom: 10,
		left: 10,
		right: 10,
		top: 10
	},

	// RANGE
	rangeContainer: {
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%",
		offset:20,
		width:5,
		orientation:"outside",
		ranges: [
			{ startValue: 0, endValue: 20, color: 'RGBA(var(--clr-type-danger) / 100%)' },
			{ startValue: 20, endValue: 40, color: 'RGBA(var(--clr-type-warning2) / 100%)' },
			{ startValue: 80, endValue: 160, color: 'RGBA(var(--clr-neutralgray) / 20%)' },
			{ startValue: 160, endValue: 180, color: 'RGBA(var(--clr-type-warning2) / 100%)' },
			{ startValue: 180, endValue: 200, color: 'RGBA(var(--clr-type-danger) / 100%)' },
		],
	},

	// GAUGE
	value: 110,
	valueIndicator: {		
		type: 'rangebar',
		backgroundColor:"RGBA(var(--clr-neutralgray) / 20%)",
		baseValue: 0,
		offset: 30,
		size: 18,
	}, 

	// MIN-MAX ARROWS	
	subvalues: [60, 160],
	subvalueIndicator: {
		offset: 12,
		color: 'RGBA(var(--clr-type-success-rgb) / 100%)',
		width: 12,
	},
	
	redrawOnResize:true,

  });
});
</script>