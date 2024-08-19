<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Group Collapse Horizontal</h2>
		<p class="paragraphe-manual">
			The Button Group must contain <label>ui</label> <label>btn-group</label> <label>collapse</label> <label>horizontal</label><br/>
			<a class="link-manual" href="?Section=button-base">Size</a> is defined on buttons and MUST be the same.
		</p>

		<h4 class="ui h4 mg-med font-semibold">Text only</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse horizontal">
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary colored">Colored</button>
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary active">Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse horizontal">
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored loading">Loading</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
		</div>	
	</article>


	<article>
		<h4 class="ui h4 mg-med font-semibold">Responsive Horizontal</h4>
		<p class="paragraphe-manual">
			For a horizontal responsiveness, Add the class <label>resp-horz</label>on the btn-group container.<br/>
			<a class="link-manual" href="?Section=button-base">Size</a> is defined on buttons and MUST be the same.
		</p>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse horizontal resp">
	<button class="ui btn med primary icon icon-only"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored loading">< {SVG} </button>
	<button class="ui btn med primary icon icon-only active"> {SVG} </button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse horizontal resp-horz">
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored loading">Loading</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
		</div>
	</article>


	<article>
		<h4 class="ui h4 mg-med font-semibold">Icon Only</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse horizontal">
	<button class="ui btn med primary icon icon-only"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored"> {SVG} </button>
	<button class="ui btn med primary icon icon-only">< {SVG} </button>
	<button class="ui btn med primary icon icon-only active"> {SVG} </button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse horizontal">
						<button class="ui btn med primary icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
					</div>
				</div>
			</div>
		</div>
	</article>


	<article>
		<h4 class="ui h4 mg-med font-semibold">Text + Icon</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse horizontal">
	<button class="ui btn med primary icon vertical"> {SVG} Default</button>
	<button class="ui btn med primary icon vertical colored"> {SVG} Colored</button>
	<button class="ui btn med primary icon vertical"> {SVG} Default</button>
	<button class="ui btn med primary icon vertical active"> {SVG} Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse horizontal">
						<button class="ui btn med primary icon vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Default</button>
						<button class="ui btn med primary icon vertical colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Colored</button>
						<button class="ui btn med primary icon vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Default</button>
						<button class="ui btn med primary icon vertical active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Active</button>
					</div>
				</div>
			</div>
		</div>	

	</article>





	<article>
		<h2 class="ui h2 mg-med font-bold">Group Collapse Vertical</h2>
		<p class="paragraphe-manual">
			The Button Group must contain <label>ui</label> <label>btn-group</label> <label>collapse</label> <label>vertical</label><br/>
			Size is defined by buttons and MUST be the same.
		</p>

		<h4 class="ui h4 mg-med font-semibold">Text only</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse vertical">
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary colored">Colored</button>
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary active">Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse vertical">
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
		</div>

	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Responsive Vertical</h4>
		<p class="paragraphe-manual">
			For a vertical responsiveness, Add the class <label>resp-vert</label>on the btn-group container.<br/>
		</p>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse vertical resp-vert">
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary">Default</button>
	<button class="ui btn med primary active">Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content h-mini-400">
					<div class="ui btn-group collapse vertical resp-vert">
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary">Default</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
		</div>

	</article>


	<article>


		<h4 class="ui h4 mg-med font-semibold">Icon Only</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse vertical">
	<button class="ui btn med primary icon icon-only"> {SVG} </button>
	<button class="ui btn med primary icon icon-only colored"> {SVG} </button>
	<button class="ui btn med primary icon icon-only">< {SVG} </button>
	<button class="ui btn med primary icon icon-only active"> {SVG} </button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse horizontal">
						<button class="ui btn med primary icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn med primary icon icon-only active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
					</div>
				</div>
			</div>
		</div>
		<br/><br/>

	</article>

	<article>

		<h4 class="ui h4 mg-med font-semibold">Text + Icon</h4>
<pre><code class="language-html"><!--
<div class="ui btn-group collapse vertical">
	<button class="ui btn med primary icon vertical"> {SVG} Default</button>
	<button class="ui btn med primary icon vertical colored"> {SVG} Colored</button>
	<button class="ui btn med primary icon vertical"> {SVG} Default</button>
	<button class="ui btn med primary icon vertical active"> {SVG} Active</button>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse vertical">
						<button class="ui btn med primary icon vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Default</button>
						<button class="ui btn med primary icon vertical colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Colored</button>
						<button class="ui btn med primary icon vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Default</button>
						<button class="ui btn med primary icon vertical active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Active</button>
					</div>
				</div>
			</div>
		</div>	

	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Rounded</h2>
		<p class="paragraphe-manual">
			The Button Group must contain <label>rounded</label> for rounded corner.
		</p>

<pre><code class="language-html"><!--
<div class="ui btn-group collapse rounded horizontal">
	<button class="ui btn med danger">Inactive</button>
	<button class="ui btn med danger active">Active</button>
	<button class="ui btn med primary colored">Colored</button>
	<button class="ui btn med primary active">Active</button>
</div>

<div class="ui col mini-1">
	<div class="col-content">
		<div class="ui btn-group collapse rounded vertical">
			<button class="ui btn mini h-60 icon-size-25 danger">{SVG}</button>
			<button class="ui btn mini h-60 icon-size-25 icon-only danger active">{SVG}</button>
			<button class="ui btn mini h-60 icon-size-25 icon-only primary colored">{SVG}</button>
			<button class="ui btn mini h-60 icon-size-25 icon-only primary active">{SVG}</button>
		</div>
	</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse rounded horizontal">
						<button class="ui btn med danger">Inactive</button>
						<button class="ui btn med danger active">Active</button>
						<button class="ui btn med primary colored">Colored</button>
						<button class="ui btn med primary active">Active</button>
					</div>
				</div>
			</div>
			<div class="ui col mini-1">
				<div class="col-content">
					<div class="ui btn-group collapse rounded vertical">
						<button class="ui btn mini h-60 icon-size-25 danger"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn mini h-60 icon-size-25 icon-only danger active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn mini h-60 icon-size-25 icon-only primary colored"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
						<button class="ui btn mini h-60 icon-size-25 icon-only primary active"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
					</div>
				</div>
			</div>
		</div>	
	</article>


</section>