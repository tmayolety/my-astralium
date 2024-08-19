<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/pbar.svg'); ?>
		<h1>Progress Bar</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_pbar_base_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-base" <?php } ?> >Base</a></li>
			<li><a <?php if($_pbar_orientation_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-orientation" <?php } ?> >Orientation</a></li>
			<li><a <?php if($_pbar_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-sizes" <?php } ?> >Sizes</a></li>
			<li><a <?php if($_pbar_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-colors" <?php } ?> >Colors</a></li>
			<li><a <?php if($_pbar_options_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-options" <?php } ?> >Options</a></li>
			<li><a <?php if($_pbar_values_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-values" <?php } ?> >Values</a></li>
			<li><a <?php if($_pbar_header_footer_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-header-footer" <?php } ?> >Header & Footer</a></li>
		</ul>
	</nav>	
</article>


					

