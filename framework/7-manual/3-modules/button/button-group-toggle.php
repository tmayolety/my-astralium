<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Group Toogle</h2>
		<p class="paragraphe-manual">
			The Button Group must contain <label>ui</label> <label>btn-group</label> <label>toggle</label> <label>{orientation}</label><br/>
			Orientation class must be <label>vertical</label>  or <label>horizontal</label><br/>
			<a class="link-manual" href="?Section=button-base">Size</a> is defined by buttons and MUST be the same.
		</p>
	</article>






	<article>
		<h4 class="ui h4 mg-med font-semibold">Text only (Horizontal)</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group toggle horizontal">
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary colored">Colored</button>
	<button class="ui btn med primary colored loading">Loading</button>
	<button class="ui btn med primary active">Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary colored loading">Loading</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
		</div>
		<br/><br/>

		<h4 class="ui h4 mg-med font-semibold">Text only (Vertical)</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group toggle vertical">
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary colored">Colored</button>
	<button class="ui btn med primary colored loading">Loading</button>
	<button class="ui btn med primary active">Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group toggle vertical">
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary colored loading">Loading</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
		</div>
	</article>








	<article>
		<h4 class="ui h4 mg-med font-semibold">Icon Only (Horizontal)</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group toggle horizontal">
	<button class="ui btn med primary icon icon-only"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored loading"> {SVG} </button>
	<button class="ui btn med primary icon icon-only active"> {SVG} </button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn med primary icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only colored loading"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
					</div>
				</div>
			</div>
		</div>
		<br/><br/>

		<h4 class="ui h4 mg-med font-semibold">Icon Only (Vertical)</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group toggle horizontal">
	<button class="ui btn med primary icon icon-only"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored loading">< {SVG} </button>
	<button class="ui btn med primary icon icon-only active"> {SVG} </button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group toggle vertical">
						<button class="ui btn med primary icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only colored loading"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
					</div>
				</div>
			</div>
		</div>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Icon (Horizontal)</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group toggle horizontal">
	<button class="ui btn mini primary icon vertical"> {SVG} Default</button>
	<button class="ui btn mini primary icon vertical colored"> {SVG} Colored</button>
	<button class="ui btn mini primary icon vertical colored loading"> {SVG} Loading</button>
	<button class="ui btn mini primary icon vertical active"> {SVG} Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group toggle horizontal">
						<button class="ui btn mini primary icon vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Default</button>
						<button class="ui btn mini primary icon vertical colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Colored</button>
						<button class="ui btn mini primary icon vertical colored loading"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Loading</button>
						<button class="ui btn mini primary icon vertical active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Active</button>
					</div>
				</div>
			</div>
		</div>
		<br/><br/>

<pre><code class="language-html"><!--
<div class="ui btn-group toggle vertical">
	<button class="ui btn mini primary icon vertical"> {SVG} Default</button>
	<button class="ui btn mini primary icon vertical colored"> {SVG} Colored</button>
	<button class="ui btn mini primary icon vertical colored loading"> {SVG} Loading</button>
	<button class="ui btn mini primary icon vertical active"> {SVG} Active</button>
</div>
--></code></pre>

		<h4 class="ui h4 mg-med font-semibold">Text + Icon (Vertical)</h4>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group toggle vertical">
						<button class="ui btn mini primary icon vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Default</button>
						<button class="ui btn mini primary icon vertical colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Colored</button>
						<button class="ui btn mini primary icon vertical colored loading"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Loading</button>
						<button class="ui btn mini primary icon vertical active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Active</button>
					</div>
				</div>
			</div>
		</div>

	</article>
	
</section>