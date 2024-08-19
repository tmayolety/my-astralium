<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/table.svg'); ?>
		<h1>Table</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_table_base_active){ ?> class="active" <?php }else{ ?> href="?Section=table-base" <?php } ?> >Base</a></li>
			<li><a <?php if($_table_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=table-sizes" <?php } ?> >Sizes</a></li>
			<li><a <?php if($_table_columns_active){ ?> class="active" <?php }else{ ?> href="?Section=table-columns" <?php } ?> >Columns</a></li>
			<li><a <?php if($_table_align_active){ ?> class="active" <?php }else{ ?> href="?Section=table-align" <?php } ?> >Align</a></li>
			<li><a <?php if($_table_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=table-colors" <?php } ?> >Colors</a></li>
			<li><a <?php if($_table_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=table-misc" <?php } ?> >Misc</a></li>
			<li><a <?php if($_table_ongrid_active){ ?> class="active" <?php }else{ ?> href="?Section=table-ongrid" <?php } ?> >On Grid</a></li>
			<li><a <?php if($_table_templates_active){ ?> class="active" <?php }else{ ?> href="?Section=table-templates" <?php } ?> >Templates</a></li>
		</ul>
	</nav>
</article>