<section>

	<?php include('7-manual/3-modules/utilities/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Position <small class="font-regular">[Media Query]</small></h2>
		<p class="paragraphe-manual">
			{value} from 1 to 200 (in px).<br/>
			For {mq} references, go to <a class="link-manual" href="?Section=mediaquery">Media Query</a> 
		</p>
		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col sm-1 bg-no">
				<ul class="ui table table-manual size-mini resp">
					<li>
						<div class="col-200"><span>Top</span></div>
						<div  class="col-270"><span><label>pos-top-{mq}-{value}</label></span></div>
						<div><span><label>pos-top-{mq}-{value}-negative</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Right</span></div>
						<div  class="col-270"><span><label>pos-right-{mq}-{value}</label></span></div>
						<div><span><label>pos-right-{mq}-{value}-negative</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Bottom</span></div>
						<div  class="col-270"><span><label>pos-bottom-{mq}-{value}</label></span></div>
						<div><span><label>pos-bottom-{mq}-{value}-negative</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Left</span></div>
						<div  class="col-270"><span><label>pos-left-{mq}-{value}</label></span></div>
						<div><span><label>pos-left-{mq}-{value}-negative</label></span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>

</section>