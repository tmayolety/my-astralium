<section>

	<?php include('7-manual/3-modules/utilities/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">Width & Height</h2>		
		<p class="paragraphe-manual">
			{value} from 1 to 300 (in px).<br/>
		</p>
		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col sm-1 bg-no">
				<ul class="ui table table-manual size-mini resp">
					<li>
						<div class="col-200"><span>Width</span></div>
						<div><span><label>w-{value}</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Height</span></div>
						<div><span><label>h-{value}</label></span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>


	<article>
		<h2 class="ui h2 mg-med font-bold">Width & Height <small class="font-regular">[Media Query]</small></h2>		
		<p class="paragraphe-manual">
			{value} from 1 to 1920 (in px).<br/>
			For {mq} references, go to <a class="link-manual" href="?Section=mediaquery">Media Query</a> 
		</p>
		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col sm-1 bg-no">
				<ul class="ui table table-manual size-mini resp">
					<li>
						<div class="col-200"><span>Width MQ</span></div>
						<div><span><label>w-{mq}-{value}</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Height MQ</span></div>
						<div><span><label>h-{mq}-{value}</label></span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>

</section>