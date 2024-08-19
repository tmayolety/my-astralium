<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Shapes</h2>
		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Geometry</span></div>
			</li>
			<li>
				<div class="col-150"><span>startAngle</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specify the startAngle and endAngle properties of the geometry configuration object to customize the shape of the circular gauge's arc. This arc is drawn from the startAngle to the endAngle as it is illustrated by the following image.</span></div>
			</li>
			<li>
				<div class="col-150"><span>endAngle</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specify the startAngle and endAngle properties of the geometry configuration object to customize the shape of the circular gauge's arc. This arc is drawn from the startAngle to the endAngle as it is illustrated by the following image.</span></div>
			</li>
			<li>
				<div class="align-center"><img src="7-manual/3-modules/gauges/circularGauge/shapes/geometry.png" style="padding:20px 0" /></div>
			</li>
		</ul>

		<ul class="ui table table-manual size-mini mg-bottom-20">
			<li class="thead">
				<div><span>Scale</span></div>
			</li>
			<li>
				<div class="col-150"><span>startValue</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the start value for the scale of the gauge</span></div>
			</li>
			<li>
				<div class="col-150"><span>endValue</span></div>
				<div class="col-250"><span>{value}</span></div>
				<div><span>Specifies the end value for the scale of the gauge</span></div>
			</li>
		</ul>
	</article>




	<article>
		<h4 class="ui h4 mg-med font-semibold">Full</h4>

		<div class="ui grid type1 cols-sm-2 gap-lg">

			<!-- GAUGE CIRCLE FORWARD -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-300"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/full/circularGauge-full-fw.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE CIRCLE -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-300"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/full/circularGauge-full-bk.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>






	<article>

		<h4 class="ui h4 mg-med font-semibold">Semi</h4>		
		<div class="ui grid type1 cols-sm-4 gap-lg">

			<!-- GAUGE SEMI FORWARD -->
			<div class="ui col sm-2 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/semi/circularGauge-semi-lr.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE SEMI BACKWARD -->
			<div class="ui col sm-2 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/semi/circularGauge-semi-rl.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>



	<article>

		<h4 class="ui h4 mg-med font-semibold">Quater</h4>
		<div class="ui grid type1 cols-sm-4 gap-lg">

			<!-- GAUGE QUARTER TOP LEFT FORWARD -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Top Left Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-lt.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>90</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER TOP RIGHT -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Top Right Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-tr.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-270</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER BOTTOM RIGHT -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Bottom Right Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-rb.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>-90</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER BOTTOM LEFT -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Bottom Left Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-bl.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-90</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>180</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER TOP LEFT  -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Top Left Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-tl.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>90</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER RIGHT to TOP -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Top Right Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-rt.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-270</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER BOTTOM RIGHT -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Bottom Right Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-br.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>-90</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE QUARTER BOTTOM LEFT  -->
			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Bottom Left Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/quarter/circularGauge-quarter-lb.php'); ?></div>
				<div class="ui col sm-1 pad-no bg-no">
					<ul class="ui table table-manual in-column size-mini">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-90</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>180</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	
	</article>






	<article>

		<h4 class="ui h4 mg-med font-semibold">Side</h4>		
		<div class="ui grid type1 cols-sm-4 gap-lg">

			<!-- GAUGE SIDE LEFT FORWARD -->
			<div class="ui col sm-2 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Side Left Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-260"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/side/circularGauge-side-left-fw.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-140</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>140</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE SIDE LEFT FORWARD -->
			<div class="ui col sm-2 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Side Left Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-260"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/side/circularGauge-side-left-bk.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-140</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>140</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE SIDE RIGHT BACKWARD -->
			<div class="ui col sm-2 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Side Right Forward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-260"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/side/circularGauge-side-right-fw.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-310</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>-40</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

			<!-- GAUGE SIDE RIGHT BACKWARD -->
			<div class="ui col sm-2 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center"><h4 class="ui h4">Side Right Backward</h4></div>
				<div class="ui col sm-1 pad-sm align-middle-center h-260"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/side/circularGauge-side-right-bk.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-310</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>-40</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>0</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Bi-Directional</h4>

		<div class="ui grid type1 cols-sm-3 gap-lg">

			<div class="ui col sm-1 gap-no
						grid type1 cols-sm-1">
				<div class="ui col sm-1 pad-sm align-middle-center h-180"><?php include('7-manual/3-modules/gauges/circularGauge/shapes/bidirectional/circularGauge-bidirectional.php'); ?></div>
				<div class="ui col sm-1 pad-no">
					<ul class="ui table table-manual size-mini in-column">
						<li>
							<div class="col-150"><span>startAngle</span></div>
							<div><span>-180</span></div>
						</li>
						<li>
							<div class="col-150"><span>endAngle</span></div>
							<div><span>0</span></div>
						</li>
						<li>
							<div class="col-150"><span>startValue</span></div>
							<div><span>-200</span></div>
						</li>
						<li>
							<div class="col-150"><span>endValue</span></div>
							<div><span>200</span></div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</article>

</section>