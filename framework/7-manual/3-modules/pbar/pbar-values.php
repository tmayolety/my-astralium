<section>

	<?php include('7-manual/3-modules/pbar/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Values</h2>
		<p class="paragraphe-manual">
			The Progress Bar can contain those Value: <label>value-1</label> <label>value-2</label> <label>value-3</label><br/>
			You CAN'T mix then together.
		</p>
	</article>


	<article>
		<h4 class="ui h4 mg-med font-semibold">Value 1</h4>
		<span style="color:red">Bug in Horizontal in a Table, must be fix !</span>
<pre><code class="language-html"><!--
<div class="ui pbar size-mini horizontal value-1">
	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
		<ul class="pbar--value">
			<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
		</ul>
		<ul class="pbar--value">
			<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
		</ul>
		<ul class="pbar--value">
			<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
		</ul>
		<ul class="pbar--value">
			<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
		</ul>
	</div>
</div>
--></code></pre>

		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-1/2 align-center">Horizontal</div>
				<div class="col-1/2 align-center">Vertical</div>
			</li>
			<li>
				<div class="col-1/2 align-center">
					<div class="ui pbar size-mini horizontal value-1">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-1/2 align-center">
					<div class="ui pbar size-mini vertical value-1 h-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/2 align-center"><span><label>horizontal</label> <label>value-1</label></span></div>
				<div class="col-1/2 align-center"><span><label>vertical</label> <label>value-1</label></span></div>
			</li>
		</ul>

	</article>







	<article>
		<h4 class="ui h4 mg-med font-semibold">Value 2</h4>
<pre><code class="language-html"><!--
<div class="ui pbar size-mini horizontal value-2">
	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
		<ul class="pbar--value">
			<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
		</ul>
		<ul class="pbar--value">
			<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
		</ul>
		<ul class="pbar--value">
			<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
		</ul>
		<ul class="pbar--value">
			<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
		</ul>
	</div>
</div>
--></code></pre>

		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-1/2 align-center">Horizontal</div>
				<div class="col-1/2 align-center">Vertical</div>
			</li>
			<li>
				<div class="col-1/2 align-center">
					<div class="ui pbar size-mini horizontal value-2">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-1/2 align-center">
					<div class="ui pbar size-mini vertical value-2 h-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:6%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:15%;"><div>Max</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:82%;"><div>Min</div></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:90%;"><div>Max</div></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/2 align-center"><span><label>horizontal</label> <label>value-2</label></span></div>
				<div class="col-1/2 align-center"><span><label>vertical</label> <label>value-2</label></span></div>
			</li>
		</ul>

	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Value 3</h4>
		<p class="paragraphe-manual">
			For the Horizontal, you must use the style "left" on the value.
		</p>
<pre><code class="language-html"><!--
<ul class="ui table table-manual size-mini">
	<li class="thead">
		<div class="col-1/1 align-center">Horizontal</div>
	</li>
	<li>
		<div class="col-1/1 align-center h-50">
			<div class="ui pbar size-mini horizontal value-3">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
					<ul class="pbar--value">
						<li class="value-yellow" style="flex-basis:15%;left:10%"></li>
					</ul>
					<ul class="pbar--value">
						<li class="value-red" style="flex-basis:15%;left:80%"></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-1/1 align-center"><span><label>horizontal</label> <label>value-3</label></span></div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-1/1 align-center">Horizontal</div>
			</li>
			<li>
				<div class="col-1/1 align-center h-50">
					<div class="ui pbar size-mini horizontal value-3">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:15%;left:10%"></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:15%;left:80%"></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/1 align-center"><span><label>horizontal</label> <label>value-3</label></span></div>
			</li>
		</ul>
		<br/><br/>
		<p class="paragraphe-manual">
			For the Vertical, you must use the style "bottom" on the value.
		</p>
<pre><code class="language-html"><!--
<ul class="ui table table-manual size-mini">
	<li class="thead">
		<div class="col-1/1 align-center">Vertical</div>
	</li>
	<li>
		<div class="col-1/1 align-center">
			<div class="ui pbar size-mini vertical value-3 h-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
					<ul class="pbar--value">
						<li class="value-yellow" style="flex-basis:15%;bottom:10%"></li>
					</ul>
					<ul class="pbar--value">
						<li class="value-red" style="flex-basis:15%;bottom:80%"></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-1/1 align-center"><span><label>vertical</label> <label>value-3</label></span></div>
	</li>
</ul>
--></code></pre>

		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-1/1 align-center">Vertical</div>
			</li>
			<li>
				<div class="col-1/1 align-center">
					<div class="ui pbar size-mini vertical value-3 h-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="pbar--value">
								<li class="value-yellow" style="flex-basis:15%;bottom:10%"></li>
							</ul>
							<ul class="pbar--value">
								<li class="value-red" style="flex-basis:15%;bottom:80%"></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/1 align-center"><span><label>vertical</label> <label>value-3</label></span></div>
			</li>
		</ul>

	</article>

</section>