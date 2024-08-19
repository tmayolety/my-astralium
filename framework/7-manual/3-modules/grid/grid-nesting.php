<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Grid Nesting</h2>
		<p class="paragraphe-manual">
			Grid Nesting allow you the define a Column as a Grid.<br/>
			Just add on the desired column, the class <label>grid</label> and <label>cols-{mq}-{num}</label>.<br/>
			You can use the properties of the <a class="link-manual" href="?Section=grid-gap">Gap</a> and <a class="link-manual" href="?Section=grid-padding">Padding</a>, they will overwrite the properties define by the parent grid.<br/>
			They are no limit to nesting grid.<br/><br/>
			Note: All the Nested Grid keep the same <a class="link-manual" href="?Section=grid-types">Types</a> from a parent Grid.<br/>
			But you can redifine the Nested Grid with another Types
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-2 gap-xl pad-lg">
	<div class="ui col mini-1 grid type1 cols-mini-2 gap-no pad-mini">
		<div class="ui col mini-1 middle-center">...</div>
		<div class="ui col mini-1 middle-center">...</div>
		<div class="ui col mini-2 middle-center">...</div>
	</div>
	<div class="ui col mini-1 grid type1 cols-mini-2 gap-med">
		<div class="ui col mini-2 middle-center">...</div>
		<div class="ui col mini-2 middle-center">...</div>
	</div>
	<div class="ui col mini-2 grid type1 cols-mini-4 gap-xl pad-xl">
		<div class="ui col mini-1 middle-center">...</div>
		<div class="ui col mini-1 middle-center">...</div>
		<div class="ui col mini-1 middle-center">...</div>
		<div class="ui col mini-1 middle-center">...</div>
	</div>
</div>
--></code></pre>

		<br/>

		<div class="ui grid type1 cols-mini-2 gap-xl pad-lg">
			<div class="ui col mini-1 grid type1 cols-mini-2 gap-no pad-mini radius shadow">
				<div class="ui col mini-1 middle-center">Column</div>
				<div class="ui col mini-1 middle-center">Column</div>
				<div class="ui col mini-2 middle-center">Column</div>
			</div>
			<div class="ui col mini-1 grid type1 cols-mini-2 gap-med">
				<div class="ui col mini-2 middle-center radius shadow">Column<br/>Column<br/>Column<br/>Column</div>
				<div class="ui col mini-2 middle-center radius shadow">Column<br/>Column<br/>Column<br/>Column</div>
			</div>
			<div class="ui col mini-2 grid type1 cols-mini-4 gap-xl pad-xl">
				<div class="ui col mini-1 middle-center radius shadow">Column</div>
				<div class="ui col mini-1 middle-center radius shadow">Column</div>
				<div class="ui col mini-1 middle-center radius shadow">Column</div>
				<div class="ui col mini-1 middle-center radius shadow">Column</div>
			</div>
		</div>
	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Aligment Options on Nesting Grid</h2>
		<p class="paragraphe-manual">
			If you use a global <a class="link-manual" href="?Section=grid-nesting">Aligment</a> to the parent Grid, some Columns position will be wrong.<br/>
			You can fix it by adding the class <label>stretch</label> on the Nested grid.<br/><br/>
			You have some class for adjusting Columns position: <label>align-baseline</label> <label>align-center</label> <label>align-end</label>
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-6 gap-xl pad-xl middle-center">

	<div class="ui col mini-1 grid cols-mini-1 gap-med">
		<div class="ui col mini-1">Content</div>
		<div class="ui col mini-1">Content</div>
	</div>

	<div class="ui col mini-1 grid cols-mini-1 gap-med stretch">
		<div class="ui col mini-1">Content</div>
		<div class="ui col mini-1">Content</div>
	</div>

	<div class="ui col mini-1 grid cols-mini-1 gap-med align-baseline">
		<div class="ui col mini-1">Content</div>
		<div class="ui col mini-1">Content</div>
	</div>

	<div class="ui col mini-1 grid cols-mini-1 gap-med align-center">
		<div class="ui col mini-1">Content</div>
		<div class="ui col mini-1">Content</div>
	</div>

	<div class="ui col mini-1 grid cols-mini-1 gap-med align-end">
		<div class="ui col mini-1">Content</div>
		<div class="ui col mini-1">Content</div>
	</div>

	<div class="ui col mini-1">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.			
	</div>

</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-6 gap-xl pad-sm middle-center">

			<div class="ui col mini-1 bg-no pad-no">Default</div>
			<div class="ui col mini-1 bg-no pad-no">stretch</div>		
			<div class="ui col mini-1 bg-no pad-no">align-baseline</div>	
			<div class="ui col mini-1 bg-no pad-no">align-center</div>	
			<div class="ui col mini-1 bg-no pad-no">align-end</div>	
			<div class="ui col mini-1 bg-no pad-no">Flexible content</div>	

			<div class="ui col mini-1 grid cols-mini-1 gap-med">
				<div class="ui col mini-1">Content</div>
				<div class="ui col mini-1">Content</div>
			</div>

			<div class="ui col mini-1 grid cols-mini-1 gap-med stretch">
				<div class="ui col mini-1">Content</div>
				<div class="ui col mini-1">Content</div>
			</div>

			<div class="ui col mini-1 grid cols-mini-1 gap-med align-baseline">
				<div class="ui col mini-1">Content</div>
				<div class="ui col mini-1">Content</div>
			</div>

			<div class="ui col mini-1 grid cols-mini-1 gap-med align-center">
				<div class="ui col mini-1">Content</div>
				<div class="ui col mini-1">Content</div>
			</div>

			<div class="ui col mini-1 grid cols-mini-1 gap-med align-end">
				<div class="ui col mini-1">Content</div>
				<div class="ui col mini-1">Content</div>
			</div>

			<div class="ui col mini-1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.			
			</div>

		</div>

	</article>
	
</section>