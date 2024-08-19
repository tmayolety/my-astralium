<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>

	<article>
		<ul class="ui table table-manual size-mini mg-bottom-30">
			<li class="thead">
				<div><span>Subvalues</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvalues</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies a set of subvalues to be designated by the subvalue indicators</span></div>
			</li>
			<li class="thead">
				<div><span>Subvalues Indicator</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesType</span></div>
				<div class="col-250"><span>rangeBar, triangleMarker, triangleNeedle, rectangleNeedle, textCloud</span></div>
				<div><span>Specifies the type of subvalue indicators</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesWidth</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the width of an indicator in pixels</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesLenght</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the indicator length</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the range bar size for an indicator of the rangeBar type</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesOffset</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the distance between the indicator and the invisible scale line</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesIndent</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the distance between the needle and the center of a gauge for the indicator of a needle-like type</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesSpindleSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the spindle's diameter in pixels for the indicator of a needle-like type</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesSpindleGapSize</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the inner diameter in pixels, so that the spindle has the shape of a ring</span></div>
			</li>
			<li>
				<div class="col-200"><span>subvaluesPalette</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Sets the palette to be used to colorize indicators differently</span></div>
			</li>			
			<li>
				<div class="col-200"><span>subvaluesBgColor</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the background color for the indicator of the rangeBar type</span></div>
			</li>
		</ul>
	</article>



	<article>

		<h2 class="ui h2 mg-med font-bold">Sub Values</h2>
		<div class="ui grid type1 cols-sm-2 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/subvalues/circularGauge-subvalues-1.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Subvalues</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvalues</span></div>
							<div><span>150, 25</span></div>
						</li>
						<li class="thead">
							<div><span>Subvalues Indicator</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesType</span></div>
							<div><span>triangleMarker</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesWidth</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesLenght</span></div>
							<div><span>10</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesOffset</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesPalette</span></div>
							<div><span>"var(--value-yellow)", "var(--value-red)"</span></div>
						</li>
						<li>
							<div class="col-200"><span>&nbsp;</span></div>
							<div><span></span></div>
						</li>
						<li>
							<div class="col-200"><span>&nbsp;</span></div>
							<div><span></span></div>
						</li>
						<li>
							<div class="col-200"><span>&nbsp;</span></div>
							<div><span></span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/subvalues/circularGauge-subvalues-2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Subvalues</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvalues</span></div>
							<div><span>150, 25</span></div>
						</li>
						<li class="thead">
							<div><span>Subvalues Indicator</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesType</span></div>
							<div><span>triangleNeedle</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesWidth</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesLenght</span></div>
							<div><span>10</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesOffset</span></div>
							<div><span>25</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesPalette</span></div>
							<div><span>"var(--value-yellow)", "var(--value-red)"</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesIndent</span></div>
							<div><span>95</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesSpindleSize</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesSpindleGapSize</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/subvalues/circularGauge-subvalues-3.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table size-mini in-column">
						<li class="thead">
							<div><span>Subvalues</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvalues</span></div>
							<div><span>150, 25</span></div>
						</li>
						<li class="thead">
							<div><span>Subvalues Indicator</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesType</span></div>
							<div><span>triangleNeedle</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesWidth</span></div>
							<div><span>10</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesLenght</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesOffset</span></div>
							<div><span>25</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesPalette</span></div>
							<div><span>"var(--value-yellow)", "var(--value-red)"</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesIndent</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesSpindleSize</span></div>
							<div><span>15</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesSpindleGapSize</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/subvalues/circularGauge-subvalues-5.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table size-mini in-column">
						<li class="thead">
							<div><span>Subvalues</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvalues</span></div>
							<div><span>150, 25</span></div>
						</li>
						<li class="thead">
							<div><span>Subvalues Indicator</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesType</span></div>
							<div><span>rangeBar</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesSize</span></div>
							<div><span>5</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesOffset</span></div>
							<div><span>25</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesPalette</span></div>
							<div><span>"var(--value-yellow)", "var(--value-red)"</span></div>
						</li>
						<li>
							<div class="col-200"><span>subvaluesBgColor</span></div>
							<div><span>RGBA(var(--clr-neutralgray) / 20%)</span></div>
						</li>
						<li>
							<div class="col-200"><span>&nbsp;</span></div>
							<div><span></span></div>
						</li>
						<li>
							<div class="col-200"><span>&nbsp;</span></div>
							<div><span></span></div>
						</li>
						<li>
							<div class="col-200"><span>&nbsp;</span></div>
							<div><span></span></div>
						</li>
					</ul>
				</div>
			</div>


		</div>


	</article>

</section>