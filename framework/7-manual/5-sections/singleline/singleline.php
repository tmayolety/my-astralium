<section class="section-singleline">

	<article>
		
		<div class="ui grid type1 cols-sm-3 cols-tv-pt-3 cols-tv-ld-3 pad-no gap-xl singleline-tree">

			<div class="ui col sm-1 tv-ld-1 bg-no">
				<div class="singleline-tree--container">
					<div class="cable-horz first connect-left active"></div>
					<div class="cable-vert active">
						<div class="cable-top"></div>
						<div class="cable-bottom"></div>
					</div>
				</div>				
			</div>
			<div class="ui col sm-1 tv-ld-1 bg-no">
				<div class="singleline-tree--container">
					<div class="cable-horz middle connect-right active"></div>
					<div class="cable-vert">
						<div class="cable-top"></div>
						<div class="cable-bottom"></div>
					</div>
				</div>				
			</div>
			<div class="ui col sm-1 tv-ld-1 bg-no">
				<div class="singleline-tree--container">
					<div class="cable-horz last active"></div>
					<div class="cable-vert">
						<div class="cable-top"></div>
						<div class="cable-bottom"></div>
					</div>
				</div>				
			</div>




			<!-- PORT GENERATOR -->
			<div class="ui col sm-1 grid cols-sm-1 cols-tv-ld-6 cols-tv-pt-6 tv-ld-1 gap-no pad-med">

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center color-bg-type-primary glow singleline-header
							h-sm-200 h-tv-pt-240 h-tv-ld-200">
					<?php include('5-sections/singleline/gauge-semi-header.php') ?>
					<div 	id="gauge-semi-singleline-header"
							class="	ui chart-container info-mini color-white
									h-xs-150 h-sm-150 h-med-150 h-lg-150 h-tv-ld-150 h-tv-pt-150"
							style="top:60px;"></div>

					<i class="ui icon-size-50 active" style="margin-top:35px;"><?php echo file_get_contents('../3-modules/icons/generators.svg'); ?></i>
					<h4 class="ui h4 font-light mg-sm align-center upcase">Port Generator</h4>

					<div class="ui grid type2 cols-sm-2 cols-tv-ld-4 cols-tv-pt-2 gap-sm pad-mini">
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">21.45 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">							
							<h3 class="ui h3 font-bold resp">1.22 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">16.51 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">7.33 <small class="font-light">KVA</small></h3>
						</div>
					</div>
					<i class="ui icon-size-30 active alert"><?php echo file_get_contents('../3-modules/icons/alert.svg'); ?></i>
				</div>

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 pad-med align-middle-center">
					<h3 class="ui h3 glow align-center font-black upcase color-text-type-primary">Running</h3>
				</div>

				<div class="ui col sm-3 tv-pt-3 tv-ld-3 align-middle-center pad-no h-tv-pt-60 h-sm-60">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn mini primary active">Run</button>
						<button class="ui btn mini danger">Stop</button>
					</div>
				</div>

				<div class="ui col sm-3 tv-pt-3 tv-ld-3 align-middle-center pad-no h-tv-pt-60 h-sm-60">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn mini primary active">Open</button>
						<button class="ui btn mini danger">Close</button>
					</div>
				</div>

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center pad-no h-sm-100 h-tv-pt-60 h-tv-ld-60">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn mini link">Auto</button>
						<button class="ui btn mini primary active">Semi-auto</button>
					</div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-2 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-150 h-tv-pt-130">
					<header class="col-header size-sm">ILA</header>
					<div 	id="gauge-semi-singleline-1"
							class="ui chart-container info-tv-ld-sm info-tv-pt-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-160 h-tv-pt-130"></div>
					<?php include('5-sections/singleline/gauge-semi-1.php') ?>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-2 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-150 h-tv-pt-130">
					<header class="col-header size-sm">ILB</header>
					<div 	id="gauge-semi-singleline-3"
							class="ui chart-container  info-tv-ld-sm info-tv-pt-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-160 h-tv-pt-130"></div>
					<?php include('5-sections/singleline/gauge-semi-3.php') ?>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-2 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-150 h-tv-pt-130">
					<header class="col-header size-sm">ILC</header>
					<div 	id="gauge-semi-singleline-5"
							class="ui chart-container info-tv-ld-sm info-tv-pt-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-160 h-tv-pt-130"></div>
					<?php include('5-sections/singleline/gauge-semi-5.php') ?>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-2 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-150 h-tv-pt-130">
					<header class="col-header size-sm">ULAB</header>
					<div 	id="gauge-semi-singleline-2"
							class="ui chart-container  info-tv-ld-sm info-tv-pt-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-160 h-tv-pt-130"></div>
					<?php include('5-sections/singleline/gauge-semi-2.php') ?>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-2 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-150 h-tv-pt-130">
					<header class="col-header size-sm">ULBC</header>
					<div 	id="gauge-semi-singleline-4"
							class="ui chart-container  info-tv-ld-sm info-tv-pt-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-160 h-tv-pt-130"></div>
					<?php include('5-sections/singleline/gauge-semi-4.php') ?>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-2 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-150 h-tv-pt-130">
					<header class="col-header size-sm">ULCA</header>
					<div 	id="gauge-semi-singleline-6"
							class="ui chart-container  info-tv-ld-sm info-tv-pt-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-160 h-tv-pt-130"></div>
					<?php include('5-sections/singleline/gauge-semi-6.php') ?>
				</div>

			</div>




			<!-- SHORE CONVERTER -->
			<div class="ui col sm-1 grid cols-sm-1 cols-tv-ld-6 cols-tv-pt-6 tv-ld-1 gap-no pad-med">

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center singleline-header
							h-sm-230 h-tv-pt-230 h-tv-ld-230">

					<?php include('5-sections/singleline/gauge-semi-header.php') ?>
					<div 	id="gauge-semi-singleline-header"
							class="	ui chart-container info-mini color-white
									h-xs-150 h-sm-150 h-med-150 h-lg-150 h-tv-ld-150 h-tv-pt-150"
							style="top:60px;"></div>

					<i class="ui icon-size-50" style="margin-top:35px;"><?php echo file_get_contents('../3-modules/icons/shore.svg'); ?></i>
					<h4 class="ui h4 font-light mg-sm align-center upcase">Shore Converter</h4>

					<div class="ui grid type2 cols-sm-2 gap-sm pad-mini">
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">21.45 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">							
							<h3 class="ui h3 font-bold resp">1.22 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">16.51 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">7.33 <small class="font-light">KVA</small></h3>
						</div>
					</div>
					<i class="ui icon-size-30 active alert"><?php echo file_get_contents('../3-modules/icons/alert.svg'); ?></i>
				</div>

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 h-tv-ld-170 h-tv-pt-170 pad-med align-middle-center"></div>

			</div>

		
			
			<!-- STBD GENERATOR -->
			<div class="ui col sm-1 grid cols-sm-1 cols-tv-ld-6 cols-tv-pt-6 tv-ld-1 gap-no pad-med">

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center singleline-header
							h-sm-230 h-tv-pt-230 h-tv-ld-230">

					<?php include('5-sections/singleline/gauge-semi-header.php') ?>
					<div 	id="gauge-semi-singleline-header"
							class="	ui chart-container info-mini color-white
									h-xs-150 h-sm-150 h-med-150 h-lg-150 h-tv-ld-150 h-tv-pt-150"
							style="top:60px;"></div>

					<i class="ui icon-size-50" style="margin-top:35px;"><?php echo file_get_contents('../3-modules/icons/generators.svg'); ?></i>
					<h4 class="ui h4 font-light mg-sm align-center upcase">STBD Generator</h4>

					<div class="ui grid type2 cols-sm-2 gap-sm pad-mini">
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">21.45 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">							
							<h3 class="ui h3 font-bold resp">1.22 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">16.51 <small class="font-light">KVA</small></h3>
						</div>
						<div class="ui col sm-1">
							<h3 class="ui h3 font-bold resp">7.33 <small class="font-light">KVA</small></h3>
						</div>
					</div>
					<i class="ui icon-size-30 active alert"><?php echo file_get_contents('../3-modules/icons/alert.svg'); ?></i>
				</div>


			</div>
			

			
			<div class="singleline-options ui grid cols-sm-3 cols-tv-ld-3 cols-tv-pt-1
						col sm-3 tv-ld-3 tv-pt-3 bg-no pad-xl gap-xl"
						style="margin-top:20px!important;">
				<div class="ui col sm-1 bg-no hidden-tv-pt"></div>
				<div class="ui grid cols-sm-6 cols-tv-ld-6 cols-tv-pt-2
							col sm-1 tv-ld-1 tv-pt-3 gap-no pad-no h-tv-ld-80">
					<div class="ui col sm-2 tv-pt-1 tv-ld-2 pad-mini">						
						<header class="col-header size-mini">HEADER</header>
						<div class="col-content">
							<div class="ui btn-group toggle horizontal" style="margin:0 auto;">
								<button class="ui btn mini primary active">Open</button>
								<button class="ui btn mini danger">Close</button>
							</div>
						</div>
					</div>
					<div class="ui col sm-4 tv-pt-1 tv-ld-4 pad-mini">
						<header class="col-header size-mini">PRIORITIES</header>
						<div class="col-content">
							<ul class="singleline-selector">
								<li>
									<button class="ui btn mini primary active" onclick="$(this).parent().toggleClass('active');">A</button>
									<ul>
										<li><button class="ui btn mini primary">B</button></li>
										<li><button class="ui btn mini primary">C</button></li>
										<li><button class="ui btn mini primary">D</button></li>
										<li><button class="ui btn mini primary">E</button></li>
										<li><button class="ui btn mini primary">-</button></li>
									</ul>
								</li>
								<li class="separator"><i class="ui icon-size-15"><?php echo file_get_contents('../3-modules/icons/arrow-1-right.svg'); ?></i></li>
								<li>
									<button class="ui btn mini primary active" onclick="$(this).parent().toggleClass('active');">B</button>
									<ul>
										<li><button class="ui btn mini primary">B</button></li>
										<li><button class="ui btn mini primary">C</button></li>
										<li><button class="ui btn mini primary">D</button></li>
										<li><button class="ui btn mini primary">E</button></li>
										<li><button class="ui btn mini primary">-</button></li>
									</ul>
								</li>
								<li class="separator"><i class="ui icon-size-15"><?php echo file_get_contents('../3-modules/icons/arrow-1-right.svg'); ?></i></li>
								<li>
									<button class="ui btn mini primary" onclick="$(this).parent().toggleClass('active');">-</button>
									<ul>
										<li><button class="ui btn mini primary">B</button></li>
										<li><button class="ui btn mini primary">C</button></li>
										<li><button class="ui btn mini primary">D</button></li>
										<li><button class="ui btn mini primary">E</button></li>
										<li><button class="ui btn mini primary">-</button></li>
									</ul>
								</li>
								<li class="separator"><i class="ui icon-size-15"><?php echo file_get_contents('../3-modules/icons/arrow-1-right.svg'); ?></i></li>
								<li>
									<button class="ui btn mini primary" onclick="$(this).parent().toggleClass('active');">-</button>
									<ul>
										<li><button class="ui btn mini primary">B</button></li>
										<li><button class="ui btn mini primary">C</button></li>
										<li><button class="ui btn mini primary">D</button></li>
										<li><button class="ui btn mini primary">E</button></li>
										<li><button class="ui btn mini primary">-</button></li>
									</ul>
								</li>
								<li class="separator"><i class="ui icon-size-15"><?php echo file_get_contents('../3-modules/icons/arrow-1-right.svg'); ?></i></li>
								<li>
									<button class="ui btn mini primary" onclick="$(this).parent().toggleClass('active');">-</button>
									<ul>
										<li><button class="ui btn mini primary">B</button></li>
										<li><button class="ui btn mini primary">C</button></li>
										<li><button class="ui btn mini primary">D</button></li>
										<li><button class="ui btn mini primary">E</button></li>
										<li><button class="ui btn mini primary">-</button></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ui col sm-1 bg-no hidden-tv-pt"></div>
			</div>


			<div class="ui col sm-2 tv-ld-2 tv-pt-3 pad-xl align-middle-center h-tv-pt-340 hidden-tv-ld">TIMELINE GRAPH</div>

		</div>

	</article>

<section>