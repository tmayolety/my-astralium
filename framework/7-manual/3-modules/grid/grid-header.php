<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">Grid Header</h2>
		<p class="paragraphe-manual">
			Before starting with the Grid Header, you MUST learn the <a class="link-manual" href="?Section=grid-nesting">Nesting Grid System</a>.<br/>
			The Grid Header MUST be a Nested Grid element.<br/>
			For using it, you must specify to the Grid it will have a Header. Add the class <label>has-header</label> to the Grid.<br/>
			This header will be consider has a Column, but it will take Full width of the Grid and add some visual style to it.<br/><br/>
			Note: The HEADER is the same for the Grid <a class="link-manual" href="?Section=grid-types">Types</a> 1 & 2.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-2 pad-lg gap-xl">

	<div class="ui col mini-2 grid cols-mini-2 gap-sm pad-lg has-header">

		<header class="ui col">
			<font>Header</font>
			<span class="gradients">
				<span class="gradient-left"></span>
				<span class="gradient-right"></span>
			</span>
			
			
		</header>

		<div class="ui col mini-1">...</div>
		<div class="ui col mini-1">...</div>

	</div>

</div>
--></code></pre>
		<br/>
		<div class="ui grid type1 cols-mini-2 pad-lg gap-xl">
			<div class="ui col mini-2 grid cols-mini-2 gap-med pad-lg has-header">
				<header class="ui col">
					<font>Header</font>
					<span class="gradients">
						<span class="gradient-left"></span>
						<span class="gradient-right"></span>
					</span>
					
					
				</header>
				<div class="ui col mini-1">Column</div>
				<div class="ui col mini-1">Column</div>
			</div>
		</div>
	</article>







	<article>
		<h2 class="ui h2 mg-med font-bold">Column Header Definition</h2>
		<p class="paragraphe-manual">
			On your column, add the HEADER and The GRID.<br/>
			You can change Height, Text size, and Color.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 gap-med">
	<div class="ui col mini-1 has-col-header-med">
		<header class="text-size-6">HEADER</header>
		[[ GRID ]]
	</div>
</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-2 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-lg">
				<header class="text-size-10">Header</header>
				<div class="ui grid type1 cols-mini-2 pad-sm gap-no align-middle-center">
					<div class="ui col mini-1">Column</div>
					<div class="ui col mini-1">Column</div>
				</div>
			</div>
		</div>

	</article>







	<article>
		<h4 class="ui h4 mg-med font-semibold">Column Header Sizes</h4>
		<p class="paragraphe-manual">			
			You MUST apply the class <label>has-col-header-{sizes}</label> on the container Column and add the suffix: <label>mini</label> <label>sm</label> <label>med</label> <label>lg</label> <label>xl</label>.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 gap-med">
	<div class="ui col mini-1 has-col-header-med">
		<header class="text-size-6">HEADER</header>
		[[ GRID ]]
	</div>
</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-5 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-mini">
				<header class="text-size-10">Mini</header>				
			</div>
			<div class="ui col mini-1 has-col-header-sm">
				<header class="text-size-10">Small</header>			
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-10">Medium</header>			
			</div>
			<div class="ui col mini-1 has-col-header-lg">
				<header class="text-size-10">Large</header>			
			</div>
			<div class="ui col mini-1 has-col-header-xl">
				<header class="text-size-10">X-Large</header>			
			</div>
		</div>

	</article>







	<article>		
		<h4 class="ui h4 mg-med font-semibold">Column Header Text sizes</h4>
		<p class="paragraphe-manual">
			Define the <a class="link-manual" href="?Section=typography-text">Text Sizes</a> adding the class on the HEADER.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 gap-med">
	<div class="ui col mini-1 has-col-header-med">
		<header class="text-size-6">HEADER</header>
		[[ GRID ]]
	</div>
</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-6 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-6">text-size-6</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-8">text-size-8</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-10">text-size-10</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12">text-size-12</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-14">text-size-14</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-16">text-size-16</header>
			</div>
		</div>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Column Header Colors</h4>
		<p class="paragraphe-manual">
			You can apply on this Column Header every <a class="link-manual" href="?Section=colors-types">Background Colors</a> you want.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 gap-med">
	<div class="ui col mini-1 has-col-header-med">
		<header class="text-size-12 color-bg-type-primary">HEADER</header>
		[[ GRID ]]
	</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-7 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-primary">Primary</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-secondary">Secondary</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-success">Success</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-danger">Danger</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-warning">Warning</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-warning2">Warning2</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 color-bg-type-info">Info</header>
			</div>
		</div>
	</article>







	<article>
		<h4 class="ui h4 mg-med font-semibold">Column Header Alignment</h4>
		<p class="paragraphe-manual">
			By default, the Text will be center.
			But you can align the text to the Left or Right with the class: <label>align-txt-left</label> or <label>align-txt-right</label>
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-3 pad-sm gap-med">
	<div class="ui col mini-1">
		<header class="col-header size-med align-txt-left">LEFT</header>
		[[ GRID ]]
	</div>
	<div class="ui col mini-1">
		<header class="col-header size-med">CENTER (Default)</header>
		[[ GRID ]]
	</div>
	<div class="ui col mini-1">
		<header class="col-header size-med align-txt-right">RIGHT</header>
		[[ GRID ]]
	</div>
</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-3 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 align-txt-left">LEFT</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12">CENTER (Default)</header>
			</div>
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 align-txt-right">RIGHT</header>
			</div>
		</div>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Column Header Font</h4>
		<p class="paragraphe-manual">
			You can apply different <a class="link-manual" href="?Section=typographys">Typography</a> class on this Column Header.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 gap-med">
	<div class="ui col mini-2 has-col-header-med">
		<header class="text-size-12 font-light">HEADER</header>
		[[ GRID ]]
	</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-10 pad-sm gap-med">
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-light">Light</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-regular">Regular</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-semibold">Semibold</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-bold">Bold</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-black">Black</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-lightitalic">Light Italic</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-regularitalic">Regular Italic</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-semibolditalic">Semibold Italic</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-bolditalic">Bold Italic</header>
			</div>
			<div class="ui col mini-2 has-col-header-med">
				<header class="text-size-12 font-blackitalic">Black Italic</header>
			</div>
		</div>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Column Header Tools</h4>
		<p class="paragraphe-manual">
			You can add some Button to the Header.<br/>
			Just add inside the HEADER a container with the class: <label>col-header--tools</label><br/>
			Then, insert button(s) inside.
		</p>

<pre><code class="language-html"><!--
		<div class="ui grid type1 cols-mini-4 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 align-txt-left">
					HEADER
					<div class="col-header--tools">
						<button class="ui btn mini icon icon-only link"> { SVG } </button>
						<button class="ui btn mini icon icon-only link"> { SVG } </button>
					</div>
				</header>
				[[ GRID ]]
			</div>
		</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-4 pad-sm gap-med">
			<div class="ui col mini-1 has-col-header-med">
				<header class="text-size-12 align-txt-left">
					HEADER
					<div class="col-header--tools">
						<button class="ui btn mini icon icon-only link"><?php echo file_get_contents('3-modules/icons/close.svg'); ?></button>
						<button class="ui btn mini icon icon-only link"><?php echo file_get_contents('3-modules/icons/reset.svg'); ?></button>
					</div>
				</header>
			</div>
		</div>
	</article>

</section>