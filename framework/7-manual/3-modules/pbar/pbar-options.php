<section>

	<?php include('7-manual/3-modules/pbar/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Options</h2>
		<p class="paragraphe-manual">
			The Progress Bar is customizable with those class: <label>no-bg</label> <label>divider</label> <label>label</label> <label>reverse</label><br/>
			You can mix them together.<br/><br/>
			They are compatible with <a class="link-manual" href="?Section=pbar-values">Values</a>.
		</p>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">No background</h4>
		<p class="paragraphe-manual">
			For removing the Background, add the class <label>no-bg</label> on the Progress Bar. 
		</p>
<pre><code class="language-html"><!--
<div class="ui pbar horizontal size-mini no-bg">
	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
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
					<div class="ui pbar horizontal size-mini no-bg">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-1/2 align-center">
					<div class="ui pbar vertical size-mini no-bg h-260">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/2 align-center"><span><label>horizontal</label> <label>no-bg</label></span></div>
				<div class="col-1/2 align-center"><span><label>vertical</label> <label>no-bg</label></span></div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Divider</h4>
		<p class="paragraphe-manual">
			For divide the Progressbar, add the class <label>divider</label><br/>
			You load the specific "pbar--label-divider" container.
		</p>
<pre><code class="language-html"><!--
<div class="ui pbar horizontal size-mini divider">
	<div class="pbar--container">
		<ul class="ui pbar--label-divider">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
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
					<div class="ui pbar horizontal size-mini divider">
						<div class="pbar--container">
							<ul class="ui pbar--label-divider">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-1/2 align-center">
					<div class="ui pbar vertical size-mini divider h-250">
						<div class="pbar--container">
							<ul class="ui pbar--label-divider">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/2 align-center"><span><label>horizontal</label> <label>divider</label></span></div>
				<div class="col-1/2 align-center"><span><label>vertical</label> <label>divider</label></span></div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Label</h4>
		<p class="paragraphe-manual">
			For divide the Progressbar, add the class <label>label</label><br/>
			You load the specific "pbar--label" container.
		</p>
<pre><code class="language-html"><!--
<div class="ui pbar horizontal size-mini label">
	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
		<ul class="ui pbar--label">
			<li><div>0</div></li>
			<li><div>20</div></li>
			<li><div>40</div></li>
			<li><div>60</div></li>
			<li><div>80</div></li>
			<li><div>120</div></li>
			<li><div>140</div></li>
			<li><div>160</div></li>
			<li><div>180</div></li>
			<li><div>200</div></li>
			<li><div>220</div></li>
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
					<div class="ui pbar horizontal size-mini label">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="ui pbar--label">
								<li><div>0</div></li>
								<li><div>20</div></li>
								<li><div>40</div></li>
								<li><div>60</div></li>
								<li><div>80</div></li>
								<li><div>120</div></li>
								<li><div>140</div></li>
								<li><div>160</div></li>
								<li><div>180</div></li>
								<li><div>200</div></li>
								<li><div>220</div></li>
							</ul>
						</div>
					</div>
					
				</div>
				<div class="col-1/2 align-center">
					<div class="ui pbar vertical size-mini label h-260">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="ui pbar--label">
								<li><div>0</div></li>
								<li><div>20</div></li>
								<li><div>40</div></li>
								<li><div>60</div></li>
								<li><div>80</div></li>
								<li><div>120</div></li>
								<li><div>140</div></li>
								<li><div>160</div></li>
								<li><div>180</div></li>
								<li><div>200</div></li>
								<li><div>220</div></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/2 align-center"><span><label>horizontal</label> <label>label</label></span></div>
				<div class="col-1/2 align-center"><span><label>vertical</label> <label>label</label></span></div>
			</li>
		</ul>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Reversed</h4>
		<p class="paragraphe-manual">
			For Reverse the Progressbar, add the class <label>reverse</label><br/>
			You load the specific "pbar--label" container.
		</p>
<pre><code class="language-html"><!--
<div class="ui pbar horizontal size-mini label reverse">
	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
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
					<div class="ui pbar horizontal size-mini label reverse">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="ui pbar--label">
								<li><div>0</div></li>
								<li><div>20</div></li>
								<li><div>40</div></li>
								<li><div>60</div></li>
								<li><div>80</div></li>
								<li><div>120</div></li>
								<li><div>140</div></li>
								<li><div>160</div></li>
								<li><div>180</div></li>
								<li><div>200</div></li>
								<li><div>220</div></li>
							</ul>
						</div>
					</div>
					
				</div>
				<div class="col-1/2 align-center">
					<div class="ui pbar vertical size-mini label reverse h-260">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
							<ul class="ui pbar--label">
								<li><div>0</div></li>
								<li><div>20</div></li>
								<li><div>40</div></li>
								<li><div>60</div></li>
								<li><div>80</div></li>
								<li><div>120</div></li>
								<li><div>140</div></li>
								<li><div>160</div></li>
								<li><div>180</div></li>
								<li><div>200</div></li>
								<li><div>220</div></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/2 align-center"><span><label>horizontal</label> <label>reverse</label></span></div>
				<div class="col-1/2 align-center"><span><label>vertical</label> <label>reverse</label></span></div>
			</li>
		</ul>

	</article>

</section>