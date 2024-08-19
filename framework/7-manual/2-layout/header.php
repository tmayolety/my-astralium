<header>

	<ul class="ui header-section">

		<li class="logo" data-alert="true">
			<?php include('7-manual/2-layout/bluewave-logo.svg'); ?>
		</li>

		<li class="header--yatch hidden-phone">
			<div class="header-section--btn">
				<?php echo file_get_contents('3-modules/icons/boat.svg'); ?>
				<h4>Yatch Name</h4>
			</div>
		</li>

		<li class="header--alerts" data-alert="true" data-alert-num="22">
			<div class="header-section--btn"
				onclick="$(this).parent().toggleClass('active');">
				<?php echo file_get_contents('3-modules/icons/tripping.svg'); ?>
				<div class="header-section--btn-list hidden-phone">					
					<h6><strong>[2020-10-10] 10:02</strong> Lorem ipsum dolor sit amet</h6>
					<h6><strong>[2020-10-10] 08:15</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse</h6>
				</div>
			</div>
			<?php include('7-manual/2-layout/header-alerts.php'); ?>
		</li>

		<li class="header--events" data-alert="true">
			<div class="header-section--btn" onclick="$(this).parent().toggleClass('active');">
				<?php echo file_get_contents('3-modules/icons/notification.svg'); ?>
			</div>
			<?php include('7-manual/2-layout/header-notifications.php'); ?>
		</li>

		<li class="header--user">
			<div class="header-section--btn" onclick="$(this).parent().toggleClass('active');">
				<?php echo file_get_contents('3-modules/icons/user.svg'); ?>
			</div>
			<?php include('7-manual/2-layout/header-users.php'); ?>
		</li>

		<li class="header--user hidden-phone">
			<div class="header-section--btn" onclick="$('#html').attr('data-scheme', 'scheme1');">
				<?php echo file_get_contents('3-modules/icons/screen-mode.svg'); ?>
			</div>
		</li>

		<li class="header--user hidden-phone">
			<div class="header-section--btn" onclick="$('#html').attr('data-scheme', 'scheme2');">
				<?php echo file_get_contents('3-modules/icons/screen-mode.svg'); ?>
			</div>
		</li>

		<li class="header--user hidden-phone">
			<div class="header-section--btn" onclick="$('#html').attr('data-scheme', 'scheme3');">
				<?php echo file_get_contents('3-modules/icons/screen-mode.svg'); ?>
			</div>
		</li>

		<li class="header--user hidden-phone">
			<div class="header-section--btn" onclick="$('#html').attr('data-scheme', 'scheme4');">
				<?php echo file_get_contents('3-modules/icons/screen-mode.svg'); ?>
			</div>
		</li>

		<li class="header--date hidden-phone">
			<div class="header-section--date">
				<h4>10:30</h4>
				<h6>Jun 15 2020</h6>
			</div>
		</li>

	</ul>

</header>