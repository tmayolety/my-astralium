<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Column Overflow</h2>
		<p class="paragraphe-manual">
			You can add a Overflow (scrollbar) to the column with the class: <label>no-overflow</label>.<br/>
			The height will be responsive to the others Columns on the same Row.<br>
			But you can add a Height class <label>h-{value}</label> for a specific <a class="link-manual" href="?Section=utilities-width-height">Height</a>.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 col mini-1 gap-mini pad-xl">

	<div class="ui col mini-1 no-overflow h-150">
		
		{{ CONTENT }}

	</div>
	
</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-1 gap-mini pad-xl">
			<div class="ui col mini-1 no-overflow h-150">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
			</div>
		</div>

	</article>






	<article>
		<h2 class="ui h2 mg-med font-bold">Column no Background</h2>
		<p class="paragraphe-manual">
			You can make all the columns from a grid without background with the class <label>bg-no</label> on the Grid.<br/>
			You can make also remove the background from a specific Column with the class <label>bg-no</label> on the Column.<br/>
		</p>
<pre><code class="language-html"><!--
// ON GRID
<div class="ui grid type1 cols-mini-3 pad-xl gap-xl bg-no">
	<div class="ui col mini-1">Column</div>
	<div class="ui col mini-1">Column</div>
	<div class="ui col mini-1">Column</div>
</div>

// ON COLUMN
<div class="ui grid type1 cols-mini-3 pad-xl gap-xl">
	<div class="ui col mini-1 bg-no">Column</div>
	<div class="ui col mini-1">Column</div>
	<div class="ui col mini-1">Column</div>
</div>
--></code></pre>
		<h4 class="ui h4 mg-med font-bold">On Grid</h4>
		<div class="ui grid type1 cols-mini-3 pad-xl gap-xl bg-no">
			<div class="ui col mini-1">Column</div>
			<div class="ui col mini-1">Column</div>
			<div class="ui col mini-1">Column</div>
		</div>
		<h4 class="ui h4 mg-med font-bold">On Column</h4>
		<div class="ui grid type1 cols-mini-3 pad-xl gap-xl">
			<div class="ui col mini-1 bg-no">Column</div>
			<div class="ui col mini-1">Column</div>
			<div class="ui col mini-1">Column</div>
		</div>
	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Fit Content</h2>
		<p class="paragraphe-manual">
			The "GRID" is responsive (It will fit automaticaly to the full width available).<br/>
			But you can force it to fit his own content with the class <label>fit-content</label>
		</p>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-3 pad-xl gap-xl fit-content">
	<div class="ui col mini-1">Column</div>
	<div class="ui col mini-1">Column</div>
	<div class="ui col mini-1">Column</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-3 pad-xl gap-xl fit-content">
			<div class="ui col mini-1">Column</div>
			<div class="ui col mini-1">Column</div>
			<div class="ui col mini-1">Column</div>
		</div>
	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Hidden Column Fullscreen</h2>
		<p class="paragraphe-manual">
			First, the column must be <a class="link-manual" href="?Section=utilities-hidden-visible">Hidden</a>.<br/>
			For open it in Fullscreen, add to this column the class:<br/>
			<label>fullscreen-auto</label> <label>fullscreen-resp</label> <label>fullscreen-mini</label> <label>fullscreen-sm</label> <label>fullscreen-med</label> <label>fullscreen-lg</label> <label>fullscreen-xl</label>
		</p>
		<br/>

		<div class="ui grid type1 cols-mini-1 pad-no gap-xl">
			<div class="ui col mini-1 bg-no">
				<div class="col-content overflow">
					<button class="ui btn sm primary"
							onClick="$( '#button-fullscreen' ).toggleClass( 'fullscreen-sm' )">Open Hidden Column</button>
				</div>
			</div>
			<div 	class="ui col mini-1 hidden-sm h-mini-500 pad-xl middle-center" id="button-fullscreen"
					onClick="$( '#button-fullscreen' ).removeClass( 'fullscreen-sm' )">
				<i class="ui icon-size-40 icon-close-fullscreen color-fill-type-dark glow"><?php echo file_get_contents('3-modules/icons/close.svg'); ?></i>
				FULLSCREEN COLUMN
			</div>
		</div>
	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Draggable Column</h2>
		<div class="ui grid type1 cols-mini-3 gap-mini pad-mini">
			<div class="ui col mini-1 h-mini-200 draggable">
				<div class="draggable-btn"></div>
			</div>
		</div>
	</article>

</section>