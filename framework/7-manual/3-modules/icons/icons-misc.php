<section>

	<?php include('7-manual/3-modules/icons/header.php'); ?>

	<article class="icon-list">

		<div class="ui grid type1 cols-sm-2 pad-no gap-no middle-center">

			<div class="ui col sm-1 pad-med">
				<h2 class="ui h2 font-bold">WINDROSE</h2>
			</div>

			<div class="ui col sm-1 pad-med">
				<h2 class="ui h2 font-bold">SOG & COG</h2>
			</div>

			<div class="ui col sm-1 pad-xl">
				<i class="ui icon-size-400 color-fill-type-dark rotate-anim" style="transform:rotate(125deg);">
					<?php echo file_get_contents('3-modules/icons/windrose.svg'); ?>						
				</i>
				<i class="ui icon-size-400 color-fill-type-primary windrose-dir"><?php echo file_get_contents('3-modules/icons/windrose-dir.svg'); ?></i>
			</div>

			<div class="ui col sm-1 pad-xl">
				<i class="ui icon-size-400 color-fill-type-dark rotate-anim" style="transform:rotate(125deg);">
					<?php echo file_get_contents('3-modules/icons/sog-cog.svg'); ?>						
				</i>
				<i class="ui icon-size-400 color-fill-type-primary sog-cog-dir"><?php echo file_get_contents('3-modules/icons/sog-cog-dir.svg'); ?></i>
				<div class="sog-cog-info">
					<h5 class="ui h5 font-bold mg-sm align-center color-text-type-secondary-light">SOG</h5>
					<h1 class="ui h1 font-regular align-center color-text-type-primary glow">5.2 kt</h1>
					<h5 class="ui h5 font-bold mg-sm align-center color-text-type-secondary-light">COG</h5>
					<h1 class="ui h1 font-regular align-center color-text-type-primary glow">5.2 °T</h1>
				</div>
			</div>

		</div>

	</article>


<section>