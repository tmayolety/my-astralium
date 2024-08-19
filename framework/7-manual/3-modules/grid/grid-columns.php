<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>

	<!-- COLUMN DEFINITION -->
	<article>
		<h2 class="ui h2 mg-med font-bold">Column Definition</h2>
		<p class="paragraphe-manual">Column must contain class:</p>
		<ul class="list-manual">
			<li>Base definition: <label>ui</label> <label>col</label> <label>{mq}-{num}</label></li>
			<li>Size of the Column for every <a class="link-manual" href="?Section=mediaquery">Media Query</a><br/>
			{num} from 1 to 12</li>
		</ul>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-3 gap-lg pad-med">
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-3 gap-lg pad-med middle-center">
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
			<div class="ui col mini-1 radius shadow"><label>mini-1</label></div>
		</div>
	</article>





	<!-- MEDIA QUERY -->
	<article>
		<h4 class="ui h4 mg-med font-semibold">Media Query</h4>
		<ul class="list-manual">
			<li><label>phone</label> is the default <a class="link-manual" href="?Section=mediaquery">Media Query</a> and it will be apply across all devices (Except Phone).</li>
			<li>It's not necessary to define on every column</li>
		</ul>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-phone-2 cols-mini-6 gap-lg">
	<div class="ui col phone-1 mini-6 sm-3 med-3 lg-3 xl-2">...</div>
	<div class="ui col phone-1 mini-3 sm-3 med-3 lg-3 xl-2">...</div>
	<div class="ui col mini-3 sm-6 med-6 lg-2 xl-2">...</div>
	<div class="ui col phone-1 mini-2 sm-6 med-2 lg-2 xl-2">...</div>
	<div class="ui col phone-1 mini-2 sm-3 med-2 lg-2 xl-2">...</div>
	<div class="ui col mini-2 sm-3 med-2 lg-6 xl-2"><...</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-phone-2 cols-mini-6 gap-lg pad-med middle-center">
			<div class="ui col phone-1 mini-6 sm-3 med-3 lg-3 xl-2 radius shadow"><label>phone-3 mini-6 sm-3 med-3 lg-3 xl-2</label></div>
			<div class="ui col phone-1 mini-3 sm-3 med-3 lg-3 xl-2 radius shadow"><label>phone-3 mini-3 sm-3 med-3 lg-3 xl-2</label></div>
			<div class="ui col mini-3 sm-6 med-6 lg-2 xl-2 radius shadow"><label>mini-3 sm-6 med-6 lg-2 xl-2</label></div>
			<div class="ui col phone-1 mini-2 sm-6 med-2 lg-2 xl-2 radius shadow"><label>phone-3 mini-2 sm-6 med-2 lg-2 xl-2</label></div>
			<div class="ui col phone-1 mini-2 sm-3 med-2 lg-2 xl-2 radius shadow"><label>phone-3 mini-2 sm-3 med-2 lg-2 xl-2</label></div>
			<div class="ui col mini-2 sm-3 med-2 lg-6 xl-2 radius shadow"><label>mini-2 sm-3 med-2 lg-6 xl-2</label></div>
		</div>

		<br/>

		<ul class="ui table table-manual size-mini resp">
			<li class="thead">
				<div class="col-200"><span>Media Query</span></div>
				<div><span>Class on Column</span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Phone (default)</span></div>
				<div><span><label>phone-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Mini</span></div>
				<div><span><label>mini-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Small</span></div>
				<div><span><label>sm-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Medium</span></div>
				<div><span><label>med-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Large</span></div>
				<div><span><label>lg-{num}</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">X-Large</span></div>
				<div><span><label>xl</label></span></div>
			</li>
		</ul>

	</article>

</section>