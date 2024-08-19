<section>

	<?php include('7-manual/3-modules/list/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">States</h2>
		<p class="paragraphe-manual">
			The List Buttons have 3 states (Inactive, Loading, Active).<br/>
			For combine them with an additional "Alert" status, add the class: <label>alert</label>
		</p>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Inactive</h4>
<pre><code class="language-html"><!--
<ul class="ui list size-mini">
	<li>
		<div><button class="ui btn mini success w-50">OFF</button></div>
		<div>Button Off</div>
	</li>
	<li>
		<div><button class="ui btn mini success w-50 alert">OFF</button></div>
		<div>Button Off + Alert</div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-300">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn mini success w-50">OFF</button></div>
							<div>Button Inactive</div>
						</li>
					</ul>
				</div>
				<div><span>Default</span></div>
			</li>
			<li>
				<div class="col-300">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn mini success w-50 alert">OFF</button></div>
							<div>Button Inactive + Alert</div>
						</li>
					</ul>
				</div>
				<div><span><label>alert</label></span></div>
			</li>
		</ul>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Loading</h4>
<pre><code class="language-html"><!--
<ul class="ui list size-mini">
	<li>
		<div><button class="ui btn mini success w-50 loading colored">ON</button></div>
		<div>Button Loading</div>
	</li>
	<li>
		<div><button class="ui btn mini success w-50 loading colored alert">ON</button></div>
		<div>Button Loading</div>
	</li>
</ul>
--></code></pre>		
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-300">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn mini success w-50 loading colored">ON</button></div>
							<div>Button Loading</div>
						</li>
					</ul>
				</div>
				<div><span><label>loading</label> <label>colored</label></span></div>
			</li>
			<li>
				<div class="col-300">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn mini success w-50 loading colored alert">ON</button></div>
							<div>Button Loading + Alert</div>
						</li>
					</ul>
				</div>
				<div><span><label>loading</label> <label>colored</label> <label>alert</label></span></div>
			</li>
		</ul>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Active</h4>
<pre><code class="language-html"><!--
<ul class="ui list size-mini">
	<li>
		<div><button class="ui btn mini success w-50 active">ON</button></div>
		<div>Button Active</div>
	</li>
	<li>
		<div><button class="ui btn mini success w-50 active alert">ON</button></div>
		<div>Button Active + Alert</div>
	</li>
</ul>
--></code></pre>		
		<ul class="ui table table-manual size-mini resp">
			<li>
				<div class="col-300">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn mini success w-50 active">ON</button></div>
							<div>Button Active</div>
						</li>
					</ul>
				</div>
				<div><span><label>active</label></span></div>
			</li>
			<li>
				<div class="col-300">
					<ul class="ui list size-mini">
						<li>
							<div><button class="ui btn mini success w-50 active alert">ON</button></div>
							<div>Button Active + Alert</div>
						</li>
					</ul>
				</div>
				<div><span><label>active</label> <label>alert</label></span></div>
			</li>
		</ul>

	</article>

</section>