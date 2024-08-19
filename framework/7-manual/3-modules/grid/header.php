<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/grid.svg'); ?>
		<h1>Grid</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_grid_base_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-base" <?php } ?>>Base</a></li>
			<li><a <?php if($_grid_columns_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-columns" <?php } ?>>Columns</a></li>
			<li><a <?php if($_grid_types_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-types" <?php } ?>>Types</a></li>
			<li><a <?php if($_grid_gap_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-gap" <?php } ?> >Gap</a></li>
			<li><a <?php if($_grid_padding_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-padding" <?php } ?> >Padding</a></li>
			<li><a <?php if($_grid_align_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-align" <?php } ?> >Align</a></li>
			<li><a <?php if($_grid_nesting_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-nesting" <?php } ?> >Nesting</a></li>
			<li><a <?php if($_grid_header_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-header" <?php } ?> >Header</a></li>
			<li><a <?php if($_grid_col_content_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-col-content" <?php } ?> >Col Content</a></li>
			<li style="display:none;"><a <?php if($_grid_flip_col_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-flip-col" <?php } ?> >Flip Column</a></li>
			<li><a <?php if($_grid_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-misc" <?php } ?> >Misc</a></li>
			<li><a <?php if($_grid_templates_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-templates" <?php } ?> >Templates</a></li>
		</ul>
	</nav>
</article>