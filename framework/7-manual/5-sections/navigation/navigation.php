<section class="section-navigation">

	<article>

		<div class="ui grid type1 cols-sm-1 pad-lg gap-xl">

			<div class="ui grid cols-sm-1 col sm-1 gap-sm pad-lg has-header">

				<header class="ui col">
					<font>Navigation</font>
					<span class="gradients">
						<span class="gradient-left"></span>
						<span class="gradient-right"></span>
					</span>
					
					
				</header>

				<div class="ui grid cols-sm-12 cols-tv-pt-12 cols-tv-ld-12
							col sm-1 gap-xl pad-lg">

					<div class="ui grid cols-sm-1 cols-tv-ld-1 cols-tv-pt-2 pad-no gap-xl order-tv-pt-2
								col sm-3 tv-ld-3 tv-pt-12">
						<div class="ui col sm-1 tv-ld-1 h-sm-310 h-tv-ld-310 h-tv-pt-230 pad-no">
						</div>
						<div class="ui col sm-1 tv-ld-1 h-sm-310 h-tv-ld-310 h-tv-pt-230 pad-no">
							<header class="col-header size-med">Depth</header>
							<div id="gauge-series-2" class="ui chart-container color-primary
															info-desktop-sm-xl info-tv-ld-lg info-tv-pt-sm info-top-tv-ld-65 info-top-tv-pt-65
															h-sm-220 h-tv-ld-240 h-tv-pt-180"></div>
							<?php include('3-modules/charts/gauge-series-2.php') ?>
						</div>
					</div>

					<div class="ui col grid cols-sm-1 cols-tv-ld-2 cols-tv-pt-2 pad-xl gap-med middle-center order-tv-pt-1
								sm-6 tv-ld-6 tv-pt-12 ">
						<div class="ui col sm-6 tv-ld-2 tv-pt-2 pad-xl middle-center h-tv-ld-540 h-tv-pt-540 order-tv-pt-1">
							<div class="col-content">
								<div class="rotate-anim">
									<i class="ui icon-size-460 color-fill-type-dark" style="transform:rotate(35deg);display:block;">
										<?php echo file_get_contents('../3-modules/icons/windrose.svg'); ?>						
									</i>
								</div>
								<i class="ui icon-size-460 color-fill-type-primary windrose-dir"><?php echo file_get_contents('../3-modules/icons/windrose-dir.svg'); ?></i>
							</div>
						</div>
						<div class="ui col sm-3 tv-ld-1 tv-pt-1 pad-xl middle-center order-tv-pt-1 color-bg-op-type-primary-dark">
							<div class="col-content" style="height:auto;">
								<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Longitude</h5>
								<h2 class="ui h2 font-regular align-center color-text-type-primary-light glow">39°28'04.1"N</h2>
							</div>							
						</div>
						<div class="ui col sm-3 tv-ld-1 tv-pt-1 pad-xl middle-center order-tv-pt-1 color-bg-op-type-primary-dark">
							<div class="col-content" style="height:auto;">
								<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Latitude</h5>
								<h2 class="ui h2 font-regular align-center color-text-type-primary-light glow">2°27'01.3"E</h2>
							</div>						
						</div>
					</div>

					<div class="ui grid cols-sm-1 cols-tv-ld-1 cols-tv-pt-2 pad-no gap-xl order-tv-pt-2
								col sm-3 tv-ld-3 tv-pt-12">
						<div class="ui col sm-1 tv-ld-1 h-sm-310 h-tv-ld-310 h-tv-pt-230 pad-no">
							<div class="col-content">
								<div class="rotate-anim">
									<i class="ui icon-size-240 color-fill-type-dark" style="transform:rotate(25deg);display:block">
										<?php echo file_get_contents('../3-modules/icons/sog-cog.svg'); ?>						
									</i>
								</div>
								<i class="ui icon-size-240 color-fill-type-primary sog-cog-dir"><?php echo file_get_contents('../3-modules/icons/sog-cog-dir.svg'); ?></i>
								<div class="sog-cog-info">
									<h5 class="ui h5 font-regular mg-mini align-center color-text-type-secondary-light">SOG</h5>
									<h3 class="ui h3 font-bold mg-med align-center color-text-type-primary glow">5.2 kt</h3>
									<h5 class="ui h5 font-regular mg-mini align-center color-text-type-secondary-light">COG</h5>
									<h3 class="ui h3 font-bold align-center color-text-type-primary glow">5.2 °T</h3>
								</div>								
							</div>
						</div>
						<div class="ui col sm-1 tv-ld-1 h-sm-310 h-tv-ld-310 h-tv-pt-230 pad-no">
							<header class="col-header size-med">Radio Batteries Voltage</header>
							<div id="gauge-series-2" class="ui chart-container color-success
															info-desktop-sm-xl info-tv-ld-lg info-tv-pt-lg info-top-tv-ld-65 info-top-tv-pt-65
															h-sm-220 h-tv-ld-240 h-tv-pt-240"></div>
							<?php include('3-modules/charts/gauge-series-2.php') ?>
						</div>
					</div>

					<div class="ui grid cols-tv-ld-5 cols-tv-pt-1 pad-no gap-xl order-tv-pt-2
								col sm-12 tv-ld-12 tv-pt-12">

						<div class="ui grid cols-sm-2 cols-tv-ld-2 cols-tv-pt-4 gap-med order-tv-pt-1
									col sm-1">
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Water Temp.</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 °C</h1>
								</div>
							</div>
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Air Temp.</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 °C</h1>
								</div>
							</div>
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Heading</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 °</h1>
								</div>
							</div>
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Humidity</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 %</h1>
								</div>
							</div>
						</div>

						<div class="ui col sm-1 tv-ld-3 tv-pt-1 middle-center h-tv-pt-210 order-tv-pt-2">Depth</div>

						<div class="ui grid cols-sm-2 cols-tv-ld-2 cols-tv-pt-4 col sm-1 gap-med order-tv-pt-1">
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Magnetic Deviation</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 °C</h1>
								</div>
							</div>
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">Magnetic Variation</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 °C</h1>
								</div>
							</div>
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">TWS</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 kn</h1>
								</div>
							</div>
							<div class="ui col sm-1 h-sm-90 h-tv-pt-90 middle-center color-bg-op-type-primary-dark">
								<div class="col-content" style="height:auto;">
									<h5 class="ui h5 font-bold mg-sm align-center color-text-type-primary">AWS</h5>
									<h1 class="ui h1 font-regular align-center color-text-type-primary-light glow">24.7 kn</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

	</article>

</section>