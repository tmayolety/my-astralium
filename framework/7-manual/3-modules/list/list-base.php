<section>

	<?php include('7-manual/3-modules/list/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">List Base</h2>
		<p class="paragraphe-manual">
			The List must contain those class: <label>ui</label> <label>list</label> <label>{size}</label><br/>
			For the Size go to <a class="link-manual" href="?Section=list-sizes">List Sizes</a>
		</p>

<pre><code class="language-html"><!--
<ul class="ui list size-mini">
	<li>
		<div><button class="ui btn mini primary w-40">ON</button></div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
	</li>
	<li>
		<div><button class="ui btn mini primary w-40">OFF</button></div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
	</li>
</ul>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn sm success w-50">OFF</button></div>
							<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
						</li>
						<li>
							<div><button class="ui btn sm success w-50">OFF</button></div>
							<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
						</li>
						<li>
							<div><button class="ui btn sm success w-50">OFF</button></div>
							<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</article>


	<article>
		<h4 class="ui h4 mg-med font-semibold">With Icon</h4>
		<p class="paragraphe-manual">
			<span style="color:red;">NOT FINISH</span>
		</p>

<pre><code class="language-html"><!--
<ul class="ui list size-mini">
	<li>
		<div><button class="ui btn med success w-50 icon icon-only"> {SVG} </button></div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
	</li>
	<li>
		<div><button class="ui btn med success w-50 icon icon-only"> {SVG} </button></div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
	</li>
</ul>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn med success w-50 icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button></div>
							<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
						</li>
						<li>
							<div><button class="ui btn med success w-50 icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button></div>
							<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
						</li>
						<li>
							<div><button class="ui btn med success w-50 icon icon-only"><?php echo file_get_contents('3-modules/icons/tripping.svg'); ?></button></div>
							<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</article>

</section>