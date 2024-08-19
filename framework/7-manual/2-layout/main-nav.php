<?php

	$section = $_GET['Section'];
	if(empty($section)){ 					$section = "grid"; }

	if($section == "playground") 			{ $p = "7-manual/5-sections/playground/playground.php";				$_playground_active 			= true; }
	if($section == "singleline2") 			{ $p = "7-manual/5-sections/singleline2/singleline2.php";			$_singleline2_active 			= true; }
?>

<aside class="aside" data-main-nav-phone="">

	<nav class="main-nav">

		<h2>
			Select a Section
			<button class="ui btn primary mini active icon icon-only" onclick="$('.aside').attr('data-main-nav-phone', '');">
				<?php echo file_get_contents('3-modules/icons/close.svg'); ?>
			</button>
		</h2>

		<ul>

			<li data-submenu="" data-alert="" <?php if($_playground_active){ ?> class="active" <?php }else{ ?>  <?php } ?> >
				<a href="?Section=playground">
					<?php echo file_get_contents('3-modules/icons/playground.svg'); ?>Playground
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="" <?php if($_singleline2_active){ ?> class="active" <?php }else{ ?>  <?php } ?> >
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/singleline.svg'); ?>Singleline
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/generators.svg'); ?>Generator
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/shore.svg'); ?>Shore Power
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/tanks.svg'); ?>Tank Levels
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/bilges.svg'); ?>Bilges
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/on-off.svg'); ?>Pumps
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/fire.svg'); ?>Fire System
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/hatches.svg'); ?>Doors And Hatches
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/various.svg'); ?>Various Systems
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/navigation.svg'); ?>Navigation Equipment
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/alarms.svg'); ?>Alarms
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/close.svg'); ?>Inhibits
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/signal-list.svg'); ?>Signal List
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/settings.svg'); ?>Settings
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

			<li data-submenu="" data-alert="">
				<a href="?Section=singleline2">
					<?php echo file_get_contents('3-modules/icons/singleline.svg'); ?>Singleline 2
				</a>
				<?php echo file_get_contents('3-modules/icons/alert.svg'); ?>
			</li>

		</ul>

	</nav>

	<!-- PHONE ONLY-->
	<div class="phone-menu-btn" onclick="$('.aside').attr('data-main-nav-phone', 'active');">
		<div>
			<?php echo file_get_contents('3-modules/icons/menu.svg'); ?>			
		</div>
	</div>

</aside>