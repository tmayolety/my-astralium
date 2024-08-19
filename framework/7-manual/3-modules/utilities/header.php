<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/options.svg'); ?>
		<h1>Utilities</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_utilities_width_height_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-width-height" <?php } ?> >Width & Height</a></li>
			<li><a <?php if($_utilities_margin_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-margin" <?php } ?> >Margin</a></li>
			<li><a <?php if($_utilities_position_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-position" <?php } ?> >Position</a></li>
			<li><a <?php if($_utilities_order_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-order" <?php } ?> >Order</a></li>
			<li><a <?php if($_utilities_hidden_visible_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-hidden-visible" <?php } ?> >Hidden & Visible</a></li>
			<li><a <?php if($_utilities_img_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-img" <?php } ?> >Images</a></li>
		</ul>
	</nav>
</article>