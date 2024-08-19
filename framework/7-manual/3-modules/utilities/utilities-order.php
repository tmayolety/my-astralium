<section>

	<?php include('7-manual/3-modules/utilities/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Order</h2>
		<p class="paragraphe-manual">
			{value} from 1 to 10.<br/>
			For {mq} references, go to <a class="link-manual" href="?Section=mediaquery">Media Query</a> 
		</p>
		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col sm-1 bg-no">
				<ul class="ui table table-manual size-mini resp">
					<li>
						<div class="col-200"><span>Global Order</span></div>
						<div><span><label>order-{value}</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Media Query Order</span></div>
						<div><span><label>order-{mq}-{value}</label></span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>

</section>