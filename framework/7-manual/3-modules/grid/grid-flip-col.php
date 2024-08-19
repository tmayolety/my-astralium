<section>

	<?php include('7-manual/3-modules/grid/header.php'); ?>


	<article>
		<h2 class="ui h2 mg-med font-bold">Flip Column</h2>
		<p class="paragraphe-manual">
			For converting the Column as a Flip Column, you must add those class: <label>flip-col</label> <label>event-{type}</label> <label>{direction}</label><br/><br/>
			Then, you must create a Container for the Front and Back Columns, using the class: <label>flip-col--container</label><br/>
			After that, you can Add the Front and Back Columns inside.
		</p>
<pre><code class="language-html"><!--
<div class="ui grid type1 cols-mini-4 gap-xl pad-no">

	<div class="ui col mini-1 flip-col go-bt event-over"> 					<--- Column converted as Flip Column

		<div class="flip-col--container"> 									<--- Container of the Front & Back Columns

			<div class="ui col pad-xl align-middle-center h-120"> 			<--- Front Column
				<div class="ui col-content">							
					<h1 class="ui h1 font-bold">FRONT</h1>
				</div>
			</div>

			<div class="ui col pad-xl middle-center"> 						<--- Back Column
				<h4 class="ui h4 font-bold">BACK</h4>
			</div>

		</div>
	</div>

</div>
--></code></pre>
	</article>





	<article>
		<h42 class="ui h4 mg-med font-semibold">Flip Events</h4>
		<p class="paragraphe-manual">
			You have 2 type of event for Flip the Column.<br/>
			You can Flip it with a Click, or with a Mouse Over (or press) using those clase: <label>event-click</label> <label>event-over</label><br/>
		</p>
<pre><code class="language-html"><!--
// EVENT OVER //
<div class="ui grid type1 cols-mini-4 gap-xl pad-no">
	<div class="ui col mini-1 flip-col go-bt event-over"> 					<--- Event-over
		<div class="flip-col--container">
			{{ FRONT COLUMN }}
			{{ BACK COLUMN }}
		</div>
	</div>
</div>

// EVENT CLICK //
<div class="ui grid type1 cols-mini-4 gap-xl pad-no">
	<div class="ui col mini-1 flip-col go-bt event-click"> 					<--- Event-click
		<div class="flip-col--container">
			<div class="ui col pad-xl align-middle-center h-120">
				<div class="ui col-content">
					<button class="ui btn med gutter-sm primary font-bold" onclick="$(this).parent().parent().parent().parent().addClass('event-click');">OPEN</button>
				</div>
			</div>
			<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
				<button class="ui btn med gutter-sm primary font-bold"onclick="$(this).parent().parent().parent().removeClass('event-click');">CLOSE</button>
			</div>
		</div>
	</div>
