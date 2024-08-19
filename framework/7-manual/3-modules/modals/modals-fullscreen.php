<section>

	<?php include('7-manual/3-modules/modals/header.php'); ?>

	<article>
		<h4 class="ui h4 mg-med font-semibold">Sizes</h4>
		<p class="paragraphe-manual">
			The Modal must contain: <label>ui</label> <label>modal</label>.<br/>
			The Grid must be inside the <label>modal-container</label><br/>
			Note: You can only use 1 column.
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


		<ul class="ui table table-manual size-mini resp">
			<li class="thead">
				<div class="col-120"><span>Size</span></div>
				<div class="col-200"><span>Class</span></div>
				<div><span>Preview</span></div>
			</li>
			<li>
				<div class="col-120"><span>Mini</span></div>
				<div class="col-200"><span><label>size-mini</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-mini')">Mini</button></div>
			</li>
			<li>
				<div class="col-120"><span>Small</span></div>
				<div class="col-200"><span><label>size-sm</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-sm')">Small</button></div>
			</li>
			<li>
				<div class="col-120"><span>Medium</span></div>
				<div class="col-200"><span><label>size-med</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-med')">Medium</button></div>
			</li>
			<li>
				<div class="col-120"><span>Large</span></div>
				<div class="col-200"><span><label>size-lg</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-lg')">Large</button></div>
			</li>
			<li>
				<div class="col-120"><span>X-large</span></div>
				<div class="col-200"><span><label>size-xl</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-xl')">X-Large</button></div>
			</li>
			<li>
				<div class="col-120"><span>Full</span></div>
				<div class="col-200"><span><label>size-full</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-full')">Fullscreen</button></div>
			</li>
		</ul>

		<?php include('modals-item.php'); ?>

	</article>




	<article>
		<h4 class="ui h4 mg-med font-semibold">Fullscreen Background</h4>
		<p class="paragraphe-manual">
			Add the class <label>fullscreen</label> to the Modal. 
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
				<div class="col-120"><span>Fullscreen</span></div>
				<div class="col-200"><span><label>fullscreen</label></span></div>
				<div><button class="ui btn mini secondary" onclick="$('.ui.modal').addClass('open size-full fullscreen')">Preview</button></div>
			</li>
		</ul>
	</article>




	<article>
		<h4 class="ui h4 mg-med font-semibold">Header & Footer</h4>
		<p class="paragraphe-manual">
			If you want to use a "HEADER" for the modal, add the class: <label>has-header</label> to the "GRID" who contain the HEADER<br/>
			If you want to use a "FOOTER" for the modal, add the class: <label>has-footer</label> to the "GRID" who contain the FOOTER<br/>
		</p>
<pre><code class="language-html"><!--
<div class="ui modal">
	<div class="modal-container">

		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col mini-1 grid cols-1 gap-mini has-header has-footer">

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
	</article>

</section>