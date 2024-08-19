<section>

	<?php include('7-manual/3-modules/table/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Fit Content</h2>
		<p class="paragraphe-manual">
			The "TABLE" is responsive (It will fit automaticaly to the full width available).<br/>
			But you can force it to fit his content with the class <label>fit-content</label>
		</p>
<pre><code class="language-html"><!--
<ul class="ui table size-mini fit-content">
	<li>
		<div class="col-200"><span>Col-200</span></div>
		<div class="col-100"><span>Col-100</span></div>
		<div><span>Column responsive</span></div>
	</li>
</ul>
--></code></pre>
		<ul class="ui table size-mini fit-content">
			<li>
				<div class="col-200"><span>Col-200</span></div>
				<div class="col-100"><span>Col-100</span></div>
				<div><span>Column responsive</span></div>
			</li>
			<li>
				<div class="col-200"><span>Col-200</span></div>
				<div class="col-100"><span>Col-100</span></div>
				<div><span>Column responsive</span></div>
			</li>
			<li>
				<div class="col-200"><span>Col-200</span></div>
				<div class="col-100"><span>Col-100</span></div>
				<div><span>Column responsive</span></div>
			</li>
		</ul>

	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Typography</h2>
<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div class="col-250"><span class="font-light">Light</span></div>
	</li>
</ul>
--></code></pre>
		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-250"><span>Primary Font</span></div>
				<div><span>Class</span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-light">Light</span></div>
				<div><span><label>font-light</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-lightitalic">Light Italic</span></div>
				<div><span><label>font-lightitalic</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-regular">Regular</span></div>
				<div><span><label>font-regular</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-regularitalic">Regular Italic</span></div>
				<div><span><label>font-regularitalic</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-semibold">Semi Bold</span></div>
				<div><span><label>font-semibold</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-semibolditalic">Semi Bold Italic</span></div>
				<div><span><label>font-semibolditalic</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-bold">Bold</span></div>
				<div><span><label>font-bold</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-bolditalic">Bold Italic</span></div>
				<div><span><label>font-bolditalic</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-black">Black</span></div>
				<div><span><label>font-black</label></span></div>
			</li>
			<li>
				<div class="col-250"><span class="font-blackitalic">Black Italic</span></div>
				<div><span><label>font-blackitalic</label></span></div>
			</li>
		</ul>
		<br/>

		<h4 class="ui h4 mg-med font-semibold">Various Typography on the same Column</h4>
<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div><span class="font-bold">Bold text</span> <span class="font-light">Light text</span></div>
	</li>
</ul>
--></code></pre>
		<ul class="ui table table-manual size-mini">
			<li>
				<div><span class="font-bold">Bold text</span><span class="font-light">Light text</span></div>
			</li>
		</ul>
	</article>

</section>