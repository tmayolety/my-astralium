<section>

	<article>



		<div class="ui grid type1 cols-mini-1 pad-lg gap-xl">

			<div class="ui col mini-1 grid cols-mini-12 gap-xl pad-no has-header">

				<header class="ui col">
					<font>Header</font>
					<span class="gradients">
						<span class="gradient-left"></span>
						<span class="gradient-right"></span>
					</span>
					
					
				</header>

				<div class="ui col mini-12 grid type1 cols-mini-2 pad-med gap-no radius shadow">

					<div class="ui col mini-1 has-col-header-sm">
						<header class="text-size-10">Gauge</header>
						<div class="ui grid type1 cols-mini-1 pad-med gap-no align-middle-center">
							<div class="ui col mini-1">
								<?php include('7-manual/3-modules/gauges/circularGauge/templates/circularGauge3.php'); ?>
							</div>
						</div>
					</div>

					<div class="ui col mini-1 grid type1 cols-mini-2 pad-med gap-no">

						<div class="ui col mini-1 has-col-header-sm">
							<header class="text-size-10">Button Default</header>
							<div class="ui grid type1 cols-mini-1 pad-med gap-no align-middle-center">
								<div class="ui col mini-1">
									<button class="ui btn primary sm">Button</button>
								</div>
							</div>
						</div>

						<div class="ui col mini-1 has-col-header-sm">
							<header class="text-size-10">Button Default</header>
							<div class="ui grid type1 cols-mini-1 pad-med gap-no align-middle-center">
								<div class="ui col mini-1">
									<button class="ui btn switch color-bg-type-success sm w-150" onClick="$(this).toggleClass('active')">
										<div class="active">Active</div>
										<div class="inactive">Inactive</div>
									</button>
								</div>
							</div>
						</div>

						<div class="ui col mini-2 has-col-header-sm">
							<header class="text-size-10">Button Default</header>
							<div class="ui grid type1 cols-mini-2 pad-med gap-no align-middle-center">
								<div class="ui col mini-1">
									<div class="ui pbar vertical size-med label divider value-1 h-250">
										<div class="pbar--container">
											<ul class="pbar--value">
												<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
											</ul>
											<ul class="pbar--value">
												<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
											</ul>
											<ul class="pbar--value">
												<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
											</ul>
											<ul class="pbar--value">
												<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
											</ul>
											<ul class="ui pbar--label-divider">
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
											</ul>
											<ul class="ui pbar--label">
												<li><div>0</div></li>
												<li><div>20</div></li>
												<li><div>40</div></li>
												<li><div>60</div></li>
												<li><div>80</div></li>
												<li><div>120</div></li>
												<li><div>140</div></li>
												<li><div>160</div></li>
												<li><div>180</div></li>
												<li><div>200</div></li>
												<li><div>220</div></li>
											</ul>
											<div class="ui pbar--item">
												<div class="color-fl-blue" style="flex-basis:60%;"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="ui col mini-1 reset-w-align">
									<div class="ui col-content w-resp h-resp">
										<ul class="ui list size-mini">
											<li>
												<div><button class="ui btn mini success w-50">OFF</button></div>
												<div>Button Off</div>
											</li>
											<li>
												<div><button class="ui btn mini success w-50 alert">OFF</button></div>
												<div>Button Off + Alert</div>
											</li>
											<li>
												<div><button class="ui btn mini success w-50 loading colored">ON</button></div>
												<div>Button Loading</div>
											</li>
											<li>
												<div><button class="ui btn mini success w-50 loading colored alert">ON</button></div>
												<div>Button Loading</div>
											</li>
											<li>
												<div><button class="ui btn mini success w-50 active">ON</button></div>
												<div>Button Active</div>
											</li>
											<li>
												<div><button class="ui btn mini success w-50 active alert">ON</button></div>
												<div>Button Active + Alert</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="ui col mini-2">Content</div>
				</div>

					
				<!-- TABLE 1 -->
				<div class="ui col mini-6 bg-no radius shadow align-self-top">
					<ul class="ui table size-mini">
						<li class="thead">
							<div class="col-200-min"><span>Column</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary"><span>Column</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
					</ul>
				</div>

					
				<!-- TABLE 2 -->
				<div class="ui col mini-6 bg-no radius shadow align-self-top">
					<ul class="ui table size-mini in-column">
						<li class="thead">
							<div class="col-200-min"><span>Column</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary"><span>Column</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
						<li>
							<div class="col-200-min font-semibold"><span>Lorem ipsum dolor sit amet</span></div>
							<div class="col-120 align-middle-center color-bg-type-primary-light"><span class="font-bold">2 145</span><span>Bars</span></div>
						</li>
					</ul>
				</div>



				<!-- ICONS -->
				<div class="ui col sm-2 pad-xl radius shadow">
					<i class="ui icon-size-75 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
					<h5 class="ui h5 align-center mg-top-10">tanks.svg</h5>
				</div>
				<div class="ui col sm-2 pad-xl radius shadow">
					<i class="ui icon-size-75 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
					<h5 class="ui h5 align-center mg-top-10">tanks.svg</h5>
				</div>
				<div class="ui col sm-2 pad-xl radius shadow">
					<i class="ui icon-size-75 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
					<h5 class="ui h5 align-center mg-top-10">tanks.svg</h5>
				</div>
				<div class="ui col sm-2 pad-xl radius shadow">
					<i class="ui icon-size-75 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
					<h5 class="ui h5 align-center mg-top-10">tanks.svg</h5>
				</div>
				<div class="ui col sm-2 pad-xl radius shadow">
					<i class="ui icon-size-75 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
					<h5 class="ui h5 align-center mg-top-10">tanks.svg</h5>
				</div>
				<div class="ui col sm-2 pad-xl radius shadow">
					<i class="ui icon-size-75 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
					<h5 class="ui h5 align-center mg-top-10">tanks.svg</h5>
				</div>



				<!-- BUTTONS -->
				<div class="ui col sm-10 pad-xl radius shadow">
					<div class="ui btn-group collapse horizontal resp-horz">
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>

				<div class="ui col sm-2 pad-xl radius shadow">
					<div class="ui btn-group toggle vertical resp-horz">
						<button class="ui btn mini primary">Default</button>
						<button class="ui btn mini primary colored">Colored</button>
						<button class="ui btn mini primary colored loading">Loading</button>
						<button class="ui btn mini primary active">Active</button>
					</div>
				</div>

				<div class="ui col sm-2 pad-xl radius shadow align-middle-center">
					<div class="ui btn-group switch-2 med">
						<button class="ui btn primary active">I</button>
						<button class="ui btn danger">O</button>
					</div>
				</div>

				<div class="ui col sm-2 pad-sm radius shadow reset-w-align">
					<div class="ui btn-multi resp-w resp-h">
						<button class="ui btn mini primary radius-no">
							<div class="content">
								<div class="align-center font-semibold text-size-8">MODE A</div>
								<div class="align-center font-light text-size-30">024</div>
								<div class="align-center font-semibold text-size-8">Subtitle</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>
				</div>


				<!-- GRID NESTING -->
				<div class="ui col mini-12 grid cols-mini-2 gap-xl pad-lg overflow">
					<div class="ui col mini-1 grid type1 cols-mini-2 gap-no pad-mini radius shadow">
						<div class="ui col mini-1 middle-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.q</div>
						<div class="ui col mini-1 middle-center">...</div>
						<div class="ui col mini-2 middle-center">...</div>
					</div>
					<div class="ui col mini-1 grid type1 cols-mini-2 gap-med radius shadow">
						<div class="ui col mini-2 middle-center">...</div>
						<div class="ui col mini-2 middle-center">...</div>
					</div>
					<div class="ui col mini-2 grid type1 cols-mini-4 gap-xl pad-xl overflow">
						<div class="ui col mini-1 middle-center radius shadow">...</div>
						<div class="ui col mini-1 middle-center radius shadow">...</div>
						<div class="ui col mini-1 middle-center radius shadow">...</div>
						<div class="ui col mini-1 middle-center radius shadow">...</div>
					</div>
				</div>

			</div>

		</div>

	</article>

</section>





<div class="ui main-tabs dev-menuNavigation-enginesPage1 dev-menuNavigation-enginesPage2 dev-menuNavigation-engLogBook" style="">
    <ul>
        <li data-alert="" class="active" onclick="menuNavigation.navigate(this);$('.main').addClass('active');">
            <a>Main Engines</a>
        </li>
        <li data-alert="" class="" onclick="menuNavigation.navigate(this);$('.main').addClass('active');">
            <a>Main Engines</a>
        </li>
    </ul>
</div>

