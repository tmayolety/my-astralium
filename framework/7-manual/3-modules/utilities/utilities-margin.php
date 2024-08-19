<section>

	<?php include('7-manual/3-modules/utilities/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Margin</h2>		
		<p class="paragraphe-manual">
			{value} from 1 to 300 (in px).
		</p>
		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col sm-1 bg-no">
				<ul class="ui table table-manual size-mini resp">
					<li class="thead">
						<div class="col-200"><span>Direction</span></div>
						<div class="col-270"><span>Positive</span></div>
						<div><span>Negative</span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Top</span></div>
						<div class="col-270"><span><label>mg-top-{value}</label></span></div>
						<div><span><label>mg-top-{value}-neg</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Right</span></div>
						<div class="col-270"><span><label>mg-right-{value}</label></span></div>
						<div><span><label>mg-right-{value}-neg</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Bottom</span></div>
						<div class="col-270"><span><label>mg-bottom-{value}</label></span></div>
						<div><span><label>mg-bottom-{value}-neg</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Left</span></div>
						<div class="col-270"><span><label>mg-left-{value}</label></span></div>
						<div><span><label>mg-left-{value}-neg</label></span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>

	<article>
		<h2 class="ui h2 mg-med font-bold">Margin <small class="font-regular">[Media Query]</small></h2>		
		<p class="paragraphe-manual">
			{value} from 1 to 300 (in px).<br/>
			For {mq} references, go to <a class="link-manual" href="?Section=mediaquery">Media Query</a> 
		</p>
		<div class="ui grid type1 cols-1 pad-no gap-mini">
			<div class="ui col sm-1 bg-no">
				<ul class="ui table table-manual size-mini resp">
					<li class="thead">
						<div class="col-200"><span>Direction</span></div>
						<div class="col-270"><span>Positive</span></div>
						<div><span>Negative</span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Top</span></div>
						<div class="col-270"><span><label>mg-top-{mq}-{value}</label></span></div>
						<div><span><label>mg-top-{mq}-{value}-neg</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Right</span></div>
						<div class="col-270"><span><label>mg-right-{mq}-{value}</label></span></div>
						<div><span><label>mg-right-{mq}-{value}-neg</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Bottom</span></div>
						<div class="col-270"><span><label>mg-bottom-{mq}-{value}</label></span></div>
						<div><span><label>mg-bottom-{mq}-{value}-neg</label></span></div>
					</li>
					<li>
						<div class="col-200"><span>Margin Left</span></div>
						<div class="col-270"><span><label>mg-left-{mq}-{value}</label></span></div>
						<div><span><label>mg-left-{mq}-{value}-neg</label></span></div>
					</li>
				</ul>
			</div>
		</div>
	</article>

</section>