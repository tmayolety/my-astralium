<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>

	<article>

		<h2 class="ui h2 mg-med font-bold">Types</h2>

		<ul class="ui table table-manual size-mini mg-bottom-30">
			<li class="thead">
				<div><span>Value Indicator</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueType</span></div>
				<div class="col-250"><span>rangeBar, triangleMarker, triangleNeedle, rectangleNeedle, textCloud</span></div>
				<div><span>Specifies the value indicator type</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the range bar size for an indicator of the rangeBar type</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueWidth</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the width of an indicator in pixels</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueLength</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the indicator length</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueOffset</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the distance between the indicator and the invisible scale line (0 by Default)</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueColor</span></div>
				<div class="col-250"><span>{color}</span></div>
				<div><span>Specifies a color of the indicator.<br/>Color adujsting automatically by Gauge Status color (Empty by Default)</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueIndent</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the distance between the needle and the center of a gauge for the indicator of a needle-like type</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueSpindleSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the spindle's diameter in pixels for the indicator of a needle-like type</span></div>
			</li>
			<li>
				<div class="col-150"><span>valueSpindleGapSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the inner diameter in pixels, so that the spindle has the shape of a ring</span></div>
			</li>
		</ul>

		<div class="ui grid type1 cols-sm-2 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Range Bar</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-rangebar.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueType</span></div>
							<div><span>rangebar</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueOffset</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span></span></div>
							<div><span>&nbsp;</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Triangle Marker</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-triangleMarker.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueType</span></div>
							<div><span>triangleMarker</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueWidth</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueLenght</span></div>
							<div><span>10</span></div>
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
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Triangle Needle</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-triangleNeedle.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueType</span></div>
							<div><span>triangleNeedle</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueWidth</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>20</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueIndent</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSpindleSize</span></div>
							<div><span>15</span></div>
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
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Triangle Needle (Type Arrow)</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-triangleNeedle2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueType</span></div>
							<div><span>triangleNeedle</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueWidth</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>20</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueIndent</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSpindleSize</span></div>
							<div><span>15</span></div>
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
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Rectangle Needle</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-rectangleNeedle.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueType</span></div>
							<div><span>rectangleNeedle</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueWidth</span></div>
							<div><span>8</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>20</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueIndent</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSpindleSize</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueOffset</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1" style="display:none;">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Two Color Needle</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-TwoColorNeedle.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Value Indicator</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueType</span></div>
							<div><span>TwoColorNeedle</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueWidth</span></div>
							<div><span>8</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSize</span></div>
							<div><span>20</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueIndent</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueSpindleSize</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-150"><span>valueOffset</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>


			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1" style="display:none;">
				<div class="ui col sm-1 pad-sm"><?php include('7-manual/3-modules/gauges/circularGauge/types/circularGauge-type-textCloud.php'); ?></div>
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

</section>