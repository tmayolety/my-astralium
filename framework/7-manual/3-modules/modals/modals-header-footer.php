<section>

	<?php include('7-manual/3-modules/modals/header.php'); ?>

	<article>
		<h4 class="ui h4 mg-med font-semibold">Header & Footer</h4>
		<p class="paragraphe-manual">
			If you want to use a "HEADER" for the modal, add the class: <label>has-header</label> to the "GRID" who contain the HEADER<br/>
			If you want to use a "FOOTER" for the modal, add the class: <label>has-footer</label> to the "GRID" who contain the FOOTER<br/>
		</p>
<pre><code class="language-html"><!--
<div class="ui modal">
	<div class="modal-container">

		<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
			<div class="ui col mini-1
						grid cols-mini-1 gap-mini has-header has-footer">

				{ HEADER }

				{ COLUMN }

				{ FOOTER }

			</div>
		</div>

	</div>
</div>
--></code></pre>
		<ul class="ui table size-sm table-manual resp">
			<li>
				<div class="col-120"><span>Header</span></div>
				<div class=""><span><label>has-header</label></span></div>
			</li>
			<li>
				<div class="col-120"><span>Footer</span></div>
				<div class=""><span><label>has-footer</label></span></div>
			</li>
		</ul>
		<br/>
		<button class="ui btn mini primary" onclick="$('#modal-h-f').addClass('open size-full fullscreen')">Preview</button>
		<?php include('modal-item-h-f.php'); ?>
	</article>







	<article>
		<h4 class="ui h4 mg-med font-semibold">Header only</h4>
		<p class="paragraphe-manual">
			If you want to use a "HEADER" for the modal, add the class: <label>has-header</label> to the "GRID" who contain the HEADER<br/>
		</p>
<pre><code class="language-html"><!--
<div class="ui modal">
	<div class="modal-container">

		<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
			<div class="ui col mini-1
						grid cols-mini-1 gap-mini has-header">

				{ HEADER }

				{ COLUMN }

			</div>
		</div>

	</div>
</div>
--></code></pre>
		<ul class="ui table size-sm table-manual resp">
			<li>
				<div class="col-120"><span>Header</span></div>
				<div class=""><span><label>has-header</label></span></div>
			</li>
		</ul>
		<br/>
		<button class="ui btn mini primary" onclick="$('#modal-h').addClass('open size-full fullscreen')">Preview</button>
		<?php include('modal-item-h.php'); ?>
	</article>







	<article>
		<h4 class="ui h4 mg-med font-semibold">Footer only</h4>
		<p class="paragraphe-manual">
			If you want to use a "FOOTER" for the modal, add the class: <label>has-header</label> to the "GRID" who contain the FOOTER<br/>
		</p>
<pre><code class="language-html"><!--
<div class="ui modal">
	<div class="modal-container">

		<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
			<div class="ui col mini-1
						grid cols-mini-1 gap-mini has-footer">

				{ COLUMN }

				{ FOOTER }

			</div>
		</div>

	</div>
</div>
--></code></pre>
		<ul class="ui table size-sm table-manual resp">
			<li>
				<div class="col-120"><span>Footer</span></div>
				<div class=""><span><label>has-footer</label></span></div>
			</li>
		</ul>
		<br/>
		<button class="ui btn mini primary" onclick="$('#modal-f').addClass('open size-full fullscreen')">Preview</button>
		<?php include('modal-item-f.php'); ?>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Container only</h4>
		<p class="paragraphe-manual" style="color:red">Missing a Close Button</p>
<pre><code class="language-html"><!--
<div class="ui modal">
	<div class="modal-container">

		<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
			<div class="ui col mini-1
						grid cols-mini-1 gap-mini">

				{ COLUMN }

			</div>
		</div>

	</div>
</div>
--></code></pre>
		<button class="ui btn mini primary" onclick="$('#modal-c').addClass('open size-full fullscreen')">Preview</button>
		<?php include('modal-item-c.php'); ?>
	</article>

</section>