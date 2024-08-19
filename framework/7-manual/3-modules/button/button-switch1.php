<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Button Switch 1</h2>
		<p class="paragraphe-manual">
			The Button Group must contain <label>ui</label> <label>btn</label> <label>switch</label> <label>{switchType}</label> <label>{color}</label> <label>{size}</label> <label>{width}</label><br/><br/>
			Switch Type: For 1 Color (active/inactive) use the class: <label>switch-1clr</label><br/>
			Switch Type: For 2 Colors use the class: <label>switch-2clr</label><br/><br/>
			<a class="link-manual" href="?Section=button-base">Size</a> is defined by the button.<br/>		
			The Switch 1 is not responsive, so you MUST define a <a class="link-manual" href="?Section=utilities-width-height">Width</a>.
		</p>

<pre><code class="language-html"><!--
<button class="ui btn switch switch-1clr color-bg-type-success med w-150" onClick="$(this).toggleClass('active')">
	<div class="active">Active</div>
	<div class="inactive">Inactive</div>
</button>

<button class="ui btn switch switch-2clr color-bg-type-primary med w-150" onClick="$(this).toggleClass('active color-bg-type-warning2')">
	<div class="active">Warning</div>
	<div class="inactive">Primary</div>
</button>
--></code></pre>

		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1 align-middle-center">
				<div class="col-content">
					<button class="ui btn switch switch-1clr color-bg-type-success med w-150" onClick="$(this).toggleClass('active')">
						<div class="active">Active</div>
						<div class="inactive">Inactive</div>
					</button>

					<br/>

					<button class="ui btn switch switch-2clr color-bg-type-primary med w-150" onClick="$(this).toggleClass('active color-bg-type-warning2')">
						<div class="active">Warning</div>
						<div class="inactive">Primary</div>
					</button>
				</div>
			</div>
		</div>

	</article>

</section>