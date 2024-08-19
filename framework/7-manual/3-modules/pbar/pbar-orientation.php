<section>

	<?php include('7-manual/3-modules/pbar/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Orientation</h2>
		<p class="paragraphe-manual">
			The Progress Bar must contain an Orientation class: <label>vertical</label> or <label>horizontal</label><br/>
			The Progress Bar can be use inside a "Grid > Column" and a "Table > Row > Column".
		</p>
	</article>



	<article>
		<h4 class="ui h4 mg-med font-semibold">Horizontal (In Table)</h4>
<pre><code class="language-html"><!--
<ul class="ui table table-manual size-mini">
	<li>
		<div class="col-240"><span>Responsive</span></div>
		<div>
			<div class="ui pbar size-mini horizontal">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-240"><span>Specific Witdh (Align Left)</span></div>
		<div class="align-left">
			<div class="ui pbar size-mini horizontal w-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-240"><span>Specific Witdh (Align Center)</span></div>
		<div class="align-center">
			<div class="ui pbar size-mini horizontal w-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-240"><span>Specific Witdh (Align Right)</span></div>
		<div class="align-right">
			<div class="ui pbar size-mini horizontal w-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>
--></code></pre>
		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-240"><span>Types</span></div>
				<div>Progress Bar</div>
				<div class="col-160"><span>Class on Progress Bar</span></div>
				<div class="col-160"><span>Class on Column</span></div>
			</li>
			<li>
				<div class="col-240"><span>Responsive Width</span></div>
				<div>
					<div class="ui pbar size-mini horizontal">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"></div>
				<div class="col-160"></div>
			</li>
			<li>
				<div class="col-240"><span>Specific Witdh (Align Left)</span></div>
				<div class="align-left">
					<div class="ui pbar size-mini horizontal w-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"><span><label>w-{size}</label></span></div>
				<div class="col-160"><span><label>align-left</label></span></div>
			</li>
			<li>
				<div class="col-240"><span>Specific Witdh (Align Center)</span></div>
				<div class="align-center">
					<div class="ui pbar size-mini horizontal w-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"><span><label>w-{size}</label></span></div>
				<div class="col-160"><span><label>align-center</label></span></div>
			</li>
			<li>
				<div class="col-240"><span>Specific Witdh (Align Right)</span></div>
				<div class="align-right">
					<div class="ui pbar size-mini horizontal w-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"><span><label>w-{size}</label></span></div>
				<div class="col-160"><span><label>align-right</label></span></div>
			</li>
		</ul>

		<br/><br/>

		<h4 class="ui h4 mg-med font-semibold">Horizontal (In Grid)</h4>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-12 pad-mini gap-no">

	<div class="ui col mini-3">Responsive Width</div>
	<div class="ui col mini-9">
		<div class="col-content">
			<div class="ui pbar size-mini horizontal">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="ui col mini-3">Specific Witdh (Align Left)</div>
	<div class="ui col mini-9 align-middle-left">
		<div class="col-content">
			<div class="ui pbar size-mini horizontal w-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="ui col mini-3">Specific Witdh (Align Center)</div>
	<div class="ui col mini-9 align-middle-center">
		<div class="col-content">
			<div class="ui pbar size-mini horizontal w-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="ui col mini-3">Specific Witdh (Align Right)</div>
	<div class="ui col mini-9 align-middle-right">
		<div class="col-content">
			<div class="ui pbar size-mini horizontal w-300">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-12 pad-mini gap-no">

			<div class="ui col mini-3 pad-no"><header class="col-header size-mini font-bold">Types</header></div>
			<div class="ui col mini-5 pad-no"><header class="col-header size-mini font-bold">Progress Bar</header></div>
			<div class="ui col mini-2 pad-no"><header class="col-header size-mini font-bold">Class on Progress Bar</header></div>
			<div class="ui col mini-2 pad-no"><header class="col-header size-mini font-bold">Class on Column</header></div>

			<div class="ui col mini-3">Responsive Width</div>
			<div class="ui col mini-5">
				<div class="col-content">
					<div class="ui pbar size-mini horizontal">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"></div>
			<div class="ui col mini-2"></div>

			<div class="ui col mini-3">Specific Witdh (Align Left)</div>
			<div class="ui col mini-5 align-middle-left">
				<div class="col-content">
					<div class="ui pbar size-mini horizontal w-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"><span><label class="manual-label">w-{size}</label></span></div>
			<div class="ui col mini-2"><span><label class="manual-label">align-middle-left</label></span></div>

			<div class="ui col mini-3">Specific Witdh (Align Center)</div>
			<div class="ui col mini-5 align-middle-center">
				<div class="col-content h-resp">
					<div class="ui pbar size-mini horizontal w-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"><span><label class="manual-label">w-{size}</label></span></div>
			<div class="ui col mini-2"><span><label class="manual-label">align-middle-center</label></span></div>

			<div class="ui col mini-3">Specific Witdh (Align Right)</div>
			<div class="ui col mini-5 align-middle-right">
				<div class="col-content h-resp">
					<div class="ui pbar size-mini horizontal w-300">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"><span><label class="manual-label">w-{size}</label></span></div>
			<div class="ui col mini-2"><span><label class="manual-label">align-middle-right</label></span></div>
		</div>

	</article>













	<article>

		<h4 class="ui h4 mg-med font-semibold">Vertical (In Table)</h4>
<pre><code class="language-html"><!--
<ul class="ui table table-manual size-mini">
	<li>
		<div class="col-240"><span>Responsive Height</span></div>
		<div class="h-150">
			<div class="ui pbar size-mini vertical">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-240"><span>Specific Height (Align Left)</span></div>
		<div class="align-left">
			<div class="ui pbar size-mini vertical h-150">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-240"><span>Specific Height (Align Center)</span></div>
		<div class="align-center">
			<div class="ui pbar size-mini vertical h-150">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li>
		<div class="col-240"><span>Specific Height (Align Right)</span></div>
		<div class="align-right">
			<div class="ui pbar size-mini vertical h-150">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>
--></code></pre>
		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-240"><span>Types</span></div>
				<div>Progress Bar</div>
				<div class="col-160"><span>Class on Progress Bar</span></div>
				<div class="col-160"><span>Class on Column</span></div>
			</li>
			<li>
				<div class="col-240"><span>Responsive Height</span></div>
				<div class="h-150">
					<div class="ui pbar size-mini vertical">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"></div>
				<div class="col-160"></div>
			</li>
			<li>
				<div class="col-240"><span>Specific Height (Align Left)</span></div>
				<div class="align-left">
					<div class="ui pbar size-mini vertical h-150">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"><span><label>h-{size}</label></span></div>
				<div class="col-160"><span><label>align-left</label></span></div>
			</li>
			<li>
				<div class="col-240"><span>Specific Height (Align Center)</span></div>
				<div class="align-center">
					<div class="ui pbar size-mini vertical h-150">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"><span><label>h-{size}</label></span></div>
				<div class="col-160"><span><label>align-center</label></span></div>
			</li>
			<li>
				<div class="col-240"><span>Specific Height (Align Right)</span></div>
				<div class="align-right">
					<div class="ui pbar size-mini vertical h-150">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-160"><span><label>h-{size}</label></span></div>
				<div class="col-160"><span><label>align-right</label></span></div>
			</li>
		</ul>

		<br/><br/>
		
		<h4 class="ui h4 mg-med font-semibold">Vertical (In Grid)</h4>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-12 pad-mini gap-no middle-left">

	<div class="ui col mini-3">Responsive Width</div>
	<div class="ui col mini-9 h-150">
		<div class="col-content h-resp">
			<div class="ui pbar size-mini vertical">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="ui col mini-3">Specific Height (Align Left)</div>
	<div class="ui col mini-9 align-middle-left">
		<div class="col-content h-resp">
			<div class="ui pbar size-mini vertical h-150">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="ui col mini-3">Specific Height (Align Center)</div>
	<div class="ui col mini-9 align-middle-center">
		<div class="col-content h-resp">
			<div class="ui pbar size-mini vertical h-150">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="ui col mini-3">Specific Height (Align Right)</div>
	<div class="ui col mini-9 align-middle-right">
		<div class="col-content h-resp">
			<div class="ui pbar size-mini vertical h-150">
				<div class="pbar--container">
					<div class="ui pbar--item">
						<div class="color-fl-blue" style="flex-basis:60%;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-12 pad-mini gap-no middle-left">

			<div class="ui col mini-3 pad-no"><header class="col-header size-mini font-bold">Types</header></div>
			<div class="ui col mini-5 pad-no"><header class="col-header size-mini font-bold">Progress Bar</header></div>
			<div class="ui col mini-2 pad-no"><header class="col-header size-mini font-bold">Class on Progress Bar</header></div>
			<div class="ui col mini-2 pad-no"><header class="col-header size-mini font-bold">Class on Column</header></div>

			<div class="ui col mini-3">Responsive Height</div>
			<div class="ui col mini-5 h-150">
				<div class="col-content h-resp">
					<div class="ui pbar size-mini vertical">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"></div>
			<div class="ui col mini-2"></div>

			<div class="ui col mini-3">Specific Height (Align Left)</div>
			<div class="ui col mini-5 align-middle-left">
				<div class="col-content h-resp">
					<div class="ui pbar size-mini vertical h-150">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"><span><label class="manual-label">h-{size}</label></span></div>
			<div class="ui col mini-2"><span><label class="manual-label">align-middle-left</label></span></div>

			<div class="ui col mini-3">Specific Height (Align Center)</div>
			<div class="ui col mini-5 align-middle-center">
				<div class="col-content h-resp">
					<div class="ui pbar size-mini vertical h-150">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"><span><label class="manual-label">h-{size}</label></span></div>
			<div class="ui col mini-2"><span><label class="manual-label">align-middle-center</label></span></div>

			<div class="ui col mini-3">Specific Height (Align Right)</div>
			<div class="ui col mini-5 align-middle-right">
				<div class="col-content h-resp">
					<div class="ui pbar size-mini vertical h-150">
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ui col mini-2"><span><label class="manual-label">h-{size}</label></span></div>
			<div class="ui col mini-2"><span><label class="manual-label">align-middle-right</label></span></div>
		</div>
	</article>


</section>