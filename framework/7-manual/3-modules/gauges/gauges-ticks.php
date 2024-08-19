<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>

	<article>

		<h2 class="ui h2 mg-med font-bold">Major Ticks</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Scale</span></div>
			</li>
			<li>
				<div class="col-150"><span>tickInterval</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies an interval between major ticks</span></div>
			</li>
			<li>
				<div class="col-150"><span>scaleOrientation</span></div>
				<div class="col-250"><span>{center} | {inside} | {outside}</span></div>
				<div><span>Specifies the orientation of scale ticks (Outside by Default)</span></div>
			</li>
			<li class="thead">
				<div><span>Tick</span></div>
			</li>
			<li>
				<div class="col-150"><span>majorTickVisible</span></div>
				<div class="col-250"><span>{true} | {false}</span></div>
				<div><span>Indicates whether scale major ticks are visible or not (False by Default)</span></div>
			</li>
			<li>
				<div class="col-150"><span>majorTickWidth</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the width of the scale's major ticks</span></div>
			</li>
			<li>
				<div class="col-150"><span>majorTickLength</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the length of the scale's major ticks</span></div>
			</li>
			<li>
				<div class="col-150"><span>majorTickColor</span></div>
				<div class="col-250"><span>{color}</span></div>
				<div><span>Specifies the color of the scale's major ticks. Also affect Minor Ticks color</span></div>
			</li>
			<li>
				<div class="col-150"><span>majorTickOpacity</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the opacity of the scale's major ticks (0 -> 1)</span></div>
			</li>
			<li class="thead">
				<div><span>Value</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueOffset</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the distance between the indicator and the invisible scale line (0 by Default)</span></div>
			</li>
		</ul>



		<div class="ui grid type1 cols-sm-3 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-ticks-1.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Major Ticks</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickVisible</span></div>
							<div><span>true (false by default)</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickWidth</span></div>
							<div><span>1</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickLength</span></div>
							<div><span>10</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickColor</span></div>
							<div><span>RGB(var(--clr-neutralgray)</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickOpacity</span></div>
							<div><span>0.5</span></div>
						</li>
						<li class="thead">
							<div><span>Scale</span></div>
						</li>
						<li>
							<div class="col-150"><span>scaleOrientation</span></div>
							<div><span>outside</span></div>
						</li>
						<li class="thead">
							<div><span>Value</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueOffset</span></div>
							<div><span>15</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1" style="display:none">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-ticks-2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Major Ticks</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickVisible</span></div>
							<div><span>true</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickWidth</span></div>
							<div><span>2</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickLength</span></div>
							<div><span>10</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickColor</span></div>
							<div><span>RGB(var(--ticks-clr-grid))</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickOpacity</span></div>
							<div><span>1</span></div>
						</li>
						<li class="thead">
							<div><span>Scale</span></div>
						</li>
						<li>
							<div class="col-150"><span>scaleOrientation</span></div>
							<div><span>outside</span></div>
						</li>
						<li class="thead">
							<div><span>Value</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueOffset</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-ticks-3.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Major Ticks</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickVisible</span></div>
							<div><span>true</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickWidth</span></div>
							<div><span>1</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickLength</span></div>
							<div><span>7</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickColor</span></div>
							<div><span>RGBA(var(--clr-neutralgray) / 50%</span></div>
						</li>
						<li>
							<div class="col-150"><span>majorTickOpacity</span></div>
							<div><span>0.5</span></div>
						</li>
						<li class="thead">
							<div><span>Scale</span></div>
						</li>
						<li>
							<div class="col-150"><span>scaleOrientation</span></div>
							<div><span>inside</span></div>
						</li>
						<li class="thead">
							<div><span>Value</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueOffset</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>






	<article>

		<h2 class="ui h2 mg-med font-bold">Division</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Scale</span></div>
			</li>
			<li>
				<div class="col-150"><span>scaleDivision</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the minimum distance between two neighboring major ticks in pixels (Must be higher than the tickInterval)</span></div>
			</li>
			<li>
				<div class="col-150"><span>customTicks</span></div>
				<div class="col-250"><span>{values}</span></div>
				<div><span>Specifies an array of custom minor ticks</span></div>
			</li>
		</ul>
		<div class="ui grid type1 cols-sm-3 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-division-1.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Scale</span></div>
						</li>
						<li>
							<div class="col-150"><span>scaleDivision</span></div>
							<div><span>50</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-division-2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Scale</span></div>
						</li>
						<li>
							<div class="col-150"><span>scaleDivision</span></div>
							<div><span>25</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-customTicks.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Scale</span></div>
						</li>
						<li>
							<div class="col-150"><span>customTicks</span></div>
							<div><span>0, 30, 60, 200</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>






	<article>

		<h2 class="ui h2 mg-med font-bold">Menor Ticks</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Menor Tick</span></div>
			</li>
			<li>
				<div class="col-150"><span>menorTickVisible</span></div>
				<div class="col-250"><span>{true} | {false}</span></div>
				<div><span>Indicates whether scale menor ticks are visible or not (False by Default)</span></div>
			</li>
			<li>
				<div class="col-150"><span>menorTickLength</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the length of the scale's menor ticks</span></div>
			</li>
			<li>
				<div class="col-150"><span>menorTickOpacity</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the opacity of the scale's menor ticks (0 -> 1)</span></div>
			</li>
		</ul>
		<div class="ui grid type1 cols-sm-3 gap-lg">


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-menorticks-1.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Menor Ticks</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickVisible</span></div>
							<div><span>true</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickOpacity</span></div>
							<div><span>0.25</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickLength</span></div>
							<div><span>5</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1" style="display:none">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-menorticks-2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Menor Ticks</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickVisible</span></div>
							<div><span>true</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickOpacity</span></div>
							<div><span>0.5</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickLength</span></div>
							<div><span>10</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ticks/circularGauge-menorticks-3.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Menor Ticks</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickVisible</span></div>
							<div><span>true</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickOpacity</span></div>
							<div><span>0.25</span></div>
						</li>
						<li>
							<div class="col-150"><span>menorTickLength</span></div>
							<div><span>4</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>

</section>