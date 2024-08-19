<section>

	<?php include('7-manual/3-modules/modals/header.php'); ?>

	<article>
		<h4 class="ui h4 mg-med font-semibold">Sizes</h4>
		<p class="paragraphe-manual">
			The Modal must contain: <label>ui</label> <label>modal</label>.<br/>
			The Grid must be inside the <label>modal-container</label><br/>
			Note: You can only use 1 column.<br/><br/>
			You can add a <a class="link-manual" href="?Section=modals-header-footer">Header & Footer</a> .
		</p>
<pre><code class="language-html"><!--
<div class="ui modal">
	<div class="modal-container">

		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col mini-1 grid cols-1 gap-mini has-header has-footer">

				{{ HEADER }}

				<div class="ui col mini-1 pad-no">
					<div class="col-content overflow modal-content">

						{{ CONTENT }}

					</div>
				</div>

				{{ FOOTER }}

			</div>
		</div>

	</div>
</div>
--></code></pre>

		<button class="ui btn mini secondary" onclick="$('#modal-h-f').addClass('open size-med')">Preview</button>

		<?php include('modal-item-h-f.php'); ?>

	</article>

</section>