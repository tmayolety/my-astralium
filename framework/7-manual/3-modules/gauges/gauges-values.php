<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>


	<article>

		<h2 class="ui h2 mg-med font-bold">Value</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Index</span></div>
			</li>
			<li>
				<div class="col-150"><span>value</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the main value on a gauge</span></div>
			</li>
			<li class="thead">
				<div><span>Value Indicator</span></div>
			</li>
			<li>
				<div class="col-150"><span>baseValue</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the base value for the indicator of the rangeBar type.</span></div>
			</li>
		</ul>

		<div class="ui grid type1 cols-sm-3 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/values/circularGauge-values-value.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Index</span></div>
						</li>
						<li>
							<div class="col-150"><span>value</span></div>
							<div><span>100</span></div>
						</li>
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>baseValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/values/circularGauge-values-basevalue.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Index</span></div>
						</li>
						<li>
							<div class="col-150"><span>value</span></div>
							<div><span>100</span></div>
						</li>
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>baseValue</span></div>
							<div><span>40</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</article>




	<article>

		<h2 class="ui h2 mg-med font-bold">Gauge Size</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Value Indicator</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the range bar size for an indicator of the rangeBar type</span></div>
			</li>
		</ul>
		<div class="ui grid type1 cols-sm-3 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/values/circularGauge-values-weight-1.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>5</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/values/circularGauge-values-weight-2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>15</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/values/circularGauge-values-weight-3.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>30</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>





	<article>

		<h2 class="ui h2 mg-med font-bold">Values Background Default Color</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li>
				<div class="col-150"><span>valueBgDefault</span></div>
				<div class="col-250"><span>"true" or "false"</span></div>
				<div><span>If {true}, add the class <label>value-bg-default</label> to the {circularGauge-wrapper}</span></div>
			</li>
		</ul>
		<div class="ui grid type1 cols-sm-3 gap-lg">
			<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/values/circularGauge-values-bg-default.php'); ?></div>
		</div>

	</article>

</section>