
<div class="ui header-popup" id="header-popup-users">

	<div class="ui grid type1 cols-mini-1 pad-no gap-xl">

		<div class="ui grid cols-mini-1 col mini-1 pad-no gap-no has-header">

			<header class="ui col">
				<font>Users</font>
				<span class="gradients">
					<span class="gradient-left"></span>
					<span class="gradient-right"></span>
				</span>
				
				
				<button class="ui btn sm primary colored icon icon-only active" onclick="$(this).parent().parent().parent().parent().parent().removeClass('active');">
					<?php echo file_get_contents('3-modules/icons/close.svg'); ?>
				</button>
			</header>

			<div class="ui col mini-1 pad-sm user-select
						grid cols-mini-1 cols-phone-2">
				<div class="ui col mini-1 phone-1">

					<div class="ui grid type2 cols-mini-3 gap-lg pad-no">
						<div class="ui mini-1">
							<button class="ui btn xl primary icon vertical radius-no" onclick="$('.access-code').toggleClass('active');">
								<?php echo file_get_contents('3-modules/icons/user-captain.svg'); ?>
								Captain
							</button>
						</div>
						<div class="ui mini-1">
							<button class="ui btn xl primary icon vertical radius-no active" onclick="$('.access-code').toggleClass('active');">
								<?php echo file_get_contents('3-modules/icons/user-engineer.svg'); ?>
								Engineer
							</button>
						</div>
						<div class="ui mini-1">
							<button class="ui btn xl primary icon vertical radius-no" onclick="$('.access-code').toggleClass('active');">
								<?php echo file_get_contents('3-modules/icons/user-worker.svg'); ?>
								Worker
							</button>
						</div>
						<div class="ui mini-1">
							<button class="ui btn xl primary icon vertical radius-no" onclick="$('.access-code').toggleClass('active');">
								<?php echo file_get_contents('3-modules/icons/user-tools.svg'); ?>
								Tools
							</button>
						</div>
						<div class="ui mini-1">
							<button class="ui btn xl primary icon vertical radius-no" onclick="$('.access-code').toggleClass('active');">
								<?php echo file_get_contents('3-modules/icons/user-admin.svg'); ?>
								Admin
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="ui col mini-1 pad-lg middle-center access-code">
				<h2 class="ui h2 mg-bottom-10">Type your Access code</h2>
				<div class="ui grid type2 cols-mini-3 cols-phone-3 gap-med fit-content">
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">7</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">8</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">9</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">4</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">5</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">6</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">1</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">2</button>
					</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">3</button>
						</div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94"></div>
					<div class="ui col mini-1 phone-1 h-mini-103 h-phone-94">
						<button class="ui btn xl rounded primary w-mini-100 h-mini-100 w-phone-90 h-phone-90 font-bold text-size7">0</button>
					</div>
				</div>
			</div>

		</div>
	</div>


</div>