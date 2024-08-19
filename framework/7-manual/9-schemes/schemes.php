<section>

	<?php include('7-manual/9-schemes/header.php'); ?>

	<article>

		<h2 class="ui h2 mg-med font-bold">Schemes</h2>
		<div class="ui grid type1 cols-mini-1 gap-xl pad-no scheme1">
			<div class="ui col mini-1 bg-no"><?php include('7-manual/9-schemes/schemes-table.php'); ?></div>
			<div class="ui col mini-1">

				<div class="scheme-layout-demo">

					<div class="header"></div>

					<div class="section">
						<div class="ui grid type1 cols-mini-2 gap-lg pad-xl middle-center">
							<div class="ui col mini-1 h-200">Column</div>
							<div class="ui col mini-1 h-200">Column</div>
						</div>				
					</div>

					<div class="manu-tabs"></div>

					<div class="aside">
						<div class="active">
							<?php echo file_get_contents('3-modules/icons/circle.svg'); ?>
							<span class="ui text-size1">Active</span>
						</div>
						<div>
							<?php echo file_get_contents('3-modules/icons/circle.svg'); ?>
							<span class="ui text-size1">Inactive</span>
						</div>
						<div>
							<?php echo file_get_contents('3-modules/icons/circle.svg'); ?>
							<span class="ui text-size1">Inactive</span>
						</div>
					</div>
				</div>

			</div>
		</div>

	</article>	

</section>
