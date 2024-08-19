<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/list.svg'); ?>
		<h1>List</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_list_base_active){ ?> class="active" <?php }else{ ?> href="?Section=list-base" <?php } ?> >Base</a></li>
			<li><a <?php if($_list_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=list-sizes" <?php } ?> >Sizes</a></li>
			<li><a <?php if($_list_states_active){ ?> class="active" <?php }else{ ?> href="?Section=list-states" <?php } ?> >States</a></li>
		</ul>
	</nav>	
</article>