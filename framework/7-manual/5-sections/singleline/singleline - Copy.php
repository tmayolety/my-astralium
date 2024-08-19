<section class="section-singleline">

	<article>
		
		<div class="ui grid type1 cols-sm-5 cols-tv-pt-3 cols-tv-ld-5 pad-no gap-xl singleline-tree">

			<div class="ui col sm-1 tv-ld-1 bg-no order-tv-pt-1">
				<div class="singleline-tree--container">
					<div class="cable-horz first connect-left active"></div>
					<div class="cable-vert active">
						<div class="cable-top"></div>
						<div class="cable-bottom"></div>
					</div>
				</div>				
			</div>
			<div class="ui col sm-1 tv-ld-1 bg-no order-tv-pt-1">
				<div class="singleline-tree--container">
					<div class="cable-horz middle connect-right active"></div>
					<div class="cable-vert">
						<div class="cable-top"></div>
						<div class="cable-bottom"></div>
					</div>
				</div>				
			</div>
			<div class="ui col sm-1 tv-ld-1 bg-no order-tv-pt-1">
				<div class="singleline-tree--container">
					<div class="cable-horz last active"></div>
					<div class="cable-vert">
						<div class="cable-top"></div>
						<div class="cable-bottom"></div>
					</div>
				</div>				
			</div>

			<div class="ui col sm-2 tv-ld-2 tv-pt-3 bg-no order-tv-pt-2 pad-xl">
				<div class="col-content">
					<ul class="singleline-selector">
						<li>
							<button class="ui btn med primary active" onclick="$(this).parent().toggleClass('active');">Port</button>
							<ul>
								<li><button class="ui btn med primary">Stbd</button></li>
							</ul>
						</li>
						<li class="separator"><i class="ui icon-size-20"><?php echo file_get_contents('../framework/3-modules/icons/arrow-1-right.svg'); ?></i></li>
						<li>
							<button class="ui btn med primary active" onclick="$(this).parent().toggleClass('active');">Stbd</button>
							<ul>
								<li><button class="ui btn med primary">Port</button></li>
							</ul>
						</li>
						<li class="separator"><i class="ui icon-size-20"><?php echo file_get_contents('../framework/3-modules/icons/arrow-1-right.svg'); ?></i></li>

					</ul>
				</div>
			</div>


			<!-- PORT GENERATOR -->
			<div class="ui col sm-1 grid cols-sm-1 cols-tv-ld-6 cols-tv-pt-6 tv-ld-1 gap-no pad-med order-tv-pt-1">

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center color-bg-type-primary glow singleline-header
							h-sm-230 h-tv-pt-230 h-tv-ld-230">

					<?php include('5-sections/singleline/gauge-semi-header.php') ?>
					<div 	id="gauge-semi-singleline-header"
							class="	ui chart-container info-mini color-white
									h-xs-150 h-sm-150 h-med-150 h-lg-150 h-tv-ld-150 h-tv-pt-150"
							style="top:60px;"></div>

					<i class="ui icon-size-50 active" style="margin-top:35px;"><?php echo file_get_contents('../framework/3-modules/icons/generators.svg'); ?></i>
					<h4 class="ui h4 font-light mg-sm align-center upcase">Port Generator</h4>

                    <div class="ui grid type2 cols-sm-2 gap-sm pad-mini">
                        <div class="ui col sm-2">
                            <h3 class="ui h3 font-bold resp"><span  id="valor">21.45</span> <small class="font-light">kVA</small></h3>
                        </div>
                        <div class="ui col sm-1">
                            <h3 class="ui h3 font-bold resp">50.1 <small class="font-light">Hz</small></h3>
                        </div>
                        <div class="ui col sm-1">
                            <h3 class="ui h3 font-bold resp">0.91 <small class="font-light">PF</small></h3>
                        </div>
                    </div>
					<i class="ui icon-size-30 active alert"><?php echo file_get_contents('../framework/3-modules/icons/alert.svg'); ?></i>
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

                <?php
                $template = new \elements\elements('templates/gaugesSingleLine.php');
                $options = array("id" => "2488", "title" => "I A", "infoSize" => "info-xl", "unit" => "A", "headerColor" => "color-bg-op-type-secondary");
                $template->set($options);
                $template->renderBars();

                $options = array("id" => "2489", "title" => "U AB", "infoSize" => "info-sm", "unit" => "V", "headerColor" => "color-bg-op-type-light");
                $template->set($options);
                $template->renderBars();

                $options = array("id" => "2481", "title" => "I B", "infoSize" => "info-sm", "unit" => "A", "headerColor" => "color-bg-op-type-secondary");
                $template->set($options);
                $template->renderBars();

                $options = array("id" => "2484", "title" => "U BC", "infoSize" => "info-sm", "unit" => "V", "headerColor" => "color-bg-op-type-light");
                $template->set($options);
                $template->renderBars();

                $options = array("id" => "2485", "title" => "I C", "infoSize" => "info-sm", "unit" => "A", "headerColor" => "color-bg-op-type-secondary");
                $template->set($options);
                $template->renderBars();

                $options = array("id" => "2486", "title" => "U CA", "infoSize" => "info-sm", "unit" => "V", "headerColor" => "color-bg-op-type-light");
                $template->set($options);
                $template->renderBars();
                ?>

			</div>




			<!-- SHORE CONVERTER -->
			<div class="ui col sm-1 grid cols-sm-1 cols-tv-ld-6 cols-tv-pt-6 tv-ld-1 gap-no pad-med order-tv-pt-1">

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center singleline-header
							h-sm-230 h-tv-pt-230 h-tv-ld-230">

					<?php include('5-sections/singleline/gauge-semi-header.php') ?>
					<div 	id="gauge-semi-singleline-header"
							class="	ui chart-container info-mini color-white
									h-xs-150 h-sm-150 h-med-150 h-lg-150 h-tv-ld-150 h-tv-pt-150"
							style="top:60px;"></div>

					<i class="ui icon-size-50" style="margin-top:35px;"><?php echo file_get_contents('../framework/3-modules/icons/shore.svg'); ?></i>
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
					<i class="ui icon-size-30 active alert"><?php echo file_get_contents('../framework/3-modules/icons/alert.svg'); ?></i>
				</div>

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 h-tv-ld-170 h-tv-pt-170 pad-med align-middle-center"></div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ILA</h5></header>
					<?php include('5-sections/singleline/gauge-semi-1.php') ?>
					<div 	id="gauge-semi-singleline-1" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ILB</h5></header>
					<?php include('5-sections/singleline/gauge-semi-3.php') ?>
					<div 	id="gauge-semi-singleline-3" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ILC</h5></header>
					<?php include('5-sections/singleline/gauge-semi-5.php') ?>
					<div 	id="gauge-semi-singleline-5" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ULAB</h5></header>
					<?php include('5-sections/singleline/gauge-semi-2.php') ?>
					<div 	id="gauge-semi-singleline-2" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ULBC</h5></header>
					<?php include('5-sections/singleline/gauge-semi-4.php') ?>
					<div 	id="gauge-semi-singleline-4" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ULCA</h5></header>
					<?php include('5-sections/singleline/gauge-semi-6.php') ?>
					<div 	id="gauge-semi-singleline-6" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

			</div>

		
			
			<!-- STBD GENERATOR -->
			<div class="ui col sm-1 grid cols-sm-1 cols-tv-ld-6 cols-tv-pt-6 tv-ld-1 gap-no pad-med order-tv-pt-1">

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 align-middle-center singleline-header
							h-sm-230 h-tv-pt-230 h-tv-ld-230">

					<?php include('5-sections/singleline/gauge-semi-header.php') ?>
					<div 	id="gauge-semi-singleline-header"
							class="	ui chart-container info-mini color-white
									h-xs-150 h-sm-150 h-med-150 h-lg-150 h-tv-ld-150 h-tv-pt-150"
							style="top:60px;"></div>

					<i class="ui icon-size-50" style="margin-top:35px;"><?php echo file_get_contents('../framework/3-modules/icons/generators.svg'); ?></i>
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
					<i class="ui icon-size-30 active alert"><?php echo file_get_contents('../framework/3-modules/icons/alert.svg'); ?></i>
				</div>

				<div class="ui col sm-6 tv-pt-6 tv-ld-6 pad-med align-middle-center">
					<h3 class="ui h3 glow align-center font-black upcase">Stopped</h3>
				</div>

				<div class="ui col sm-3 tv-pt-3 tv-ld-3 align-middle-center pad-no h-tv-pt-60 h-sm-60">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn mini primary">Run</button>
						<button class="ui btn mini danger active">Stop</button>
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

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ILA</h5></header>
					<?php include('5-sections/singleline/gauge-semi-1.php') ?>
					<div 	id="gauge-semi-singleline-1" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ILB</h5></header>
					<?php include('5-sections/singleline/gauge-semi-3.php') ?>
					<div 	id="gauge-semi-singleline-3" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ILC</h5></header>
					<?php include('5-sections/singleline/gauge-semi-5.php') ?>
					<div 	id="gauge-semi-singleline-5" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ULAB</h5></header>
					<?php include('5-sections/singleline/gauge-semi-2.php') ?>
					<div 	id="gauge-semi-singleline-2" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ULBC</h5></header>
					<?php include('5-sections/singleline/gauge-semi-4.php') ?>
					<div 	id="gauge-semi-singleline-4" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

				<div class="ui col sm-2 lg-2 tv-ld-3 tv-pt-3 pad-mini
							h-xs-200 h-sm-150 h-med-200 h-lg-150 h-tv-ld-130 h-tv-pt-120">
					<header class="col-header"><h5 class="ui h5 font-regular">ULCA</h5></header>
					<?php include('5-sections/singleline/gauge-semi-6.php') ?>
					<div 	id="gauge-semi-singleline-6" style="margin-top:10px;"
							class="ui chart-container info-sm color-success
							h-xs-300 h-sm-200 h-med-300 h-lg-200 h-tv-ld-130 h-tv-pt-130"></div>
				</div>

			</div>
			


			<div class="ui col sm-2 tv-ld-2 tv-pt-3 pad-xl align-middle-center h-tv-pt-340 order-tv-pt-3">TIMELINE GRAPH</div>

		</div>

	</article>

<section>