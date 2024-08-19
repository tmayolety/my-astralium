<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Grid Align</h2>
		<p class="paragraphe-manual">
			Align class can be apply on the Grid.<br/>
			Every Children Column on that Grid will have the same aligment.<br/>
			Note: Only affect Columns who are direct children of the Grid with the aligment class.
		</p>
		<ul class="ui table table-manual size-mini resp">
			<li class="thead">
				<div class="col-200"><span>Alignment</span></div>
				<div><span>Class on Grid</span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Top Left</span></div>
				<div><span><label>top-left</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Top Center</span></div>
				<div><span><label>top-center</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Top right</span></div>
				<div><span><label>top-right</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Middle Left</span></div>
				<div><span><label>middle-left</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Middle Center</span></div>
				<div><span><label>middle-center</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Middle Right</span></div>
				<div><span><label>middle-right</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Bottom Left</span></div>
				<div><span><label>bottom-left</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Bottom Center</span></div>
				<div><span><label>bottom-center</label></span></div>
			</li>
			<li>
				<div class="col-200"><span class="font-bold">Bottom Right</span></div>
				<div><span><label>bottom-right</label></span></div>
			</li>
		</ul>

	</article>

	<article>
		<h4 class="ui h4 mg-med font-semibold">Global align on Grid</h4>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-3 gap-med middle-center">
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
	<div class="ui col mini-1">...</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-3 gap-med middle-center">
			<div class="ui col mini-1 h-mini-150 radius shadow">Middle Center</div>
			<div class="ui col mini-1 h-mini-150 radius shadow">Middle Center</div>
			<div class="ui col mini-1 h-mini-150 radius shadow">Middle Center</div>
		</div>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Specific align on Column</h4>
		<p class="paragraphe-manual">Align class can be apply on Column for overwrite the global Grid Align.</p>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-3 gap-med middle-center">
	<div class="ui col mini-1 top-left">...</div>
	<div class="ui col mini-1 top-center">...</div>
	<div class="ui col mini-1 top-right">...</div>
	<div class="ui col mini-1 middle-left">...</div>
	<div class="ui col mini-1 middle-center">...</div>
	<div class="ui col mini-1 middle-right">...</div>
	<div class="ui col mini-1 bottom-left">...</div>
	<div class="ui col mini-1 bottom-center">...</div>
	<div class="ui col mini-1 bottom-right">...</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-3 pad-lg gap-med middle-center">
			<div class="ui col mini-1 h-mini-150 radius shadow top-left">Top Left</div>
			<div class="ui col mini-1 h-mini-150 radius shadow top-center">Top Center</div>
			<div class="ui col mini-1 h-mini-150 radius shadow top-right">Top Right</div>
			<div class="ui col mini-1 h-mini-150 radius shadow middle-left">Middle Left</div>
			<div class="ui col mini-1 h-mini-150 radius shadow middle-center">Middle Center</div>
			<div class="ui col mini-1 h-mini-150 radius shadow middle-right">Middle Right</div>
			<div class="ui col mini-1 h-mini-150 radius shadow bottom-left">Bottom Left</div>
			<div class="ui col mini-1 h-mini-150 radius shadow bottom-center">Bottom Center</div>
			<div class="ui col mini-1 h-mini-150 radius shadow bottom-right">Bottom Right</div>
		</div>
	</article>


</section>