</div>
--></code></pre>
		<div class="ui grid type1 cols-mini-4 gap-xl pad-no">

			<div class="ui col mini-1 flip-col go-bt event-over">
				<div class="flip-col--container">
					<div class="ui col pad-xl align-middle-center h-120">
						<div class="col-content">							
							<h1 class="ui h1 font-bold">MOUSE<br/>OUT</h1>
						</div>
					</div>
					<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
						<h4 class="ui h4 font-bold color-text-type-primary">Content</h4>
					</div>
				</div>
			</div>

			<div class="ui col mini-1 flip-col go-bt">
				<div class="flip-col--container">
					<div class="ui col pad-xl align-middle-center h-120">
						<div class="col-content">
							<button class="ui btn med gutter-sm primary font-bold" onclick="$(this).parent().parent().parent().parent().addClass('event-click');">OPEN</button>
						</div>
					</div>
					<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
						<button class="ui btn med gutter-sm primary font-bold"onclick="$(this).parent().parent().parent().removeClass('event-click');">CLOSE</button>
					</div>
				</div>
			</div>

		</div>

	</article>





	<article>
		<h4 class="ui h4 mg-med font-semibold">Flip Directions</h4>

		<div class="ui grid type1 cols-mini-4 gap-xl pad-no">

			<div class="ui col mini-1 flip-col go-lft event-over">
				<div class="flip-col--container">
					<div class="ui col pad-xl align-middle-center h-200">
						<div class="col-content">
							<i class="ui icon-size-80 color-fill-type-primary glow mg-bottom-20"><?php echo file_get_contents('3-modules/icons/arrow-1-left.svg'); ?></i>		
							<h1 class="ui h1 font-bold">LEFT</h1>
						</div>
					</div>
					<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
						<h4 class="ui h4 font-bold color-text-type-primary">Content</h4>
					</div>
				</div>
			</div>

			<div class="ui col mini-1 flip-col go-rgt event-over">
				<div class="flip-col--container">
					<div class="ui col pad-xl align-middle-center h-200">
						<div class="col-content">
							<i class="ui icon-size-80 color-fill-type-primary glow mg-bottom-20"><?php echo file_get_contents('3-modules/icons/arrow-1-right.svg'); ?></i>		
							<h1 class="ui h1 font-bold">RIGHT</h1>
						</div>
					</div>
					<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
						<h4 class="ui h4 font-bold color-text-type-primary">Content</h4>
					</div>
				</div>
			</div>

			<div class="ui col mini-1 flip-col go-tp event-over">
				<div class="flip-col--container">
					<div class="ui col pad-xl align-middle-center h-200">
						<div class="col-content">
							<i class="ui icon-size-80 color-fill-type-primary glow mg-bottom-20"><?php echo file_get_contents('3-modules/icons/arrow-1-top.svg'); ?></i>		
							<h1 class="ui h1 font-bold">TOP</h1>
						</div>
					</div>
					<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
						<h4 class="ui h4 font-bold color-text-type-primary">Content</h4>
					</div>
				</div>
			</div>

			<div class="ui col mini-1 flip-col go-bt event-over">
				<div class="flip-col--container">
					<div class="ui col pad-xl align-middle-center h-200">
						<div class="col-content">
							<i class="ui icon-size-80 color-fill-type-primary glow mg-bottom-20"><?php echo file_get_contents('3-modules/icons/arrow-1-bottom.svg'); ?></i>		
							<h1 class="ui h1 font-bold">BOTTOM</h1>
						</div>
					</div>
					<div class="ui col pad-xl middle-center color-bg-op-type-primary-dark">
						<h4 class="ui h4 font-bold color-text-type-primary">Content</h4>
					</div>
				</div>
			</div>

		</div>

	</article>	<article>


		<div class="ui grid type1 cols-mini-3 gap-xl pad-no">

			<div class="ui col mini-1 flip-col go-bt event-over">
				<div class="flip-col--container">
					<div class="ui col pad-no align-middle-center reset-w-align h-300">
						<div class="ui col-content">
							<i class="ui icon-size-80 color-fill-type-white glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
							<h4 class="ui h4 font-semibold mg-top-20">Oil</h4>
						</div>
					</div>
					<div class="ui col pad-no top-center reset-w-align color-bg-op-type-primary-light">
						<div class="ui col-content">
							<div class="ui grid type2 cols-mini-12 gap-no">

								<div class="ui col mini-2 pad-sm">
									<i class="ui icon-size-35 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/tanks.svg'); ?></i>
								</div>
								<div class="ui col mini-10 pad-xl">
									<div class="ui pbar size-mini horizontal">
										<div class="pbar--container">
											<div class="ui pbar--item">
												<div class="color-fl-blue" style="flex-basis:60%;"></div>
											</div>
										</div>
									</div>
								</div>

								<div class="ui col mini-2 pad-sm">
									<i class="ui icon-size-35 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/shore.svg'); ?></i>
								</div>
								<div class="ui col mini-10 pad-xl">
									<div class="ui pbar size-mini horizontal">
										<div class="pbar--container">
											<div class="ui pbar--item">
												<div class="color-fl-blue" style="flex-basis:60%;"></div>
											</div>
										</div>
									</div>
								</div>

								<div class="ui col mini-2 pad-sm">
									<i class="ui icon-size-35 color-fill-type-primary glow"><?php echo file_get_contents('3-modules/icons/batteries.svg'); ?></i>
								</div>
								<div class="ui col mini-10 pad-xl">
									<div class="ui pbar size-mini horizontal">
										<div class="pbar--container">
											<div class="ui pbar--item">
												<div class="color-fl-blue" style="flex-basis:60%;"></div>
											</div>
										</div>
									</div>
								</div>

							</div>

							<ul class="ui table size-mini">
								<li>
									<div class="col-200 color-bg-op-type-primary-dark"><span>Column</span></div>
									<div class="color-bg-op-type-primary-dark"><span>Column</span></div>
								</li>
								<li>
									<div class="col-200 color-bg-op-type-primary-dark"><span>Column</span></div>
									<div class="color-bg-op-type-primary-dark"><span>Column</span></div>
								</li>
								<li>
									<div class="col-200 color-bg-op-type-primary-dark"><span>Column</span></div>
									<div class="color-bg-op-type-primary-dark"><span>Column</span></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>

	</article>

</section>