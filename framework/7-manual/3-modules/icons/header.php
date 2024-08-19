<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/icons.svg'); ?>
		<h1>Icons</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_icons_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-sizes" <?php } ?> >Sizes</a></li>
			<li><a <?php if($_icons_list_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-list" <?php } ?> >List</a></li>
			<li><a <?php if($_icons_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-colors" <?php } ?> >Colors</a></li>
			<li><a <?php if($_icons_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-misc" <?php } ?> >Misc</a></li>
		</ul>
	</nav>
</article>