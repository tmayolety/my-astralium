<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">Col Content Options</h2>
		<p class="paragraphe-manual">
			If you have so trouble to Manage the layout of items inside a Column (moslty due to the Grid Aligment properties),<br/>
			you can add a container <label>ui</label> <label>col-content</label><br/><br/>
			By Default, the "Content Col" fit his own content, but you can make it responsive to the Column Width and Height using the class: <label>w-resp</label> and <label>h-resp</label><br/><br/>
			Note: For a responsive Width, you MUST Add the class <label>reset-w-align</label> on the Parent Column.<br/>
			It reset the forced to center of the "col-content".
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-4 gap-no middle-center">

	<div class="ui col mini-1 h-150">
		<div class="ui col-content color-bg-type-primary">Col Content</div>
	</div>

	<div class="ui col mini-1 h-150 reset-w-align">
		<div class="ui col-content w-resp color-bg-type-primary">Col Content</div>
	</div>

	<div class="ui col mini-1 h-150">
		<div class="ui col-content h-resp color-bg-type-primary">Col Content</div>
	</div>

	<div class="ui col mini-1 h-150 reset-w-align">
		<div class="ui col-content w-resp h-resp color-bg-type-primary">Col Content</div>
	</div>

</div>
--></code></pre>

		<div class="ui grid type1 cols-mini-4 gap-no middle-center">

			<div class="ui col mini-1 h-150">
				<div class="ui col-content color-bg-type-primary">Col Content</div>
			</div>

			<div class="ui col mini-1 h-150 reset-w-align">
				<div class="ui col-content w-resp color-bg-type-primary">Col Content</div>
			</div>

			<div class="ui col mini-1 h-150">
				<div class="ui col-content h-resp color-bg-type-primary">Col Content</div>
			</div>

			<div class="ui col mini-1 h-150 reset-w-align">
				<div class="ui col-content w-resp h-resp color-bg-type-primary">Col Content</div>
			</div>

			<div class="ui col mini-1 pad-med">Default</div>
			<div class="ui col mini-1 pad-med"><label>w-resp</label></div>
			<div class="ui col mini-1 pad-med"><label>h-resp</label></div>
			<div class="ui col mini-1 pad-med"><label>w-resp h-resp</label></div>
		</div>

	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Col Content Overflow</h2>
		<p class="paragraphe-manual">
			Insert the content inside a {{ COL-CONTENT }} container and add the class: <label>overflow</label>.<br>
			The height will be responsive to the others Columns on the same Row.<br>
			But you can add a Height class <label>h-{value}</label> for a specific <a class="link-manual" href="?Section=utilities-width-height">Height</a>.
		</p>

<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-1 pad-no gap-mini">

	<div class="ui col mini-1 bg-no">

		<div class="ui col-content overflow h-150">

			{{ CONTENT }}

		</div>

	</div>
	
</div>
--></code></pre>

		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui grid cols-mini-1 col mini-1 gap-mini pad-no">
				<div class="ui col mini-1 bg-no">
					<div class="ui col-content overflow h-150">
						<ul class="ui table size-sm resp">
							<li>
								<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
								<div class="col-120 align-middle-center"><span class="font-bold">2.5</span><span>%</span></div>
							</li>
							<li>
								<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
								<div class="col-120 align-middle-center"><span class="font-bold">2.5</span><span>%</span></div>
							</li>
							<li>
								<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
								<div class="col-120 align-middle-center"><span class="font-bold">2.5</span><span>%</span></div>
							</li>
							<li>
								<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
								<div class="col-120 align-middle-center"><span class="font-bold">2.5</span><span>%</span></div>
							</li>
							<li>
								<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
								<div class="col-120 align-middle-center"><span class="font-bold">2.5</span><span>%</span></div>
							</li>
							<li>
								<div class="col-200-min"><span>Lorem ipsum dolor sit amet</span></div>
								<div class="col-120 align-middle-center"><span class="font-bold">2.5</span><span>%</span></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</article>

</section>