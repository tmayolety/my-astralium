<section>

	<?php include('7-manual/3-modules/table/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Table Base</h2>
		<p class="paragraphe-manual">
			"UL" represent the Table and must contain <label>ui</label> <label>table</label> and <label>{size}</label><br/>
			For the Size go to <a class="link-manual" href="?Section=table-sizes">List Sizes</a>.<br/><br/>
			"LI" represent a Row.<br/><br/>
			"DIV" represent a Column.<br/>
			It's recomanded to always use Width class on every column, except one who need to be responsive for adjust the global Table width.
		</p>
<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div class="col-200"><span>...</span></div>
		<div class="col-100"><span>...</span></div>
		<div><span>...</span></div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table size-mini">
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
		<h4 class="ui h4 mg-med font-semibold">Table Header</h4>
		<p class="paragraphe-manual">Add the class <label>thead</label> on the first "LI" of the Table.</p>

<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li class="thead">
		<div class="col-200"><span>...</span></div>
		<div class="col-100"><span>...</span></div>
		<div><span>...</span></div>
	</li>
	<li>
		<div class="col-200"><span>...</span></div>
		<div class="col-100"><span>...</span></div>
		<div><span>...</span></div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table size-mini">
			<li class="thead">
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
		<h4 class="ui h4 mg-med font-semibold">Table Footer</h4>
		<p class="paragraphe-manual">Add the class <label>tfoot</label> on the last "LI" of the Table.</p>

<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div class="col-200"><span>...</span></div>
		<div class="col-100"><span>...</span></div>
		<div><span>...</span></div>
	</li>
	<li class="tfoot">
		<div class="col-200"><span>...</span></div>
		<div class="col-100"><span>...</span></div>
		<div><span>...</span></div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table size-mini">
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
			<li class="tfoot">
				<div class="col-200"><span>Col-200</span></div>
				<div class="col-100"><span>Col-100</span></div>
				<div><span>Column responsive</span></div>
			</li>
		</ul>

	</article>

</section>