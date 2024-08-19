<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/button.svg'); ?>
		<h1>Button</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_button_base_active){ ?> class="active" <?php }else{ ?> href="?Section=button-base" <?php } ?> >Base</a></li>
			<li><a <?php if($_button_circle_active){ ?> class="active" <?php }else{ ?> href="?Section=button-circle" <?php } ?> >Circle</a></li>
			<li><a <?php if($_button_group_collapse_active){ ?> class="active" <?php }else{ ?> href="?Section=button-group-collapse" <?php } ?> >Group Collapse</a></li>
			<li><a <?php if($_button_group_toggle_active){ ?> class="active" <?php }else{ ?> href="?Section=button-group-toggle" <?php } ?> >Group Toogle</a></li>
			<li><a <?php if($_button_switch1_active){ ?> class="active" <?php }else{ ?> href="?Section=button-switch1" <?php } ?> >Switch 1</a></li>
			<li><a <?php if($_button_switch2_active){ ?> class="active" <?php }else{ ?> href="?Section=button-switch2" <?php } ?> >Switch 2</a></li>
			<li><a <?php if($_button_multi_active){ ?> class="active" <?php }else{ ?> href="?Section=button-multi" <?php } ?> >Multi</a></li>
		</ul>
	</nav>
</article>