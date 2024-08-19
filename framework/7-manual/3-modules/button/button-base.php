<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">Button Base</h2>
		<p class="paragraphe-manual">
			The Button must contain <label>ui</label> <label>btn</label> <label>{type}</label> and <label>{size}</label> class.
		</p>
<pre><code class="language-html"><!--
<button class="ui btn primary sm">Button</button>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<button class="ui btn primary sm">Button</button>
				</div>
			</div>
		</div>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Types</h4>
		<p class="paragraphe-manual">
			Types class are: <label>primary</label> <label>secondary</label> <label>success</label> <label>warning</label> <label>danger</label> <label>info</label> <label>link</label>
		</p>
<pre><code class="language-html"><!--
// INACTIVE (Default)
<button class="ui btn mini primary">Primary</button>
<button class="ui btn mini secondary">Secondary</button>
<button class="ui btn mini success">Success</button>
<button class="ui btn mini warning">Warning</button>
<button class="ui btn mini danger">Danger</button>
<button class="ui btn mini info">Info</button>
<button class="ui btn mini link">Link</button>

// INACTIVE COLORED
<button class="ui btn mini colored primary">Primary</button>
<button class="ui btn mini colored secondary">Secondary</button>
<button class="ui btn mini colored success">Success</button>
<button class="ui btn mini colored warning">Warning</button>
<button class="ui btn mini colored danger">Danger</button>
<button class="ui btn mini colored info">Info</button>
<button class="ui btn mini colored link">Link</button>

// ACTIVE
<button class="ui btn mini active primary">Primary</button>
<button class="ui btn mini active secondary">Secondary</button>
<button class="ui btn mini active success">Success</button>
<button class="ui btn mini active warning">Warning</button>
<button class="ui btn mini active danger">Danger</button>
<button class="ui btn mini active info">Info</button>
<button class="ui btn mini active link">Link</button>
--></code></pre>
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-150"><span>Inactive</span></div>
				<div>
					<span>
						<button class="ui btn mini gutter-sm primary">Primary</button>
						<button class="ui btn mini gutter-sm secondary">Secondary</button>
						<button class="ui btn mini gutter-sm success">Success</button>
						<button class="ui btn mini gutter-sm warning">Warning</button>
						<button class="ui btn mini gutter-sm warning2">Warning 2</button>
						<button class="ui btn mini gutter-sm danger">Danger</button>
						<button class="ui btn mini gutter-sm info">Info</button>
						<button class="ui btn mini gutter-sm link">Link</button>
					</span>
				</div>
			</li>
			<li>
				<div class="col-150"><span>Inactive Colored</span></div>
				<div>
					<span>
						<button class="ui btn mini gutter-sm colored primary">Primary</button>
						<button class="ui btn mini gutter-sm colored secondary">Secondary</button>
						<button class="ui btn mini gutter-sm colored success">Success</button>
						<button class="ui btn mini gutter-sm colored warning">Warning</button>
						<button class="ui btn mini gutter-sm colored warning2">Warning 2</button>
						<button class="ui btn mini gutter-sm colored danger">Danger</button>
						<button class="ui btn mini gutter-sm colored info">Info</button>
						<button class="ui btn mini gutter-sm colored link">Link</button>
					</span>
				</div>
			</li>
			<li>
				<div class="col-150"><span>Active</span></div>
				<div>
					<span>
						<button class="ui btn mini gutter-sm active primary">Primary</button>
						<button class="ui btn mini gutter-sm active secondary">Secondary</button>
						<button class="ui btn mini gutter-sm active success">Success</button>
						<button class="ui btn mini gutter-sm active warning">Warning</button>
						<button class="ui btn mini gutter-sm active warning2">Warning 2</button>
						<button class="ui btn mini gutter-sm active danger">Danger</button>
						<button class="ui btn mini gutter-sm active info">Info</button>
						<button class="ui btn mini gutter-sm active link">Link</button>
					</span>
				</div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Sizes</h4>
		<p class="paragraphe-manual">
			Sizes class are: <label>x-mini</label> <label>mini</label> <label>sm</label> <label>med</label> <label>lg</label> <label>xl</label> <label>xl2</label> <label>xl3</label>
		</p>
<pre><code class="language-html"><!--
<button class="ui btn primary x-mini">X-Mini</button>
<button class="ui btn primary mini">Mini</button>
<button class="ui btn primary sm">Small</button>
<button class="ui btn primary med">Medium</button>
<button class="ui btn primary lg">Large</button>
<button class="ui btn primary xl">X-Large</button>
<button class="ui btn primary xl2">X-Large2</button>
<button class="ui btn primary xl3">X-Large3</button>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<button class="ui btn primary gutter-sm x-mini">X-Mini</button>
					<button class="ui btn primary gutter-sm mini">Mini</button>
					<button class="ui btn primary gutter-sm sm">Small</button>
					<button class="ui btn primary gutter-sm med">Medium</button>
					<button class="ui btn primary gutter-sm lg">Large</button>
					<button class="ui btn primary gutter-sm xl">X-Large</button>
					<button class="ui btn primary gutter-sm xl2">X-Large2</button>
					<button class="ui btn primary gutter-sm xl3">X-Large3</button>
				</div>
			</div>
		</div>
	</article>




	<article>
		<h4 class="ui h4 mg-med font-semibold">With Icon</h4>
		<p class="paragraphe-manual">
			You must add the class: <label>icon</label> on the button.
		</p>
<pre><code class="language-html"><!--
// ICON + TEXT
<button class="ui btn mini primary icon"> {SVG} Button</button>

