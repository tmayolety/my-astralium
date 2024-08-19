<section>

	<?php include('7-manual/3-modules/table/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Table on Grid - Type 1</h2>
		<p class="paragraphe-manual">
			Add the class <label>bg-no</label> to the {{ COLUMN }} and then, insert the {{ TABLE }}.
		</p>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
	<div class="ui col mini-1 bg-no">

		{{ TABLE }}

	</div>	
</div>
--></code></pre>	
		<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
			<div class="ui col mini-1 bg-no">
				<ul class="ui table size-sm">
					<li class="thead">
						<div class="col-200-min"><span>Column</span></div>
						<div class="col-120 align-middle-center color-bg-blue"><span>Column</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>



	<article>
		<h2 class="ui h2 mg-med font-bold">Table on Grid - Type 2</h2>
		<p class="paragraphe-manual">
			Add the class <label>in-column</label> to the {{ TABLE }}.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
	<div class="ui col mini-1">

		<ul class="ui table size-sm in-column"></ul>
		
	</div>	
</div>
--></code></pre>	
		<div class="ui grid type1 cols-mini-1 pad-no gap-mini">
			<div class="ui col mini-1">
				<ul class="ui table size-sm in-column">
					<li class="thead">
						<div class="col-200-min"><span>Column</span></div>
						<div class="col-120 align-middle-center color-bg-blue"><span>Column</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
					<li>
						<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
						<div class="col-120 align-middle-center"><span class="font-bold">2 145</span><span>Bars</span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>

</section>