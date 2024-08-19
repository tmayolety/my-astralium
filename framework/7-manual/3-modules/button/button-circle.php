<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">Circle Button</h2>
		<p class="paragraphe-manual">
			Circle Button must contain the base class: <label>ui</label> <label>btn</label> <label>size-{num}</label> <label>circle</label> <label>rounded</label> <label>{type}</label><br/>
			Size class are from 1 to 20.
		</p>
<pre><code class="language-html"><!--
<button class="ui btn size-10 circle rounded primary"></button>
--></code></pre>
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-100 align-middle-center"><button class="ui btn circle size-5 rounded primary active"></button></div>
				<div><span><label>size-5</label></span></div>
			</li>
			<li>
				<div class="col-100 align-middle-center"><button class="ui btn circle size-10 rounded primary active"></button></div>
				<div><span><label>size-10</label></span></div>
			</li>
			<li>
				<div class="col-100 align-middle-center"><button class="ui btn circle size-15 rounded primary active"></button></div>
				<div><span><label>size-15</label></span></div>
			</li>
			<li>
				<div class="col-100 align-middle-center"><button class="ui btn circle size-20 rounded primary active"></button></div>
				<div><span><label>size-20</label></span></div>
			</li>
		</ul>
	</article>

	<article>

		<h4 class="ui h4 mg-med font-semibold">States</h4>
		<p class="paragraphe-manual">
			They are 3 States class: <label>active</label> <label>border</label> and <label>feedback</label><br/>
			They can be combine together.
		</p>
<pre><code class="language-html"><!--
<button class="ui btn size-10 circle rounded primary"></button>
<button class="ui btn size-10 circle rounded primary active"></button>
<button class="ui btn size-10 circle rounded primary border"></button>
<button class="ui btn size-10 circle rounded primary border feedback"></button>
<button class="ui btn size-10 circle rounded primary active border"></button>
<button class="ui btn size-10 circle rounded primary active border feedback"></button>
--></code></pre>

		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-70 align-middle-center"><button class="ui btn circle size-10 rounded primary"></button></div>
				<div><span>Default</span></div>
			</li>
			<li>
				<div class="col-70 align-middle-center"><button class="ui btn circle size-10 rounded primary active"></button></div>
				<div><span><label>active</label></span></div>
			</li>
			<li>
				<div class="col-70 align-middle-center"><button class="ui btn circle size-10 rounded primary border"></button></div>
				<div><span><label>border</label></span></div>
			</li>
			<li>
				<div class="col-70 align-middle-center"><button class="ui btn circle size-10 rounded primary border feedback"></button></div>
				<div><span><label>border</label> <label>feedback</label></span></div>
			</li>
			<li>
				<div class="col-70 align-middle-center"><button class="ui btn circle size-10 rounded primary active border"></button></div>
				<div><span><label>active</label> <label>border</label></span></div>
			</li>
			<li>
				<div class="col-70 align-middle-center"><button class="ui btn circle size-10 rounded primary active border feedback"></button></div>
				<div><span><label>active</label> <label>border</label> <label>feedback</label></span></div>
			</li>
		</ul>
	</article>


</section>