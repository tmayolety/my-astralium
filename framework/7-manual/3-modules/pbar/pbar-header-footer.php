<section>

	<?php include('7-manual/3-modules/pbar/header.php'); ?>

	<article>
		<h2 class="ui h2 mg-med font-bold">Header & Footer</h2>
		<p class="paragraphe-manual">
			For add a HEADER and a FOOTER to the Progress Bar, you must add the class:<br/>
			<label>header-{size}-x{lines}</label> <label>footer-{size}-x{lines}</label><br/><br/>
			{Size} class for HEADER are:<br/><label>header-mini-x{lines}</label> <label>header-sm-x{lines}</label> <label>header-med-x{lines}</label> <label>header-lg-x{lines}</label> <label>header-xl-x{lines}</label><br/><br/>
			{Size} class for FOOTER are:<br/><label>footer-mini-x{lines}</label> <label>footer-sm-x{lines}</label> <label>footer-med-x{lines}</label> <label>footer-lg-x{lines}</label> <label>footer-xl-x{lines}</label><br/><br/>
			{Lines} on header are for define the maximum lines. That prevent various header height between Progress Bar.<br/>
			Class are from 1 to 3: <label>header-{size}-x1</label> <label>header-{size}-x2</label> <label>header-{size}-x3</label><br/><br/>
			You can hidden the HEADER or FOOTER with: <label>header-no</label> <label>footer-no</label>
		</p>
	</article>

	


	<article>
		<h4 class="ui h4 mg-med font-semibold">Base</h4>
<pre><code class="language-html"><!--
<div class="ui pbar horizontal size-sm header-med-x1">

	<header>
		<h5 class="font-semibold">Lorem ipsum dolor</h5>
	</header>

	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
	</div>

	<footer>
		<div class="font-regular">
			<h5 class="font-bold">27840</h5>
			<h6>/ 50000 Bar</h6>
		</div>
	</footer>

</div>
--></code></pre>
		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-1/2 align-center">Horizontal</div>
				<div class="col-1/2 align-center">Vertical</div>
			</li>
			<li>
				<div class="col-1/2 align-center">
					<div class="ui pbar horizontal size-sm header-med-x1">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
				<div class="col-1/2 align-center">
					<div class="ui pbar vertical size-sm header-med-x1 h-300">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
			</li>
		</ul>
	</article>

	


	<article>
		<h4 class="ui h4 mg-med font-semibold">Sizes</h4>
		<p class="paragraphe-manual" style="color: red">{lines} not working properly, MUST TO BE FIX !</p>
<pre><code class="language-html"><!--
<div class="ui pbar vertical size-sm header-mini-x2 footer-mini-x2 h-300">

	<header>
		<h5 class="font-semibold">Lorem ipsum dolor</h5>
	</header>

	<div class="pbar--container">
		<div class="ui pbar--item">
			<div class="color-fl-blue" style="flex-basis:60%;"></div>
		</div>
	</div>

	<footer>
		<div class="font-regular">
			<h5 class="font-bold">27840</h5>
			<h6>/ 50000 Bar</h6>
		</div>
	</footer>

</div>
--></code></pre>
		<ul class="ui table table-manual size-mini">
			<li class="thead">
				<div class="col-5/5 align-center">Horizontal</div>
			</li>
			<li>
				<div class="col-1/5 align-center"><span><label>header-mini-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>header-sm-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>header-med-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>header-lg-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>header-xl-x1</label></span></div>
			</li>
			<li>
				<div class="col-1/5 align-center">
					<div class="ui pbar vertical size-sm header-mini-x2 footer-mini-x1 h-300">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
				<div class="col-1/5 align-center">
					<div class="ui pbar vertical size-sm header-sm-x2 footer-sm-x1 h-300">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
				<div class="col-1/5 align-center">
					<div class="ui pbar vertical size-sm header-med-x2 footer-med-x1 h-300">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
				<div class="col-1/5 align-center">
					<div class="ui pbar vertical size-sm header-lg-x2 footer-lg-x1 h-300">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
				<div class="col-1/5 align-center">
					<div class="ui pbar vertical size-sm header-xl-x2 footer-xl-x1 h-300">
						<header>
							<h5 class="font-semibold">Lorem ipsum dolor</h5>
						</header>
						<div class="pbar--container">
							<div class="ui pbar--item">
								<div class="color-fl-blue" style="flex-basis:60%;"></div>
							</div>
						</div>
						<footer>
							<div class="font-regular">
								<h5 class="font-bold">27840</h5>
								<h6>/ 50000 Bar</h6>
							</div>
						</footer>
					</div>
				</div>
			</li>
			<li>
				<div class="col-1/5 align-center"><span><label>footer-mini-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>footer-sm-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>footer-med-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>footer-lg-x1</label></span></div>
				<div class="col-1/5 align-center"><span><label>footer-xl-x1</label></span></div>
			</li>
		</ul>
	</article>


</section>