// ICON + TEXT [VERTICAL]
<button class="ui btn mini primary icon vertical"> {SVG} Button</button>

// ICON only
<button class="ui btn mini primary icon icon-only"> {SVG} </button>
--></code></pre>		
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-180">
					<button class="ui btn mini icon primary"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Button</button>
				</div>
				<div><span><label>icon</label></span></div>
			</li>
			<li>
				<div class="col-180">
					<button class="ui btn mini icon primary vertical"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>Button</button>
				</div>
				<div><span><label>icon</label> <label>vertical</label></span></div>
			</li>
			<li>
				<div class="col-180">
					<button class="ui btn mini icon primary icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button>
				</div>
				<div><span><label>icon</label> <label>icon-only</label></span></div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Gutter</h4>
		<p class="paragraphe-manual">
			For controling space between buttons, add class:<br/>
			<label>gutter-mini</label> <label>gutter-sm</label> <label>gutter-med</label> <label>gutter-lg</label> <label>gutter-xl</label>
		</p>
<pre><code class="language-html"><!--
<button class="ui btn med primary font-lcd">27.5</button>
--></code></pre>
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-150"><span>Gutter Mini</span></div>
				<div>
					<button class="ui btn mini primary gutter-mini">Button</button>
					<button class="ui btn mini primary gutter-mini">Button</button>
					<button class="ui btn mini primary gutter-mini">Button</button>
					<button class="ui btn mini primary gutter-mini">Button</button>
				</div>
			</li>
			<li>
				<div class="col-150"><span>Gutter Small</span></div>
				<div>
					<button class="ui btn mini primary gutter-sm">Button</button>
					<button class="ui btn mini primary gutter-sm">Button</button>
					<button class="ui btn mini primary gutter-sm">Button</button>
					<button class="ui btn mini primary gutter-sm">Button</button>
				</div>
			</li>
			<li>
				<div class="col-150"><span>Gutter Medium</span></div>
				<div>
					<button class="ui btn mini primary gutter-med">Button</button>
					<button class="ui btn mini primary gutter-med">Button</button>
					<button class="ui btn mini primary gutter-med">Button</button>
					<button class="ui btn mini primary gutter-med">Button</button>
				</div>
			</li>
			<li>
				<div class="col-150"><span>Gutter Large</span></div>
				<div>
					<button class="ui btn mini primary gutter-lg">Button</button>
					<button class="ui btn mini primary gutter-lg">Button</button>
					<button class="ui btn mini primary gutter-lg">Button</button>
					<button class="ui btn mini primary gutter-lg">Button</button>
				</div>
			</li>
			<li>
				<div class="col-150"><span>Gutter X-Large</span></div>
				<div>
					<button class="ui btn mini primary gutter-xl">Button</button>
					<button class="ui btn mini primary gutter-xl">Button</button>
					<button class="ui btn mini primary gutter-xl">Button</button>
					<button class="ui btn mini primary gutter-xl">Button</button>
				</div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Loading</h4>
		<p class="paragraphe-manual">
			For loading button, you must add the class: <label>loading</label> <label>colored</label> and <label>{type}</label> on the button.<br/>
			The button will be inactive.
		</p>
<pre><code class="language-html"><!--
<button class="ui btn sm loading colored primary">Loading</button>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<button class="ui btn sm loading colored primary">Loading</button>
				</div>
			</div>
		</div>		
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Reponsive</h4>
		<p class="paragraphe-manual">
			You must add the class: <label>resp</label> on the button.<br/>
			Only use it in a <a class="link-manual" href="?Section=table-base">Table</a>.
		</p>
<pre><code class="language-html"><!--
<ul class="ui table size-mini">
	<li>
		<div class="col-150">
			<button class="ui btn mini resp">Button</button>
		</div>
		<div>...</div>
	</li>
	<li>
		<div class="col-150 pad-no">
			<button class="ui btn mini resp radius-no">Button</button>
		</div>
		<div>...</div>
	</li>
</ul>
--></code></pre>
	
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-150"><button class="ui btn mini primary resp">Button</button></div>
				<div class="col-150"><span><label>resp</label></span></div>
				<div></div>
			</li>
			<li>
				<div class="col-150 pad-no"><button class="ui btn mini primary radius-no resp">Button</button></div>
				<div class="col-150"><span><label>resp</label> <label>radius-no</label></div>
				<div><span><label>pad-no</label> on the parent "LI"</span></div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Radius</h4>
		<p class="paragraphe-manual">
			For a rounded button, add: <label>rounded</label><br/>
			For a no radius button, add: <label>radius-no</label><br/><br/>
			Note: Rounded not working with "icon vertical".
		</p>
<pre><code class="language-html"><!--
<button class="ui btn mini primary rounded">Button</button>
<button class="ui btn mini primary radius-no">Button</button>
--></code></pre>
	
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-150"><button class="ui btn mini primary rounded">Button</button></div>
				<div><span><label>rounded</label></span></div>
			</li>
			<li>
				<div class="col-150"><button class="ui btn mini primary radius-no">Button</button></div>
				<div><span><label>radius-no</label></span></div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">LCD Typography</h4>
		<p class="paragraphe-manual">
			For a LCD typography, add the class <label>font-lcd</label> to the Button.
		</p>
<pre><code class="language-html"><!--
<button class="ui btn med primary font-lcd">27.5</button>
--></code></pre>
	
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-150"><button class="ui btn med primary font-lcd">27.5</button></div>
				<div><span><label>font-lcd</label></span></div>
			</li>
		</ul>
	</article>

</section>