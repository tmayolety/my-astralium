<article class="section-header">
	<div class="title">
		<?php echo file_get_contents('3-modules/icons/ico-manual/typography.svg'); ?>
		<h1>Typography</h1>
	</div>
	<nav>
		<ul>
			<li><a <?php if($_typography_fonts_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-fonts" <?php } ?> >Fonts</a></li>
			<li><a <?php if($_typography_headings_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-headings" <?php } ?> >Headings</a></li>
			<li><a <?php if($_typography_text_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-text" <?php } ?> >Text Sizes</a></li>
			<li style="display:none;"><a <?php if($_typography_paragraphe_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-paragraphe" <?php } ?> >Paragraphe Sizes</a></li>
			<li style="display:none;"><a <?php if($_typography_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-misc" <?php } ?> >Misc</a></li>
		</ul>
	</nav>	
</article>