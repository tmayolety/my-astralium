<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/charts.svg'); ?>
		<h1>Circular Gauge [DevExtreme]</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_gauges_lexique_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-lexique" <?php } ?> >Lexique</a></li>
			<li><a <?php if($_gauges_types_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-types" <?php } ?> >Types</a></li>
			<li><a <?php if($_gauges_shapes_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-shapes" <?php } ?> >Shapes</a></li>
			<li><a <?php if($_gauges_values_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-values" <?php } ?> >Values</a></li>
			<li><a <?php if($_gauges_subvalues_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-subvalues" <?php } ?> >Sub Values</a></li>
			<li><a <?php if($_gauges_ticks_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-ticks" <?php } ?> >Ticks</a></li>
			<li><a <?php if($_gauges_labels_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-labels" <?php } ?> >Labels</a></li>
			<li><a <?php if($_gauges_ranges_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-ranges" <?php } ?> >Ranges</a></li>
			<li><a <?php if($_gauges_infos_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-infos" <?php } ?> >Infos</a></li>
			<li><a <?php if($_gauges_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-colors" <?php } ?> >Status Colors</a></li>
			<li><a <?php if($_gauges_templates_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-templates" <?php } ?> >Templates</a></li>
		</ul>
	</nav>
</article>