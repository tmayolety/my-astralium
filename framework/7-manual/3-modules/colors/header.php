<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/colors.svg'); ?>
		<h1>Colors</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_colors_types_active){ ?> class="active" <?php }else{ ?> href="?Section=colors-types" <?php } ?> >Types</a></li>
			<li><a <?php if($_colors_fluids_active){ ?> class="active" <?php }else{ ?> href="?Section=colors-fluids" <?php } ?> >Fluids</a></li>
		</ul>
	</nav>
</article>