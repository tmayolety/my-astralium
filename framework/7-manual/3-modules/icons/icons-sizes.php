<section>

	<?php include('7-manual/3-modules/icons/header.php'); ?>

	
	<article>
		<h2 class="ui h2 mg-med font-bold">Icon Sizes</h2>
		<p class="paragraphe-manual">
			Icon container must contain <label>ui</label> <label>icon-size-{value}</label><br/>
			Icon container with <a class="link-manual" href="?Section=mediaquery">Media Query</a>  must contain <label>ui</label> <label>icon-size-{mp}-{value}</label><br/>
			From 5 to 300 (Every 5px).
		</p>

<pre><code class="language-html"><!--
<i class="ui icon-size-10 color-fill-type-primary glow"> {SVG} </i>
<i class="ui icon-size-mini-10 color-fill-type-primary glow"> {SVG} </i>
--></code></pre>

		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-5"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-5</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-10"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-10</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-15"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-15</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-20"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-20</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-25"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-25</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-30"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-30</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-35"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-35</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-40"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-40</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-45"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-45</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-50"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-50</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-55"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-55</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-60"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-60</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-65"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-65</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-70"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-70</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-75"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-75</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-80"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-80</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-85"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-85</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-90"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-90</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-95"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-95</div>
			</li>
			<li>
				<div class="col-120"><i class="ui color-fill-type-primary glow icon-size-100"><?php echo file_get_contents('3-modules/icons/circle.svg'); ?></i></div>
				<div class="align-middle-left"><label>icon-size-100</div>
			</li>
		</ul>

	</article>

<section>


<style>
	[class*="icon-size"]{
		justify-self: center;
		margin-bottom: 0.7rem;
	}
</style>