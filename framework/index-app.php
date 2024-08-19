<!DOCTYPE html>
<html lang='en' xml:lang='en' xmlns='http://www.w3.org/1999/xhtml' data-scheme="scheme1" id="html">
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<head>
	<title>APP LAYOUT</title>

	<!--script src="../../js/jquery/jquery.js"></script-->
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

	<link href="css/app.css" rel="stylesheet">
	<link href="7-manual/manual.css" rel="stylesheet">
	<link href="css/utilities.css" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/21.2.3/css/dx.common.css">
	<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/21.2.3/css/dx.material.purple.light.css">
	<script src="https://cdn3.devexpress.com/jslib/21.2.3/js/dx.all.js"></script>

</head>



<body data-devmode="true">

	<main data-nav-open="true">

		<?php include('7-manual/2-layout/main-nav.php'); ?>
		<?php include('7-manual/2-layout/header.php'); ?>		
		<?php include($p); ?>		

	</main>

</body>
</html>


<!--
<div class="datasheet" style="display:none;">
	<header>Header</header>
	<div class="datasheet--tools">Tools</div>
	<section>Section</section>
</div>-->