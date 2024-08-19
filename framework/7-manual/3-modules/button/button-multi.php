<section>

	<?php include('7-manual/3-modules/button/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Button Multi</h2>
		<p class="paragraphe-manual">
			The Button Multi is highly customizable.<br/><br/>
			The container must contain <label>ui</label> <label>btn-multi</label><br/>
			The Button MUST have a <a class="link-manual" href="?Section=button-base">Type</a>
		</p>
		</br/>
		<h5 class="ui h5 mg-med font-semibold">Text customization</h5>
		<p class="paragraphe-manual">
			You have up to 3 text available.<br/>For each one, you can change the Size, Aligment, Typography and Margin Bottom.<br/>
			Define the <a class="link-manual" href="?Section=typography-text">Text Sizes</a> adding the class on the HEADER.<br/>
			Define the <a class="link-manual" href="?Section=utilities-margin">Margin</a> adding the class on the Text container.<br/>
			For the Aligment, use those class: <label>align-left</label> <label>align-center</label> <label>align-right</label><br/>
			For the Typography, use those <a class="link-manual" href="?Section=typography">Typography</a> class.
		</p>

<pre><code class="language-html"><!--
<div class="ui btn-multi">
	<button class="ui btn mini primary radius-no">
		<div class="content">
			<div class="align-left font-semibold text-size-8">MODE A</div>
			<div class="align-left font-light text-size-30">024</div>
			<div class="align-left font-semibold text-size-8">Subtitle</div>
		</div>
	</button>
	<div class="borders">
		<span class="border-tl"></span>
		<span class="border-tr"></span>
		<span class="border-bl"></span>
		<span class="border-br"></span>
	</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">

					<div class="ui btn-multi">
						<button class="ui btn mini primary radius-no">
							<div class="content">
								<div class="align-left font-semibold text-size-8">MODE A</div>
								<div class="align-left font-light text-size-30">024</div>
								<div class="align-left font-semibold text-size-8">Subtitle</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>
				</div>

			</div>
		</div>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Progress Bar</h4>
		<p class="paragraphe-manual">
			You can add a <a class="link-manual" href="?Section=pbar-vert">Vertical Progress bar</a> inside the Button Multi<br/>
		</p>
<pre><code class="language-html"><!--
<div class="ui btn-multi">
	<button class="ui btn mini primary radius-no">
		<div class="content">
			<div class="align-left font-semibold text-size-8">MODE A</div>
			<div class="align-left font-light text-size-30">024</div>
			<div class="align-left font-semibold text-size-8">Subtitle</div>
		</div>
		<div class="ui pbar size-mini vertical">
			<div class="pbar--container">
				<div class="ui pbar--item">
					<div class="color-fl-blue" style="flex-basis:60%;"></div>
				</div>
			</div>
		</div>
	</button>
	<div class="borders">
		<span class="border-tl"></span>
		<span class="border-tr"></span>
		<span class="border-bl"></span>
		<span class="border-br"></span>
	</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-med">
			<div class="ui col mini-1">
				<div class="col-content">

					<div class="ui btn-multi">
						<button class="ui btn mini primary radius-no">
							<div class="content">
								<div class="align-left font-semibold text-size-8">MODE A</div>
								<div class="align-left font-light text-size-30">024</div>
								<div class="align-left font-semibold text-size-8">Subtitle</div>
							</div>
							<div class="ui pbar size-mini vertical">
								<div class="pbar--container">
									<div class="ui pbar--item">
										<div class="color-fl-blue" style="flex-basis:60%;"></div>
									</div>
								</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>

				</div>				
			</div>
		</div>
	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">States</h4>
		<p class="paragraphe-manual">
			- For responsivess, add the class <label>resp-w</label> and/or <label>resp-h</label> on the btn-multi<br/><br/>
			- The Button Multi have 4 States, and you can mixe them :</p>


		<ul class="ui table table-manual size-sm resp">
			<li class="thead">
				<div class="col-1/4 align-middle-center"><span>Off</span></div>
				<div class="col-1/4 align-middle-center"><span>On</span></div>
				<div class="col-1/4 align-middle-center"><span>Feedback</span></div>
				<div class="col-1/4 align-middle-center"><span>Active</span></div>
			</li>
			
			<li>
				<div class="col-1/4 align-middle-center">
					<div class="ui btn-multi resp-w">
						<button class="ui btn mini primary radius-no">
							<div class="content">
								<div class="align-left font-semibold text-size-8">MODE A</div>
								<div class="align-left font-light text-size-30">024</div>
								<div class="align-left font-semibold text-size-8">Subtitle</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>
				</div>

				<div class="col-1/4 align-middle-center">
					<div class="ui btn-multi resp-w">
						<button class="ui btn mini primary colored radius-no">
							<div class="content">
								<div class="align-left font-semibold text-size-8">MODE A</div>
								<div class="align-left font-light text-size-30">024</div>
								<div class="align-left font-semibold text-size-8">Subtitle</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>
				</div>

				<div class="col-1/4 align-middle-center">
					<div class="ui btn-multi resp-w feedback">
						<button class="ui btn mini primary radius-no">
							<div class="content">
								<div class="align-left font-semibold text-size-8">MODE A</div>
								<div class="align-left font-light text-size-30">024</div>
								<div class="align-left font-semibold text-size-8">Subtitle</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>
				</div>

				<div class="col-1/4 align-middle-center">
					<div class="ui btn-multi resp-w">
						<button class="ui btn mini primary active radius-no">
							<div class="content">
								<div class="align-left font-semibold text-size-8">MODE A</div>
								<div class="align-left font-light text-size-30">024</div>
								<div class="align-left font-semibold text-size-8">Subtitle</div>
							</div>
						</button>
						<div class="borders">
							<span class="border-tl"></span>
							<span class="border-tr"></span>
							<span class="border-bl"></span>
							<span class="border-br"></span>
						</div>
					</div>
				</div>
			</li>

			<li>
				<div class="col-1/4 align-middle-center"><span>Default</span></div>
				<div class="col-1/4 align-middle-center"><span><label>colored</label> on the button</span></div>
				<div class="col-1/4 align-middle-center"><span><label>feedback</label> on the button multi</span></div>
				<div class="col-1/4 align-middle-center"><span><label>active</label> on the button</span></div>
			</li>
		</ul>
		<br/>

<pre><code class="language-html"><!--
// OFF (Default) //
<div class="ui btn-multi resp-w">
	<button class="ui btn mini primary radius-no">
		<div class="content">
			<div class="align-left font-semibold text-size-8">MODE A</div>
			<div class="align-left font-light text-size-30">024</div>
			<div class="align-left font-semibold text-size-8">Subtitle</div>
		</div>
	</button>
	<div class="borders">
		<span class="border-tl"></span>
		<span class="border-tr"></span>
		<span class="border-bl"></span>
		<span class="border-br"></span>
	</div>
</div>
--></code></pre>

<pre><code class="language-html"><!--
// ON //
<div class="ui btn-multi resp-w">
	<button class="ui btn mini primary colored radius-no">
		<div class="content">
			<div class="align-left font-semibold text-size-8">MODE A</div>
			<div class="align-left font-light text-size-30">024</div>
			<div class="align-left font-semibold text-size-8">Subtitle</div>
		</div>
	</button>
	<div class="borders">
		<span class="border-tl"></span>
		<span class="border-tr"></span>
		<span class="border-bl"></span>
		<span class="border-br"></span>
	</div>
</div>
--></code></pre>

<pre><code class="language-html"><!--
// FEEDBACK //
<div class="ui btn-multi resp-w feedback">
	<button class="ui btn mini primary radius-no">
		<div class="content">
			<div class="align-left font-semibold text-size-8">MODE A</div>
			<div class="align-left font-light text-size-30">024</div>
			<div class="align-left font-semibold text-size-8">Subtitle</div>
		</div>
	</button>
	<div class="borders">
		<span class="border-tl"></span>
		<span class="border-tr"></span>
		<span class="border-bl"></span>
		<span class="border-br"></span>
	</div>
</div>
--></code></pre>

<pre><code class="language-html"><!--
// ACTIVE //
<div class="ui btn-multi resp-w">
	<button class="ui btn mini primary active radius-no">
		<div class="content">
			<div class="align-left font-semibold text-size-8">MODE A</div>
			<div class="align-left font-light text-size-30">024</div>
			<div class="align-left font-semibold text-size-8">Subtitle</div>
		</div>
	</button>
	<div class="borders">
		<span class="border-tl"></span>
		<span class="border-tr"></span>
		<span class="border-bl"></span>
		<span class="border-br"></span>
	</div>
</div>
--></code></pre>

	</article>


</section>