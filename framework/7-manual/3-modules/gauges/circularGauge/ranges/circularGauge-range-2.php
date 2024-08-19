<div class="circularGauge-wrapper status-type-primary w-sm-300 h-sm-150">
	<div id="circularGauge-range-2" class="circularGauge"></div>
</div>


<script language="JavaScript">
$(document).ready(function () {
	$('#circularGauge-range-2').dxCircularGauge({
	
	geometry: {
		startAngle: -180,
		endAngle: 0,
	},

	scale: {
		startValue: 0,
		endValue: 200,
		tickInterval: 100,
		tick: {
			color:"RGBA(var(--clr-neutralgray) / 50%",
			length:10,
			visible:false,
			width:1	
		},
		minorTick: {
			color:"RGBA(var(--clr-neutralgray) / 20%",
			length:5,
			visible:false,		
			width:1	
		},
		label: {
			indentFromTick: 0,
			visible: false,
			customizeText(arg) {
				return `${arg.valueText}°c`;
			},
		},
		orientation:"outside",
	},

	// GAUGE
	value: 150,
	valueIndicator: {		
		type: 'rangebar',
		baseValue: 0,
		offset: 10,
		size: 15,
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
		backgroundColor:"red",
		offset:0,
		width:5,
		orientation:"outside",
		ranges: [
			{ startValue: 0, endValue: 20, color: 'RGBA(var(--clr-type-danger) / 100%)' },
			{ startValue: 20, endValue: 40, color: 'RGBA(var(--clr-type-warning2) / 100%)' },			
			{ startValue: 40, endValue: 160, color: 'RGBA(var(--color-primary-rgb) / 0%)' },
			{ startValue: 160, endValue: 180, color: 'RGBA(var(--clr-type-warning2) / 100%)' },
			{ startValue: 180, endValue: 200, color: 'RGBA(var(--clr-type-danger) / 100%)' },
		],
	}, 

	// MIN-MAX ARROWS	
	subvalues: [],
	subvalueIndicator: {
		offset: 2,	
		color: 'RGBA(var(--color-success-rgb) / 100%)',
		width: 12,
	},
	
	redrawOnResize: true,

  });
});
</script>