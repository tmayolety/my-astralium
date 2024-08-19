<section>

	<?php include('7-manual/3-modules/table/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Columns</h2>
		<p class="paragraphe-manual">
			Columns in the Table are automatically responsive.<br/>
			But it's highly recommanded to define a size on every Columns and keep one without any size (For be the responsive Column).
		</p>
	</article>




	<article>
		<h4 class="ui h4 mg-med font-regular">Column Width in Pixel</h4>
		<p class="paragraphe-manual">
			You can add a width on the Column with the class: <label>col-{$value}</label><br/>
			{Value} is in pixel from 10 to 600 (every 10).
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
		<h4 class="ui h4 mg-med font-regular">Column Width in Percentage</h4>
		<p class="paragraphe-manual">You can define a width with percentage using <label>col-{num}/{num}</label> (12 is the maximum).</p>
<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div class="col-1/6"><span>Col-1/6</span></div>
		<div class="col-3/6"><span>Col-3/6</span></div>
		<div><span>Column responsive</span></div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table size-mini">
			<li>
				<div class="col-1/6"><span>Col-1/6</span></div>
				<div class="col-3/6"><span>Col-3/6</span></div>
				<div class="col-2/6"><span>Column responsive</span></div>
			</li>
		</ul>

	</article>






	<article>
		<h4 class="ui h4 mg-med semibold-bold">Column Min-width</h4>
		<p class="paragraphe-manual">
			You can define a minimum Width on a Column for preventing a resize, using <label>col-{$value}-min</label> from 10 to 600 (every 10).<br/>
			If the content of the Table is larger than the Column width, a scrollbar will appear automatically on the Table.
		</p>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-sm-1 gap-xl">

	<div class="ui col sm-1 bg-no">

		<div class="col-content overflow">

			<ul class="ui table size-mini">
				<li>
					<div class="col-200 col-200-min"><span>Col-200</span></div>
					<div class="col-100"><span>Col-100</span></div>
					<div class="col-400-min"><span>Column 400 min</span></div>
				</li>
			</ul>

		</div>

	</div>
--></code></pre>

		<div class="ui grid type1 cols-sm-1 gap-xl">

			<div class="ui col sm-1 bg-no">

				<div class="col-content overflow">
					<ul class="ui table size-mini">
						<li>
							<div class="col-200 col-200-min"><span>Col-200</span></div>
							<div class="col-100"><span>Col-100</span></div>
							<div class="col-400-min"><span>Column 400 min</span></div>
						</li>
						<li>
							<div class="col-200 col-200-min"><span>Col-200</span></div>
							<div class="col-100"><span>Col-100</span></div>
							<div class="col-400-min"><span>Column 400 min</span></div>
						</li>
						<li>
							<div class="col-200 col-200-min"><span>Col-200</span></div>
							<div class="col-100"><span>Col-100</span></div>
							<div class="col-400-min"><span>Column 400 min</span></div>
						</li>
					</ul>
				</div>

			</div>

		</div>

	</article>




	<article>
		<h4 class="ui h4 mg-med font-semibold">SingleLine Column</h4>
		<p class="paragraphe-manual">
			You can specify to the Table, to be Singleline on every Column.<br/>
			Just add on the Table the class: <label>singleline</label>
			The text will be cut on every Column where the text overflow with (...).
		</p>
<pre><code class="language-html"><!--
<ul class="ui table size-mini singleline">
	<li>
		<div class="col-200"><span>Col-200</span></div>
		<div><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
	</li>
</ul>
--></code></pre>
		<h4 class="ui h4 mg-med">Without Singleline</h4>
		<ul class="ui table size-mini">
			<li>
				<div class="col-200"><span>Col-200</span></div>
				<div><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
			</li>
		</ul>
		<br/>

		<h4 class="ui h4 mg-med">With Singleline</h4>
		<ul class="ui table size-mini singleline">
			<li>
				<div class="col-200"><span>Col-200</span></div>
				<div><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
			</li>
		</ul>

	</article>



	<article>
		<h2 class="ui h2 mg-med font-bold">Icon on Column</h2>
<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div>
			<i class="ui icon-size-20 color-fill-type-primary"> {SVG} </i>
			<span class="color-text-type-primary">Primary</span>
		</div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table size-mini">
			<li>
				<div>
					<i class="ui icon-size-20"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i>
					<span>Default</span>
				</div>
				<div>
					<i class="ui icon-size-20 color-fill-type-primary"><?php echo file_get_contents('3-modules/icons/triangle.svg'); ?></i>
					<span class="color-text-type-primary">Primary</span>
				</div>
				<div>
					<i class="ui icon-size-20 color-fill-type-success"><?php echo file_get_contents('3-modules/icons/square.svg'); ?></i>
					<span class="color-text-type-success">Success</span>
				</div>
				<div>
					<i class="ui icon-size-20 color-fill-type-danger"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i>
					<span class="color-text-type-danger">Danger</span>
				</div>
				<div>
					<i class="ui icon-size-20 color-fill-type-warning"><?php echo file_get_contents('3-modules/icons/triangle.svg'); ?></i>
					<span class="color-text-type-warning">Warning</span>
				</div>
				<div>
					<i class="ui icon-size-20 color-fill-type-warning2"><?php echo file_get_contents('3-modules/icons/square.svg'); ?></i>
					<span class="color-text-type-warning2">Warning 2</span>
				</div>
				<div>
					<i class="ui icon-size-20 color-fill-type-info"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i>
					<span class="color-text-type-info">Info</span>
				</div>
			</li>
		</ul>

	</article>

	
</section>