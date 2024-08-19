<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/modal.svg'); ?>
		<h1>Modals</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_modals_base_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-base" <?php } ?> >Base</a></li>
			<li><a <?php if($_modals_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-sizes" <?php } ?> >Sizes</a></li>
			<li><a <?php if($_modals_background_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-background" <?php } ?> >Background</a></li>
			<li><a <?php if($_modals_header_footer_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-header-footer" <?php } ?> >Header & Footer</a></li>
		</ul>
	</nav>
</article>