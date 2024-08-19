<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>

	<!-- GRID DEFINITION -->
	<article>
		<h2 class="ui h2 mg-med font-bold">Grid Definition</h2>
		<p class="paragraphe-manual">
			Grid container must contain those class: <label>ui</label> <label>grid</label> <label>{type}</label> <label>cols-{mq}-{num}</label> <label>{gap}</label><br/><br/>
			You MUST define the number of Column on the Grid <label>cols-{mq}-{num}</label>, from 1 to 12 for every <a class="link-manual" href="?Section=mediaquery">Media Query</a> required<br/><br/>
			You MUST define a <a class="link-manual" href="?Section=grid-gap">Gap</a> class on the Grid container.
			</div>
		</p>
		<p class="paragraphe-manual">
			Depend of the Scheme, you can add Shadow and Border-radius on the Column.<br/>
			Add the class <label>radius</label> <label>shadow</label>
		</p>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-3 gap-lg pad-xl">
	<div class="ui col mini-1 radius shadow">Column</div>
	<div class="ui col mini-1 radius shadow">Column</div>
	<div class="ui col mini-1 radius shadow">Column</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-3 gap-lg pad-xl">
			<div class="ui col mini-1 radius shadow">Column</div>
			<div class="ui col mini-1 radius shadow">Column</div>
			<div class="ui col mini-1 radius shadow">Column</div>
		</div>
	</article>





	<!-- MEDIA QUERY -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Media Query</h4>
		<p class="paragraphe-manual">
			Note:<br/>
			- {mini} is the default <a class="link-manual" href="?Section=mediaquery">Media Query</a> and it will be apply across all devices (Except Phone).<br/>
			- Phone will be automatically resize at full row (but can be overwrite with the {phone} mediaquery).<br/>
			- IMPORTANT! The higher Mediaquery class defined, overwrite every smaller ones.
			- It's not necessary to define on every column 
			</div>
		</p>
		<br/>

		<ul class="ui table table-manual size-mini resp">
			<li class="thead">
				<div class="col-200"><span>Media Query</span></div>
				<div><span>Class on Column</span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Phone (default)</span></div>
				<div><span><label>cols-phone-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Mini</span></div>
				<div><span><label>cols-mini-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Small</span></div>
				<div><span><label>cols-sm-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Medium</span></div>
				<div><span><label>cols-med-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Large</span></div>
				<div><span><label>cols-lg-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">X-Large</span></div>
				<div><span><label>cols-xl-{num}</label></span></div>
			</li>
		</ul>
		<br/>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-2 cols-sm-2 cols-med-4 cols-lg-6 cols-xl-12 gap-lg pad-med">
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-2 cols-sm-3 cols-med-4 cols-lg-6 cols-xl-12 gap-lg pad-med middle-center">
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
		</div>
	</article>

</section>