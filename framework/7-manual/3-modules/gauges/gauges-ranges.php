<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Ranges</h2>
		<ul class="ui table table-manual size-mini mg-bottom-30">
			<li class="thead">
				<div><span>Range Container</span></div>
			</li>
			<li>
				<div class="col-150"><span>rangeOrientation</span></div>
				<div class="col-250"><span>{center | inside | outside}</span></div>
				<div><span>Specifies the orientation of the range container in the CircularGauge UI component (outside by Default)</span></div>
			</li>
			<li>
				<div class="col-150"><span>rangeWidth</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the range container's width in pixels (0 by default)</span></div>
			</li>
			<li>
				<div class="col-150"><span>rangeOffset</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the offset of the range container from an invisible scale line in pixels</span></div>
			</li>
			<li class="thead">
				<div><span>Ranges</span></div>
			</li>
			<li>
				<div class="col-150"><span>rangeStartValue</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies a start value of a range</span></div>
			</li>
			<li>
				<div class="col-150"><span>rangeEndValue</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies an end value of a range</span></div>
			</li>
			<li>
				<div class="col-150"><span>rangeColor</span></div>
				<div class="col-250"><span>{color}</span></div>
				<div><span>Specifies a color of a range</span></div>
			</li>
		</ul>
	</article>



	<article>

		<h2 class="ui h2 mg-med font-bold">Ranges</h2>

		<div class="ui grid type1 cols-sm-2 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ranges/circularGauge-range-1.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Range Container</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeWidth</span></div>
							<div><span>5</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOffset</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOrientation</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColorDefault</span></div>
							<div><span>false</span></div>
						</li>
						<li class="thead">
							<div><span>Ranges (No Middle range)</span></div>
						</li>
						<li>
							<div class="col-150"><span>-</span></div>
							<div><span>-</span></div>
						</li>
						<li>
							<div class="col-150"><span>-</span></div>
							<div><span>-</span></div>
						</li>
						<li>
							<div class="col-150"><span>-</span></div>
							<div><span>-</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ranges/circularGauge-range-2.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Range Container</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeWidth</span></div>
							<div><span>5</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOffset</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOrientation</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColorDefault</span></div>
							<div><span>false</span></div>
						</li>
						<li class="thead">
							<div><span>Ranges (Middle range transparent)</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeStartValue</span></div>
							<div><span>40</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeEndValue</span></div>
							<div><span>160</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColor</span></div>
							<div><span>RGBA(var(--clr-neutralgray) / 0%</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ranges/circularGauge-range-3.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Range Container</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeWidth</span></div>
							<div><span>5</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOffset</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOrientation</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColorDefault</span></div>
							<div><span>false</span></div>
						</li>
						<li class="thead">
							<div><span>Ranges (Middle range Color)</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeStartValue</span></div>
							<div><span>40</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeEndValue</span></div>
							<div><span>160</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColor</span></div>
							<div><span>RGBA(var(--color-primary-rgb) / 100%)</span></div>
						</li>
					</ul>
				</div>
			</div>

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/ranges/circularGauge-range-4.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li class="thead">
							<div><span>Range Container</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeWidth</span></div>
							<div><span>5</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOffset</span></div>
							<div><span>25</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeOrientation</span></div>
							<div><span>inside</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColorDefault</span></div>
							<div><span>true</span></div>
						</li>
						<li class="thead">
							<div><span>Ranges (Middle range transparent)</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeStartValue</span></div>
							<div><span>40</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeEndValue</span></div>
							<div><span>160</span></div>
						</li>
						<li>
							<div class="col-150"><span>rangeColor</span></div>
							<div><span>RGBA(var(--clr-neutralgray) / 0%</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>

</section>