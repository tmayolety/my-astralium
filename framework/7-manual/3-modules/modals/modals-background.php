<section>

	<?php include('7-manual/3-modules/modals/header.php'); ?>

	<article>
		<h4 class="ui h4 mg-med font-semibold">Fullscreen Background</h4>
		<p class="paragraphe-manual">
			Add the class <label>background</label> to the Modal. 
		</p>
<pre><code class="language-html"><!--
<div class="ui modal fullscreen">
	<div class="modal-container">

		{{ GRID }}

	</div>
</div>
--></code></pre>
		<ul class="ui table table-manual size-sm resp">
			<li>
				<div class="col-120"><span>Background</span></div>
				<div class="col-200"><span><label>background</label></span></div>
				<div><button class="ui btn mini primary" onclick="$('#modal-h-f').addClass('open size-full background')">Preview</button></div>
			</li>
		</ul>
		<?php include('modal-item-h-f.php'); ?>
	</article>

</section>