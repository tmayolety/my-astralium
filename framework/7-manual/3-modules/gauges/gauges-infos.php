<section>

	<?php include('7-manual/3-modules/gauges/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Infos</h2>
		<ul class="ui table table-manual size-mini">
			<li>
				<div class="col-150"><span>infoPosition</span></div>
				<div><span>For positioning the {infos-container}, use <a class="link-manual" href="?Section=utilities-margin">Margin</a> class</span></div>
			</li>
			<li>
				<div class="col-150"><span>infoVisible</span></div>
				<div><span>Add the class <label>visible</label> to the {infos-container} (Hidden by Default)</span></div>
			</li>
			<li>
				<div class="col-150 align-top-left"><span>infoIcon</span></div>
				<div><span>You can define the <a class="link-manual" href="?Section=icons-sizes">Icon-size</a>, <a class="link-manual" href="?Section=colors-types">Color</a><br/>If you want the use the same color as the "Status", add the class <label>status-icon</label></span></div>
			</li>
			<li>
				<div class="col-150"><span>infoIconName</span></div>
				<div><span>Name of the icon</span></div>
			</li>
			<li>
				<div class="col-150"><span>infoText1<br/>infoText2<br/>infoText3<br/>infoText4</span></div>
				<div class="align-top-left"><span>You can define the <a class="link-manual" href="?Section=typography-fonts">Font</a>, <a class="link-manual" href="?Section=typography-text">Text-size</a>, <a class="link-manual" href="?Section=utilities-margin">Margin</a>, <a class="link-manual" href="?Section=colors-types">Color</a>, <a class="link-manual" href="?Section=colors-types">Glow</a>, <a class="link-manual" href="?Section=utilities-order">Order</a><br/>If you want the use the same color as the "Status", add the class <label>status-text</label><br/><br/>If the container if empty, it will be hidden automatically</span></div>
			</li>
		</ul>
	</article>

	<!-- TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>status-text</label> <label>glow</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- TEXT + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>mg-bottom-5</label> <label>status-text</label> <label>glow</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>i10nfoText2</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- TEXT + TEXT + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Text + Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t-t-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>mg-bottom-5</label> <label>status-text</label> <label>glow</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label> <label>mg-bottom-5</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- TEXT + TEXT + TEXT + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Text + Text + Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t-t-t-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>mg-bottom-5</label> <label>status-text</label> <label>glow</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label> <label>mg-bottom-5</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label> <label>mg-bottom-5</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span><label>text-size-6</label> <label>font-light</label></span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- ICON -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Icon</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-i.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span><label>ui</label> <label>icon-size-45</label> <label>status-icon</label> <label>glow</label> <label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>{ SVG }</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- ICON + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Icon + Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-i-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span><label>ui</label> <label>icon-size-45</label> <label>status-icon</label> <label>glow</label> <label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>{ SVG }</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>status-text</label> <label>glow</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- TEXT + ICON -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Icon</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t-i.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span><label>icon-size-45</label> <label>status-icon</label> <label>glow</label> <label>order-2</label> <label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>{ SVG }</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>status-text</label> <label>glow</label> <label>order-1</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- ICON + TEXT + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Icon + Text + Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-i-t-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span><label>ui</label> <label>icon-size-45</label> <label>status-icon</label> <label>glow</label> <label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>{ SVG }</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>status-text</label> <label>glow</label> <label>mg-bottom-5</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- TEXT + ICON + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Icon + Text</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t-i-t.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span><label>ui</label> <label>icon-size-45</label> <label>status-icon</label> <label>mg-bottom-5</label> <label>glow</label> <label>order-2</label> <label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>{ SVG }</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-20</label> <label>font-light</label> <label>status-text</label> <label>glow</label> <label>order-3</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span><label>text-size-10</label> <label>font-light</label> <label>mg-bottom-5</label> <label>order-1</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>


	<!-- TEXT + ICON + TEXT -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Text + Icon</h4>
		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 pad-no
						grid cols-sm-4 gap-med">
				<div class="ui col sm-1 pad-xl align-middle-center h-196">
					<div class="circularGauge-wrapper status-type-primary">
						<div class="infos-container relative-pos visible">
							<?php include('7-manual/3-modules/gauges/circularGauge/infos/infos-type-t-t-i.php'); ?>
						</div>
					</div>
				</div>
				<div class="ui col sm-3 pad-no bg-no">
					<ul class="ui table table-manual size-mini">
						<li>
							<div class="col-150"><span>infoVisible</span></div>
							<div><span><label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIcon</span></div>
							<div><span><label>ui</label> <label>icon-size-45</label> <label>status-icon</label> <label>glow</label> <label>visible</label> <label>order-3</label> <label>visible</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoIconName</span></div>
							<div><span>{ SVG }</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText1</span></div>
							<div><span><label>text-size-12</label> <label>font-light</label> <label>status-text</label> <label>mg-bottom-5</label> <label>glow</label> <label>order-1</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText2</span></div>
							<div><span><label>text-size-5</label> <label>font-light</label> <label>mg-bottom-5</label> <label>order-2</label></span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText3</span></div>
							<div><span>Empty</span></div>
						</li>
						<li>
							<div class="col-150"><span>infoText4</span></div>
							<div><span>Empty</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</article>

</section>