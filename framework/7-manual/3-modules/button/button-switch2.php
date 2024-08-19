<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Button Switch 1</h2>
		<p class="paragraphe-manual">
			The Button Group must contain <label>ui</label> <label>btn-group</label> <label>switch-2</label> <label>{size}</label><br/>
			Available Sizes class: <label>mini</label> <label>sm</label> <label>med</label> <label>lg</label> <label>xl</label>
		</p>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Default</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group switch-2 med">
	<button class="ui btn success">FWD</button>
	<button class="ui btn danger active">BCK</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group switch-2 med">
						<button class="ui btn success">FWD</button>
						<button class="ui btn danger active">BCK</button>
					</div>
				</div>
			</div>
		</div>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Loading</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group switch-2 med">
	<button class="ui btn primary loading colored">I</button>
	<button class="ui btn danger">O</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group switch-2 med">
						<button class="ui btn primary loading colored">I</button>
						<button class="ui btn danger">O</button>
					</div>
				</div>
			</div>
		</div>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Rounded</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group switch-2 rounded med">
	<button class="ui btn success active">I</button>
	<button class="ui btn danger">O</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group switch-2 rounded med">
						<button class="ui btn success">I</button>
						<button class="ui btn danger">O</button>
					</div>
				</div>
			</div>
		</div>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">With Icon</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group switch-2 med">
	<button class="ui btn primary icon icon-only"> {SVG} </button>
	<button class="ui btn primary icon icon-only"> {SVG} </button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group switch-2 med">
						<button class="ui btn primary icon icon-only"><?php echo file_get_contents('3-modules/icons/arrow-1-top.svg'); ?></button>
						<button class="ui btn primary icon icon-only"><?php echo file_get_contents('3-modules/icons/arrow-1-bottom.svg'); ?></button>
					</div>
					<div class="ui btn-group switch-2 med">
						<button class="ui btn success icon icon-only colored"><?php echo file_get_contents('3-modules/icons/reset.svg'); ?></button>
						<button class="ui btn danger icon icon-only colored"><?php echo file_get_contents('3-modules/icons/close.svg'); ?></button>
					</div>
				</div>
			</div>
		</div>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">With Text</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group switch-2 med">
	<button class="ui btn success">FWD</button>
	<div><span>Default</span></div>
	<button class="ui btn danger">BCK</button>
</div>

<div class="ui btn-group switch-2 med">
	<button class="ui btn success">FWD</button>
	<div class="yellow"><span>Yellow</span></div>
	<button class="ui btn danger">BCK</button>
</div>

<div class="ui btn-group switch-2 med">
	<button class="ui btn success">FWD</button>
	<div class="red"><span>Red</span></div>
	<button class="ui btn danger">BCK</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group switch-2 med">
						<button class="ui btn success">FWD</button>
						<div><span>Default</span></div>
						<button class="ui btn danger">BCK</button>
					</div>
					<div class="ui btn-group switch-2 med">
						<button class="ui btn success">FWD</button>
						<div class="yellow"><span>Yellow</span></div>
						<button class="ui btn danger">BCK</button>
					</div>
					<div class="ui btn-group switch-2 med">
						<button class="ui btn success">FWD</button>
						<div class="red"><span>Red</span></div>
						<button class="ui btn danger">BCK</button>
					</div>
				</div>
			</div>
		</div>
	</article>

</section>